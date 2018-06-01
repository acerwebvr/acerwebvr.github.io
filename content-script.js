var verbose = true;

function log() {

	if( !verbose ) return;

	console.log.apply(
		console, [
			`%c WebVREmu `,
			'background: #007AA3; color: #ffffff; text-shadow: 0 -1px #000; padding: 4px 0 4px 0; line-height: 0',
			...arguments
		]
	);

}

log( 'Polyfill', window.location.toString() );

var port = chrome.runtime.connect( { name: 'contentScript' } );

function post( msg ) {
	port.postMessage( msg );
}

post( { action: 'script-ready' } );

port.onMessage.addListener( function( msg ) {

	switch( msg.action ) {
		case 'pose':
		var e = new CustomEvent( 'webvr-pose', {
			detail: {
				position: msg.position,
				rotation: msg.rotation
			}
		} );
		window.dispatchEvent( e );
		break;
		case 'hmd-activate':
		var e = new CustomEvent( 'webvr-hmd-activate', {
			detail: {
				state: msg.value
			}
		} );
		window.dispatchEvent( e );
		break;
	}

} );

window.addEventListener( 'webvr-ready', function() {
	post( { action: 'page-ready' } );
} );

window.addEventListener( 'webvr-resetpose', function() {
	post( { action: 'reset-pose' } );
} );

window.addEventListener( 'webvr-trigger', function(e) {
	console.log("[Leo] background 01 " + e.detail)
	post( { action: 'page-trigger', detail: e.detail} );
} );

var source = '(' + injectedScript + ')();';

var script = document.createElement('script');
script.textContent = source;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);



