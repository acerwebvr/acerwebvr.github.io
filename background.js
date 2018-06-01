var port = null; //
var extensionId = chrome.runtime.id;
console.log( 'Background', extensionId );

var msg_target = {
  id: null,
  className: null,
  tagName: null,
  nodeName: null,
  baseURI: null
}
chrome.runtime.onConnect.addListener(function(extension_port){
  console.log("chrome.runtime.onConnect")
  function listener( msg, sender, reply ) {

		console.log("onMessage listener")
		console.log(msg.action)

		if( name === 'contentScript' ) {
			if( msg.action === 'page-ready' ) {
				console.log("page-ready")
			}
		}

		if( msg.action === 'reset-pose' ) {
			console.log("reset-pose")
		}
		
		if( msg.action === 'page-trigger' ) {
			console.log("page-trigger")
      console.log("msg detail" + msg.detail)
      msg_target.className = msg.detail.target_className
      msg_target.id = msg.detail.target_id
      msg_target.nodeName = msg.detail.target_nodeName
      msg_target.tagName = msg.detail.target_tagName
      msg_target.baseURI = msg.detail.target_baseURI
      
			connect()
  		sendNativeMessage()
		}
	}

	extension_port.onMessage.addListener( listener );  
});



// ============================
	function sendNativeMessage() {
		console.log("sendNativeMessage")
  	getCurrentTabUrl((url) => {
		message = url; //{"text": document.getElementById('input-text').value};
		console.log(url)
    if(msg_target.baseURI == "" || msg_target.baseURI==null)
      msg_target.baseURI = url;
    
		port.postMessage(message                    
                    +","+ "msg_target.id:" + msg_target.id
                    +","+ "msg_target.className:" + msg_target.className
                    +","+ "msg_target.tagName:" + msg_target.tagName
                    +","+ "msg_target.nodeName:" + msg_target.nodeName
                    +","+ "msg_target.baseURI:" + msg_target.baseURI
                    +"#"+ "END");
                   
		// appendMessage("Sent message: <b>" + JSON.stringify(message) + "</b>");
  		})  
    console.log(document.getElementById('exampleIframe').src)
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
  function onNativeMessage(message) {
    chrome.tabs.reload();
  }
  function onDisconnected() {    
    port = null;
  }

	function connect() {
  		var hostName = "com.google.chrome.example.echo";
  		console.log("connect hostName: com.google.chrome.example.echo")
  		console.log(hostName)
  		
  		port = chrome.runtime.connectNative(hostName);
      port.onMessage.addListener(onNativeMessage);
      port.onDisconnect.addListener(onDisconnected);
	}