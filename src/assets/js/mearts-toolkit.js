(function ($) {
 "use strict";
 
 
 	/*
	COUNTERUP ACTIVE
	================================ */
	var countUp = $('.counter');
		countUp.counterUp({
			delay: 50,
			time: 3000
		});
		
	     /*
     ISOTOPE MENU
     ================================ */
     var folioMenuLi = $('.portfolio-menu li');
		 if (folioMenuLi.length) {
			 folioMenuLi.on('click', function() {
				 var folioGrid = $('.portfolio-grid');
				 folioMenuLi.removeClass("active");
				 $(this).addClass("active");
				 var selector = $(this).attr('data-filter');
				 folioGrid.isotope({
					 filter: selector,
					 animationOptions: {
						 duration: 750,
						 easing: 'linear',
						 queue: false
					 }
				 });
			 });
		 }
	 
	/*
	VENOBOX ACTIVE
	================================ */
	var venBOx = $('.venobox');
		venBOx.venobox();
		
		
 	/*
	isotope grid with window load function
	================================ */
	jQuery(window).on('load', function(){
		
        // Preloader
        var preeLoad = $('#loading-wrap');
			preeLoad.fadeOut(1000);

        // FITROWS GRID
        var fitRowGrid = $('.fitRows-grid');
			if (fitRowGrid.length) {
				fitRowGrid.isotope({
					itemSelector: '.grid-item',
					// layout mode options
					layoutMode: 'fitRows'
				});
			}
        // MASONRY GRID
        var masonryGrid = $('.masonry-grid');
			if (masonryGrid.length) {
				masonryGrid.isotope({
					itemSelector: '.grid-item',
					// layout mode options
					layoutMode: 'masonry',
					masonryHorizontal: {
						rowHeight: 100
					}
				});
			}
		
	});
 
})(jQuery);