// ================= polyfill=========================
function injectedScript() {

	var isRequestPresent = false;
	'use strict';
	var ViveData = {
		name: 'Emulated HTC Vive DVT',
		resolution: { width: 1512, height: 1680 },
		features: { canPresent: true, hasExternalDisplay: true, hasOrientation: true, hasPosition: true },
		leftEye: { offset: -0.032, up: 41.653, down: 48.008, left: 43.977, right: 35.575 },
		rightEye: { offset: 0.032, up: 41.653, down: 48.008, left: 35.575, right: 43.977 }
	}
	var RiftData = {
		name: 'Emulated Oculus Rift CV1',
		resolution: { width: 1332, height: 1586 },
		features: { canPresent: true, hasExternalDisplay: true, hasOrientation: true, hasPosition: true },
		leftEye: { offset: -0.032, up: 55.814, down: 55.728, left: 54.429, right: 51.288 },
		rightEye: { offset: 0.032, up: 55.687, down: 55.658, left: 51.110, right: 54.397 }
	}
	var CardboardData = {
		name: 'Emulated Google, Inc. Cardboard v1',
		resolution: { width: 960, height: 1080 },
		features: { canPresent: true, hasExternalDisplay: false, hasOrientation: true, hasPosition: false },
		leftEye: { offset: -0.030, up: 40, down: 40, left: 40, right: 40 },
		rightEye: { offset: 0.030, up: 40, down: 40, left: 40, right: 40 }
	}

	var startDate = Date.now();
	var startPerfNow = performance.now();

	function getCurrentIframeUrl(callback) {
    	var iframe = document.createElement('iframe');
    	iframe.src = chrome.extension.getURL('iframe-content-page.html');
    	var url = iframe.src;
    callback(url);
  	}

  	function getCurrentTabUrl(callback) {
  		// Query filter to be passed to chrome.tabs.query - see
  		// https://developer.chrome.com/extensions/tabs#method-query
  		var queryInfo = {
    	active: true,
    	currentWindow: true
  		};

  		chrome.tabs.query(queryInfo, (tabs) => {
    	// chrome.tabs.query invokes the callback with a list of tabs that match the
    	// query. When the popup is opened, there is certainly a window and at least
    	// one tab, so we can safely assume that |tabs| is a non-empty array.
    	// A window can only have one active tab at a time, so the array consists of
    	// exactly one tab.
    	var tab = tabs[0];

    	// A tab is a plain object that provides information about the tab.
    	// See https://developer.chrome.com/extensions/tabs#type-Tab
    	var url = tab.url;

    	// tab.url is only available if the "activeTab" permission is declared.
    	// If you want to see the URL of other tabs (e.g. after removing active:true
    	// from |queryInfo|), then the "tabs" permission is required to see their
    	// "url" properties.
    	console.assert(typeof url == 'string', 'tab.url should be a string');
	    callback(url);
  		});

  		// Most methods of the Chrome extension APIs are asynchronous. This means that
  		// you CANNOT do something like this:
  		//
  		// var url;
  		// chrome.tabs.query(queryInfo, (tabs) => {
  		//   url = tabs[0].url;
  		// });
  		// alert(url); // Shows "undefined", because chrome.tabs.query is async.
	}

	// WebVR 1.0
	function VRDisplayCapabilities () {

		this.canPresent = true;
		this.hasExternalDisplay = true;
		this.hasOrientation = true;
		this.hasPosition = true;
		this.maxLayers = 1
	}
	function VRStageParameters() {

		this.sittingToStandingTransform = new Float32Array( [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		] );

		this.sizeX = 5;
		this.sizeZ = 3;

	}

	function VRPose() {

		this.timestamp = startDate + ( performance.now() - startPerfNow );
		this.position = new Float32Array( [ 0, 0, 0 ] );
		this.linearVelocity = new Float32Array( [ 0, 0, 0 ] );
		this.linearAcceleration = null;
		this.orientation = new Float32Array( [ 0, 0, 0, 1 ] );
		this.angularVelocity = new Float32Array( [ 0, 0, 0 ] );
		this.angularAcceleration = null;

	}

	function VRFieldOfView() {

		this.upDegrees = 0;
		this.downDegrees = 0;
		this.leftDegrees = 0;
		this.rightDegrees = 0;

	}
	function VREyeParameters() {

		this.offset = new Float32Array( [ 0, 0, 0 ] );
		this.fieldOfView = new VRFieldOfView();
		this.renderWidth = 0;
		this.renderHeight = 0;

	}

	function VRLayer() {

		this.leftBounds = null;
		this.rightBounds = null;
		this.source = null;

	}
	function VRFrameData() {

		this.leftProjectionMatrix = new Float32Array( 16 );
		this.leftViewMatrix = new Float32Array( 16 );
		this.rightProjectionMatrix = new Float32Array( 16 );
		this.rightViewMatrix = new Float32Array( 16 );
		this.pose = null;

	}

	var frameDataFromPose = (function() {

		var piOver180 = Math.PI / 180.0;
		var rad45 = Math.PI * 0.25;

		// Borrowed from glMatrix.
		function mat4_perspectiveFromFieldOfView(out, fov, near, far) {

			var upTan = Math.tan(fov ? (fov.upDegrees * piOver180) : rad45),
			downTan = Math.tan(fov ? (fov.downDegrees * piOver180) : rad45),
			leftTan = Math.tan(fov ? (fov.leftDegrees * piOver180) : rad45),
			rightTan = Math.tan(fov ? (fov.rightDegrees * piOver180) : rad45),
			xScale = 2.0 / (leftTan + rightTan),
			yScale = 2.0 / (upTan + downTan);

			out[0] = xScale;
			out[1] = 0.0;
			out[2] = 0.0;
			out[3] = 0.0;
			out[4] = 0.0;
			out[5] = yScale;
			out[6] = 0.0;
			out[7] = 0.0;
			out[8] = -((leftTan - rightTan) * xScale * 0.5);
			out[9] = ((upTan - downTan) * yScale * 0.5);
			out[10] = far / (near - far);
			out[11] = -1.0;
			out[12] = 0.0;
			out[13] = 0.0;
			out[14] = (far * near) / (near - far);
			out[15] = 0.0;
			return out;

		}

		function mat4_fromRotationTranslation(out, q, v) {

			// Quaternion math
			var x = q[0], y = q[1], z = q[2], w = q[3],
			x2 = x + x,
			y2 = y + y,
			z2 = z + z,

			xx = x * x2,
			xy = x * y2,
			xz = x * z2,
			yy = y * y2,
			yz = y * z2,
			zz = z * z2,
			wx = w * x2,
			wy = w * y2,
			wz = w * z2;

			out[0] = 1 - (yy + zz);
			out[1] = xy + wz;
			out[2] = xz - wy;
			out[3] = 0;
			out[4] = xy - wz;
			out[5] = 1 - (xx + zz);
			out[6] = yz + wx;
			out[7] = 0;
			out[8] = xz + wy;
			out[9] = yz - wx;
			out[10] = 1 - (xx + yy);
			out[11] = 0;
			out[12] = v[0];
			out[13] = v[1];
			out[14] = v[2];
			out[15] = 1;

			return out;

		};

		function mat4_translate(out, a, v) {

			var x = v[0], y = v[1], z = v[2],
			a00, a01, a02, a03,
			a10, a11, a12, a13,
			a20, a21, a22, a23;

			if (a === out) {
				out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
				out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
				out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
				out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
			} else {
				a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
				a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
				a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

				out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
				out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
				out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

				out[12] = a00 * x + a10 * y + a20 * z + a[12];
				out[13] = a01 * x + a11 * y + a21 * z + a[13];
				out[14] = a02 * x + a12 * y + a22 * z + a[14];
				out[15] = a03 * x + a13 * y + a23 * z + a[15];
			}

			return out;

		};

		function mat4_invert(out, a) {

			var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
			a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
			a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
			a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

			b00 = a00 * a11 - a01 * a10,
			b01 = a00 * a12 - a02 * a10,
			b02 = a00 * a13 - a03 * a10,
			b03 = a01 * a12 - a02 * a11,
			b04 = a01 * a13 - a03 * a11,
			b05 = a02 * a13 - a03 * a12,
			b06 = a20 * a31 - a21 * a30,
			b07 = a20 * a32 - a22 * a30,
			b08 = a20 * a33 - a23 * a30,
			b09 = a21 * a32 - a22 * a31,
			b10 = a21 * a33 - a23 * a31,
			b11 = a22 * a33 - a23 * a32,

			// Calculate the determinant
			det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

			if (!det) {
				return null;
			}
			det = 1.0 / det;

			out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
			out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
			out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
			out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
			out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
			out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
			out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
			out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
			out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
			out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
			out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
			out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
			out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
			out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
			out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
			out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

			return out;

		};

		var defaultOrientation = new Float32Array([0, 0, 0, 1]);
		var defaultPosition = new Float32Array([0, 0, 0]);

		function updateEyeMatrices(projection, view, pose, parameters, vrDisplay) {

			mat4_perspectiveFromFieldOfView(projection, parameters ? parameters.fieldOfView : null, vrDisplay.depthNear, vrDisplay.depthFar);

			var orientation = pose.orientation || defaultOrientation;
			var position = pose.position || defaultPosition;

			mat4_fromRotationTranslation(view, orientation, position);
			if (parameters)
				mat4_translate(view, view, parameters.offset);
			mat4_invert(view, view);

		}

		return function(frameData, pose, vrDisplay) {

			if (!frameData || !pose)
				return false;

			frameData.pose = pose;
			frameData.timestamp = pose.timestamp;

			updateEyeMatrices(
				frameData.leftProjectionMatrix, frameData.leftViewMatrix,
				pose, vrDisplay.getEyeParameters("left"), vrDisplay);
			updateEyeMatrices(
				frameData.rightProjectionMatrix, frameData.rightViewMatrix,
				pose, vrDisplay.getEyeParameters("right"), vrDisplay);

			return true;

		};

	})();
	function createVRDisplayEvent( type, display, reason ) {
		// return
		var event = new CustomEvent( type );
		event.display = display;
		event.reason = reason;

		return event;
	}

	function VRDisplay( model ) {
		this.depthFar = 1000;
		this.depthNear = .1;
		this.displayId = 1;
		this.displayName = model.name;
		this.isConnected = true;
		this.isPresenting = false;

		this.layers = [];

		this.stageParameters = new VRStageParameters();

		this.capabilities = new VRDisplayCapabilities();
		this.capabilities.canPresent = model.features.canPresent;
		this.capabilities.hasExternalDisplay = model.features.hasExternalDisplay;
		this.capabilities.hasOrientation = model.features.hasOrientation;
		this.capabilities.hasPosition = model.features.hasPosition;

		this.pose = new VRPose();

		this.leftEyeParameters = new VREyeParameters();
		this.leftEyeParameters.fieldOfView.upDegrees = model.leftEye.up;
		this.leftEyeParameters.fieldOfView.downDegrees = model.leftEye.down;
		this.leftEyeParameters.fieldOfView.leftDegrees = model.leftEye.left;
		this.leftEyeParameters.fieldOfView.rightDegrees = model.leftEye.right;
		this.leftEyeParameters.renderWidth = model.resolution.width;
		this.leftEyeParameters.renderHeight = model.resolution.height;
		this.leftEyeParameters.offset[ 0 ] = model.leftEye.offset;

		this.rightEyeParameters = new VREyeParameters();
		this.rightEyeParameters.fieldOfView.upDegrees = model.rightEye.up;
		this.rightEyeParameters.fieldOfView.downDegrees = model.rightEye.down;
		this.rightEyeParameters.fieldOfView.leftDegrees = model.rightEye.left;
		this.rightEyeParameters.fieldOfView.rightDegrees = model.rightEye.right;
		this.rightEyeParameters.renderWidth = model.resolution.width;
		this.rightEyeParameters.renderHeight = model.resolution.height;
		this.rightEyeParameters.offset[ 0 ] = model.rightEye.offset;

		window.addEventListener( 'webvr-pose', function( e ) {

			this.pose.linearVelocity[ 0 ] = e.detail.position.x - this.pose.position[ 0 ];
			this.pose.linearVelocity[ 1 ] = e.detail.position.y - this.pose.position[ 1 ];
			this.pose.linearVelocity[ 2 ] = e.detail.position.z - this.pose.position[ 2 ];

			this.pose.position[ 0 ] = e.detail.position.x;
			this.pose.position[ 1 ] = e.detail.position.y;
			this.pose.position[ 2 ] = e.detail.position.z;

			this.pose.orientation[ 0 ] = e.detail.rotation.x;
			this.pose.orientation[ 1 ] = e.detail.rotation.y;
			this.pose.orientation[ 2 ] = e.detail.rotation.z;
			this.pose.orientation[ 3 ] = e.detail.rotation.w;

		}.bind( this ) );

		window.addEventListener( 'webvr-hmd-activate', function( e ) {

			if( e.detail.state ){
				var event = createVRDisplayEvent( 'vrdisplayactivate', this, 'HMD activated' );
				window.dispatchEvent(event);
			} else {
				var event = createVRDisplayEvent( 'vrdisplaydeactivate', this, 'HMD deactivated' );
				window.dispatchEvent(event);
			}

		}.bind( this ) );
	}

	VRDisplay.prototype.requestAnimationFrame = function( c ) {

		return requestAnimationFrame( c );
	}

	VRDisplay.prototype.cancelAnimationFrame = function(handle) {
		cancelAnimationFrame(handle);
	}

	VRDisplay.prototype.getEyeParameters = function( id ) {

		if( id === 'left' ) return this.leftEyeParameters;
		return this.rightEyeParameters;
	}

	VRDisplay.prototype.getPose = function() {

		this.pose.timestamp = startDate + ( performance.now() - startPerfNow );

		return this.pose;
	}

	VRDisplay.prototype.getFrameData = function( frameData ){

		return frameDataFromPose( frameData, this.getPose(), this );
	}

	function sendEventToBackground (mouse_target)
	{
		var event = new CustomEvent('webvr-trigger', { 'detail': {
															target_className: mouse_target.className,
															target_id: mouse_target.id,
															target_nodeName: mouse_target.nodeName,
															target_tagName: mouse_target.tagName,
															target_baseURI: mouse_target.baseURI
															} });
		window.dispatchEvent( event );
	}

	VRDisplay.prototype.requestPresent = function(layers) {
		// Leo++
		console.log("polyfill requestPresent");
		console.log(layers[0].source.baseURI);
		console.log(layers[0].baseURI);
		mouse_target.baseURI = layers[0].source.baseURI
		
		isRequestPresent = true;
		// var event = new Event( 'webvr-trigger' );
		
		// Leo --
		return
	}

	VRDisplay.prototype.exitPresent = function() {
		// return
		console.log("exitPresent 001")
		return new Promise( function( resolve, reject ) {

			this.isPresenting = false;

			this.layers = [];

			var event = createVRDisplayEvent( 'vrdisplaypresentchange', this, 'Presenting exited' );
			window.dispatchEvent(event);
			console.log("exitPresent 002")
			resolve();

		}.bind( this ) );
	}

	VRDisplay.prototype.submitFrame = function( pose ) {
	}

	VRDisplay.prototype.resetPose = function() {
		var event = new Event( 'webvr-resetpose' );
		window.dispatchEvent( event );
	}

	VRDisplay.prototype.getLayers = function() {

		return this.layers;
	}

	function assignToWindow() {

		window.VRDisplay = VRDisplay;
		window.VRFrameData = VRFrameData;
		window.VRPose = VRPose;

	}

	assignToWindow();

	( function() {

		var vrD = new VRDisplay( ViveData )

		navigator.getVRDisplays = function() {

			return new Promise( function( resolve, reject ) {

				resolve( [ vrD ] );

			} );

		}

	} )();

	// LEGACY

	function HMDVRDevice( model ) {

		this.deviceName = model.name;

		this.leftEyeParameters = new VREyeParameters();
		this.leftEyeParameters.fieldOfView.upDegrees = model.leftEye.up;
		this.leftEyeParameters.fieldOfView.downDegrees = model.leftEye.down;
		this.leftEyeParameters.fieldOfView.leftDegrees = model.leftEye.left;
		this.leftEyeParameters.fieldOfView.rightDegrees = model.leftEye.right;
		this.leftEyeParameters.renderWidth = model.resolution.width;
		this.leftEyeParameters.renderHeight = model.resolution.height;
		this.leftEyeParameters.offset[ 0 ] = model.leftEye.offset;

		this.rightEyeParameters = new VREyeParameters();
		this.rightEyeParameters.fieldOfView.upDegrees = model.rightEye.up;
		this.rightEyeParameters.fieldOfView.downDegrees = model.rightEye.down;
		this.rightEyeParameters.fieldOfView.leftDegrees = model.rightEye.left;
		this.rightEyeParameters.fieldOfView.rightDegrees = model.rightEye.right;
		this.rightEyeParameters.renderWidth = model.resolution.width;
		this.rightEyeParameters.renderHeight = model.resolution.height;
		this.rightEyeParameters.offset[ 0 ] = model.rightEye.offset;

		this.leftRecommendedFOV = new VREyeParameters();
		this.leftRecommendedFOV.fieldOfView.upDegrees = model.leftEye.up;
		this.leftRecommendedFOV.fieldOfView.downDegrees = model.leftEye.down;
		this.leftRecommendedFOV.fieldOfView.leftDegrees = model.leftEye.left;
		this.leftRecommendedFOV.fieldOfView.rightDegrees = model.leftEye.right;
		this.leftRecommendedFOV.renderWidth = model.resolution.width;
		this.leftRecommendedFOV.renderHeight = model.resolution.height;
		this.leftRecommendedFOV.offset[ 0 ] = model.leftEye.offset;

		this.rightRecommendedFOV = new VREyeParameters();
		this.rightRecommendedFOV.fieldOfView.upDegrees = model.rightEye.up;
		this.rightRecommendedFOV.fieldOfView.downDegrees = model.rightEye.down;
		this.rightRecommendedFOV.fieldOfView.leftDegrees = model.rightEye.left;
		this.rightRecommendedFOV.fieldOfView.rightDegrees = model.rightEye.right;
		this.rightRecommendedFOV.renderWidth = model.resolution.width;
		this.rightRecommendedFOV.renderHeight = model.resolution.height;
		this.rightRecommendedFOV.offset[ 0 ] = model.rightEye.offset;

	}

	HMDVRDevice.prototype.getEyeTranslation = function( eye ) {

		return 3;

	}

	HMDVRDevice.prototype.getRecommendedEyeFieldOfView = function( eye ) {

		if( eye === 'left' ) return this.leftRecommendedFOV;
		return this.rightRecommendedFOV;

	}

	function VRFieldOfView() {

		this.upDegrees = 0;
		this.downDegrees = 0;
		this.leftDegrees = 0;
		this.rightDegrees = 0;

	}

	function VREyeParameters() {

		this.eyeTranslation = 0;
		this.recommendedFieldOfView = new VRFieldOfView();
		this.offset = new Float32Array( [ 0, 0, 0 ] );
		this.fieldOfView = new VRFieldOfView();
		this.renderWidth = 0;
		this.renderHeight = 0;

	}

	HMDVRDevice.prototype.getEyeParameters = function( eye ) {

		if( eye === 'left' ) return this.leftEyeParameters;
		return this.rightEyeParameters;

	}


	function PositionSensorVRDevice( model ) {

		this.deviceName = model.name;

		this.state = new VRPositionState( model );

		window.addEventListener( 'webvr-pose', function( e ) {

			this.state.linearVelocity.x = e.detail.position.x - this.state.position.x;
			this.state.linearVelocity.y = e.detail.position.y - this.state.position.y;
			this.state.linearVelocity.z = e.detail.position.z - this.state.position.z;

			this.state.position.x = e.detail.position.x;
			this.state.position.y = e.detail.position.y;
			this.state.position.z = e.detail.position.z;

			this.state.orientation.x = e.detail.rotation.x;
			this.state.orientation.y = e.detail.rotation.y;
			this.state.orientation.z = e.detail.rotation.z;
			this.state.orientation.w = e.detail.rotation.w;

		}.bind( this ) );

	}

	function VRPositionState( model ) {

		this.angularAcceleration = new DOMPoint();
		this.angularVelocity = new DOMPoint();
		this.linearAcceleration = new DOMPoint();
		this.linearVelocity = new DOMPoint();
		this.orientation = new DOMPoint();
		this.position = new DOMPoint();
		this.timestamp = null;

		this.hasPosition = model.features.hasPosition;
		this.hasOrientation = model.features.hasOrientation;

	}

	function DOMPoint() {
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.w = 0;
	}

	PositionSensorVRDevice.prototype.getState = function() {

		this.state.timestamp = startDate + ( performance.now() - startPerfNow );

		return this.state;

	}

	window.HMDVRDevice = HMDVRDevice;
	window.PositionSensorVRDevice = PositionSensorVRDevice;

	( function() {

		var vrD = new HMDVRDevice( ViveData );
		var vrP = new PositionSensorVRDevice( ViveData );

		navigator.getVRDevices = function() {

			return new Promise( function( resolve, reject ) {

				resolve( [ vrD, vrP ] );

			} );

		}

	} )();

	var event = new Event( 'webvr-ready' );
	window.dispatchEvent( event );


//////// ==========Website sample==============
var mouse_monitor = true
var polyfill_addEventListener = false

var mouse_target = {
	className: null,
	tagName: null,
	nodeName: null,
	id: null,
	baseURI: null
}

if(mouse_monitor)
{
	document.onclick = function(e)
	{
		// e.target, e.srcElement and e.toElement contains the element clicked.
    	// alert("User clicked a " + e.target.nodeName + " element.");
    	console.log("Mouse target.nodeName: " + e.target.nodeName);
    	console.log("Mouse target.id: " + e.target.id);
    	console.log("Mouse target.className: " + e.target.className);
    	console.log("Mouse target.tagName: " + e.target.tagName);
    	mouse_target.nodeName = e.target.nodeName;
    	mouse_target.id = e.target.id;    
    	mouse_target.className = e.target.className;    
    	mouse_target.tagName = e.target.tagName;
    	
    	if(isRequestPresent)
    	// if(true)
    	{
    		isRequestPresent = false
    		sendEventToBackground(mouse_target);
    	}
	};
}


if(polyfill_addEventListener)
{
	// !window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
	(function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry)
	{
		var super_addEventListener = WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener];
		WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener)
		{
			var target = this;
			// console.log("=========================");
			// console.log("target id: " + target.id);
			// console.log("target className: " + target.className);
			// console.log("target tagName: " + target.tagName);
			
			// console.log("type: " + type);
			// console.log("listener: " + listener);
			// registry.unshift([target, type, listener, function (event) {
			// 	event.currentTarget = target;
			// 	event.preventDefault = function () { event.returnValue = false };
			// 	event.stopPropagation = function () { event.cancelBubble = true };
			// 	event.target = event.srcElement || target;

			// 	listener.call(target, event);
			// }]);

			// Recursive Problem
			// this.attachEvent("on" + type, registry[0][3]);
			// super_addEventListener("on" + type, registry[0][3], false);  
			// super.addEventListener();
			super_addEventListener(type, listener, false);


		};
		
		
		// WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener)
		// {
		// 	for (var index = 0, register; register = registry[index]; ++index)
		// 	{
		// 		if (register[0] == this && register[1] == type && register[2] == listener) 
		// 		{
		// 			// return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
		// 			return this.removeEventListener("on" + type, registry.splice(index, 1)[0][3], false);
		// 		}
		// 	}
		// };

		// WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject)
		// {
		// 	return this.fireEvent("on" + eventObject.type, eventObject);
		// };
	
	})
	(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);
}
//////// ==========Website sample==============
}



