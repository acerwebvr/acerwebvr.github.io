!function ($) {

	"use strict";

	var ONYX_VERSION = '1.0',

	// Global Onyx object
	Onyx = Onyx || {},

	// Gobal variables
	mobileTest,
	isotopeContainer = $('#container').isotope({});


	Onyx = {

		version: ONYX_VERSION,

		// Define defaults values
		defaults: {
			debug: false,
		},


		/**
		 * Fire all functions
		 */
		init: function() {
			var self = this,
				obj;

			for (obj in self) {
				if ( self.hasOwnProperty(obj)) {
					var _method =  self[obj];
					if ( _method.selector !== undefined && _method.init !== undefined ) {
						if ( $(_method.selector).length > 0 ) {
							_method.init();
						}
					}
				}
			}
		},


		/**
		* Function to print results in the console if the above debug is true
		*/
		log: function() {
			if (Onyx.defaults.debug === true) {
				var argsArray = [],
				printOut = "console.log(args)";

				for ( var i = 0; i < arguments.length; i++ ) {
				argsArray.push("args[" + i + "]");
				}

				printOut = new Function( "args", printOut.replace( /args/, argsArray.join(",") ) );

				printOut(arguments);
			}
		},


		/**
		 * Isotope init with pagination
		 */
		isotopeGalleryPagination: {
			selector: '.gallery-items.onyx-pagination',
			init: function(){
				var base = this,
					container = $(base.selector);

				// Start the loading function and set images' height and width
				base.imagesToLoad();

			},
			imagesToLoad: function(){
				var container = $(Onyx.isotopeGalleryPagination.selector),
					imagesToLoad = container.find("img"),
					imagesLength = imagesToLoad.length,
					count = 1;

				imagesToLoad.each(function () {

					var url = $(this).attr("data-original"), // Get image URL
						$this = $(this), // Refer to this
						img = new Image(), // Create a new image in memory
						imgWidth,
						imgHeight;

					// Start doing stuff when image is loaded
					img.onload = function(){
						imgWidth = this.width; // Assign image width
						imgHeight = this.height; // Assign image height

						// Start the resizing procedures
						var maxWidth = $this.parent().outerWidth(), // Max width for the image, and its responsive by the parent width... :D
							ratio = 0;  // Specify aspect ratio


						// Check if the current width is larger than the max
						if(imgWidth >= maxWidth){
							ratio = maxWidth / imgWidth; // get ratio value to scale image
							$this.attr("width", maxWidth); // Set new width
							$this.attr("height", imgHeight * ratio); // Scale height based on ratio
							imgHeight = imgHeight * ratio; // Reset height to match scaled image
							imgWidth = imgWidth * ratio; // Reset width to match scaled image
						}


						Onyx.log("Image width => " + this.width + ", Image height => " + this.height);

						/*
						 * Start Isotope magic after setting width and height for images
						 */
						var itemsInPage = (container.attr('items-count'))?parseInt(container.attr('items-count'), 10):15;
						if( count == imagesLength ) {
							Onyx.log("Items in page => " + itemsInPage);
							Onyx.isotopeGalleryPagination.initIsotope();
						}

						// Counter to fire Isotope after all images has been loaded
						count++;

					}, img.onerror = function(){

						// If an image is missing this will increase the counter to fire Isotope functions
						count++;

						// Obada - Debugging
						Onyx.log("This image has some error, and it may cause to pause the whole images loading => " + img.src);
					}

					img.src = url;

				});

			},

			// Isotope init
			initIsotope: function() {
				var container = $(Onyx.isotopeGalleryPagination.selector),
					filterSelector = 0,
					imagesToLoad = container.find("img"),
					itemSelector = '[class^="col-"]';

				// Obada - Debugging
				Onyx.log("initIsotope() fired");


				/*
				 * Responsiveness settings
				 */
				var responsiveIsotope = [
					[480, (container.attr('items-count-resp'))?parseInt(container.attr('items-count-resp'), 10):10], // Get items to show value from the HTML, to be more dynamic... :D
					[720, (container.attr('items-count-resp'))?parseInt(container.attr('items-count-resp'), 10):10]
				];


				/*
				 * Variables
				 */
				var itemsPerPageDefault = (container.attr('items-count'))?parseInt(container.attr('items-count'), 10):15, // Get items to show value from the HTML, to be more dynamic... :D
					itemsPerPage = Onyx.isotopeGalleryPagination.defineItemsPerPage(itemsPerPageDefault, responsiveIsotope),
					currentNumberPages = 1,
					currentPage = 1,
					currentFilter = '*',
					filterAtribute = 'data-filter',
					pageAtribute = 'data-page',
					pagerClass = 'pagination';


				/*
				 * Begin pagination steps
				 */
				Onyx.isotopeGalleryPagination.setPagination(itemSelector, itemsPerPage, currentNumberPages, currentFilter, filterAtribute, pageAtribute, pagerClass, currentPage);

				Onyx.isotopeGalleryPagination.goToPage(1, itemSelector, currentPage, currentFilter, filterAtribute, pageAtribute);


				/*
				 * Isotope filters
				 */
				if ( $(".filter-button-group").length ) {
					if ( $(".filters-container > ul").length ) {

						$(".filters-container > ul > li > a").on("click", function() {
							$(".filters-container > ul > li > a").parent("li").removeClass("active");
							$(this).parent("li").addClass("active");
							filterSelector = $(this).attr("data-filter");
						});

					} else if ( $(".filters-container > select").length ) {

						$(".filters-container > select").on("change", function() {
							var filter = this.options[this.selectedIndex].getAttribute("data-filter");
							currentFilter = filter;

							Onyx.log("data-filter => " + this.options[this.selectedIndex].getAttribute("data-filter"));

							Onyx.isotopeGalleryPagination.setPagination(itemSelector, itemsPerPage, currentNumberPages, currentFilter, filterAtribute, pageAtribute, pagerClass);
							Onyx.isotopeGalleryPagination.goToPage(1, itemSelector, currentPage, currentFilter, filterAtribute, pageAtribute);
						});
					}
				}


				/*
				 * Re-init on resize
				 */
				$(window).resize(function(){
					itemsPerPage = Onyx.isotopeGalleryPagination.defineItemsPerPage(itemsPerPageDefault, responsiveIsotope);
					Onyx.isotopeGalleryPagination.setPagination(itemSelector, itemsPerPage, currentNumberPages, currentFilter, filterAtribute, pageAtribute, pagerClass);
					Onyx.isotopeGalleryPagination.goToPage(1, itemSelector, currentPage, currentFilter, filterAtribute, pageAtribute);
				});


				/*
				 * Start LazyLoad
				 */
				isotopeContainer.isotope('on', 'layoutComplete', function () {
					Onyx.isotopeGalleryPagination.loadVisible(imagesToLoad, 'lazylazy');
				});

				$(window).on('scroll', function () {
					Onyx.isotopeGalleryPagination.loadVisible(imagesToLoad, 'lazylazy');
				});

				imagesToLoad.lazyload({
					effect: "fadeIn",
					failure_limit: Math.max(imagesToLoad.length - 1, 0),
					event: 'lazylazy'
				});

			},


			/*
			 * Chage filters function
			 */
			changeFilter: function(selector) {

				Onyx.log(selector);
				isotopeContainer.isotope({
					filter: selector
				});
			},


			/*
			 * Chage page function
			 */
			goToPage: function(n, itemSelector = 0, currentPage = 0, currentFilter = 0, filterAtribute = 0, pageAtribute = 0) {
				currentPage = n;

				var selector = itemSelector;
				selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
				selector += '['+pageAtribute+'="'+currentPage+'"]';

				// Add active class to first btn
				if( n == 1) {
					$('a['+pageAtribute+'="'+currentPage+'"]').addClass("active");
				}

				Onyx.isotopeGalleryPagination.changeFilter(selector);
			},


			/*
			 * Define items per page for responsive settings
			 */
			defineItemsPerPage: function(itemsPerPageDefault, responsiveIsotope) {
				var pages = itemsPerPageDefault;

				for( var i = 0; i < responsiveIsotope.length; i++ ) {
					if( $(window).width() <= responsiveIsotope[i][0] ) {
						pages = responsiveIsotope[i][1];
						break;
					}
				}

				return pages;
			},


			/*
			 * Begin pagination steps
			 */
			setPagination: function(itemSelector = 0, itemsPerPage = 0, currentNumberPages = 0, currentFilter = 0, filterAtribute = 0, pageAtribute = 0, pagerClass = 0, currentPage = 0) {

				var SettingsPagesOnItems = function(){

					var itemsLength = isotopeContainer.children(itemSelector).length,
						pages = Math.ceil(itemsLength / itemsPerPage),
						item = 1,
						page = 1,
						selector = itemSelector;

					selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';

					isotopeContainer.children(selector).each(function(){
						if( item > itemsPerPage ) {
							page++;
							item = 1;
						}
						$(this).attr(pageAtribute, page);
						item++;
					});

					currentNumberPages = page;

				}();

				var CreatePagers = function() {

					var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);

					$isotopePager.html('');

					for( var i = 0; i < currentNumberPages; i++ ) {
						var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
						$pager.html(i+1);

						$pager.click(function(){
							var page = $(this).eq(0).attr(pageAtribute);
						
							// Remove active class from old active item
							if ( $(".pager.active").length ) {
								$(".pager.active").removeClass("active");
							}

							// Add active class to clicked item
							$(this).addClass("active");

							Onyx.isotopeGalleryPagination.goToPage(page, itemSelector, currentPage, currentFilter, filterAtribute, pageAtribute);
						});

						$pager.appendTo($isotopePager);
					}

					isotopeContainer.after($isotopePager);

				}();

			},


			loadVisible: function($els, trigger) {
				$els.filter(function () {
					var rect = this.getBoundingClientRect();
					return rect.top >= 0 && rect.top <= window.innerHeight;
				}).trigger(trigger);
			}
		},


        /**
         * Masonry gallery
         */
        masonryGallery: {
            selector: '.gallery-items:not(.onyx-pagination)',
            init: function(){
                var base = this,
                    container = $(base.selector);

                // Isotope init
                var isotopeGallery = container.imagesLoaded( function() {
                    container.isotope({
                        itemSelector: '[class^="col-"]',
                        masonry: {
                            //horizontalOrder: true
                        }
                    });
                });

                if ( $(".gallery-items-filters").length ) {

                    $(".gallery-items-filters > select").on("change", function() {

                        var selected = [];
                        $('.gallery-items-filters > select option').filter(':selected').each(function () {
                            if (this.value != "*") {
                                selected.push(this.value);
                            }
                        });
                        if (selected.length == 0) {
                            selected.push("*");
                        }
                        selected = $(selected.join(''));
                        container.isotope({
                            itemSelector: '.gallery-items > [class^="col-"]',
                            layoutMode: "masonry",
                            filter: selected
                        });

                        // Show message if there were no results
                        container.on( 'layoutComplete', function( event, laidOutItems ) {
                            if ( laidOutItems.length == 0 ) {
                                $(".no-results").slideDown("slow");
                            } else if ( $(".no-results").length ) {
                                $(".no-results").slideUp("fast");
                            }
                        });

                        return false;
                    });
                }

            }
        },


		/**
		 * Venobox init
		 */
		venoBoxInit: {
			selector: '.venobox',
			init: function(){
				var base = this,
					container = $(base.selector);

				// Venobox Activation
				container.venobox({
					numeratio: true,			// default: false
					infinigall: true			// default: false
				});

			}
		},
	}
	
	$(document).ready(function() {
		Onyx.init();
	});

}(jQuery);