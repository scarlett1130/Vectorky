 /*
 _____      						 _______ 	     
|  __ \  							|_ _ _ _| _  	 	    
| |__) | 					     _	   | |	 | |	        
|  ___/    ___    __ _    __ _  | |    | |	 | |__     ___ 	 _ __  _ __    ___ 
| |\ \    / _ \  / _` |  / _` | | |    | |	 | '_ \   / _ \ | '_ \| '_ \  / _ \
| | \ \  |  __/ | (_| | | (_| | | |    | |	 | | | | |  __/ | |  ||  | | |  __/
|_|  \ \  \___|  \__, |  \__,_| |_|    |_|   |_| |_|  \___| |_|  ||  |_|  \___|
                  __/ |              
                 |___/  		     
================================================================================ */
(function ($) {
    
   	// $(".mob_view .aslide1").css('height',  "200px");
   	    //	 $(".mob_view .aslide2").css('height',  "400px");
   	    	    //	 $(".mob_view .aslide3").css('height',  "500px");
if (
	navigator.userAgent.match(/Tablet/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/Kindle/i) ||
    navigator.userAgent.match(/Playbook/i) ||
    navigator.userAgent.match(/Nexus/i) ||
    navigator.userAgent.match(/Xoom/i) ||
    navigator.userAgent.match(/SM-N900T/i) || //Samsung Note 3
    navigator.userAgent.match(/GT-N7100/i) || //Samsung Note 2
    navigator.userAgent.match(/SAMSUNG-SGH-I717/i) || //Samsung Note
    navigator.userAgent.match(/SM-T330NU/i) //Samsung Tab 4

){ var tablet_device = true; var touch_device = true; }
 if(tablet_device){	
    // $(".ableft_img img").css({ "max-width": "120%", "max-height": "80%" });
     //$(".container").css({ "width": "925px" });
      //$(".work_box").css({ "max-width": "900px" });
     
                //$("#popask").css({ "margin-top": "60px" });

    

 }
 "use strict";
	jQuery('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" type="text/css" />');
$( "li.menu-item" ).hover(function() {  // mouse enter
    $( this ).find( " > .sub-menu" ).show(); // display immediate child

}, function(){ // mouse leave
    if ( !$(this).hasClass("current_page_item") ) {  // check if current page
        $( this ).find( ".sub-menu" ).hide(); // hide if not current page
    }
});
$(window).scroll(function() {
    

var textv= $("#serviceone").height();
var txth = $("h2.title1").height();
var ph= (textv-txth)/2;

$(".service-box-left .xg-content").css("padding-top", ph);
  if ($("#pagecontent h2").offset() != undefined)
		    {
		 var hval = $("#pagecontent h2").offset().top;
		 var tt1=hval/3+20;
		 	 var stt11= $(".innerpage_banner").height()/2+$("h1.mearts-author").height()-20;
	 
		 	
	
		  if(tablet_device){	
		      var stt11=stt11+5;
		      	 $(".linetop").css('height', stt11 + "px");
		  }else
		  {
		      	 $(".linetop").css('height', stt11 + "px");
		  }

}
	 	 var sh1= $(".slider-area").height()/2+$("h1.mearts-author").height()/2;
		  var slider_height= $(".team_right").height();
if(slider_height<600)
{
		  	 	 $(".about-testimonial .team_right_img img").css('height', slider_height + "px");
}

	var ah=$("#pagebanner").height()/2+$("h1.mearts-author").height()/2;
	 if($("#map_part").offset() !== undefined)
		    {
		        
		 var devh = $("#map_part").offset().top;
		  var h12 = $(".mearts-author").offset().top+$("h1.mearts-author").height();
		  var diffh=(devh-h12)-100;
		  if(!tablet_device){	
	
	 $(".contactline").css('height', diffh + "px");
		  }
		  
		  
}
		 	 		
		 	      	 $(".lineservice").css('height', sh1 + "px");
		 	      $(".lineabout").css('height', ah + "px");
		 	      
		 	      

const circleBackground = document.querySelector('.inner-circle');
const windowY = window.scrollY;
const speed = 0.5
$('.inner-circle').css('transform', 'rotate(' +( windowY * speed )+ 'deg)');
}) 
	// addClass on Body
	var darkVersion = $('.dark-version');
		darkVersion.parent('body').addClass('black-bg');

	/*
	dark version class add remove
	================================== */
		var meartsColor = $(".mearts-dark-version .about-area, .mearts-dark-version .skill-area, .mearts-dark-version .portfolio-area, .mearts-dark-version .testimonial-area, .mearts-dark-version .blog-area");
		meartsColor.removeClass("white-bg");
		meartsColor.addClass("dark-version black-bg");

		var meartsColorTwo = $(".mearts-dark-version .services-area, .mearts-dark-version .exprience-area, .mearts-dark-version .exapnd-sidebar");
		meartsColorTwo.removeClass("light-bg");
		meartsColorTwo.addClass("dark-version dark-bg");

		var meartsDarkBlog = $(".mearts-dark-blog .site-content");
		    meartsDarkBlog.addClass("dark-version dark-bg");

		 


		// add active class in front menu
		var meartsFrontActive = $(".mearts-front #primary-menu li:first-child");
		meartsFrontActive.addClass("active");
	/*
	ONE PAGE CLICK REMOVE IN CLASS
	================================== */
	var menuLiA = $('.onepage-menu li a');
		menuLiA.on('click', function(e) {
			var navColl = $('.navbar-collapse ul');
			if ( $(e.target).is('a') ) {
				navColl.parent().removeClass('in');
				navHeaderButton.removeClass('replace');
			}
		});
	// Menu Button Text Change
	var navHeaderButton = $('.navbar-header button');
		navHeaderButton.on('click', function(e) {
			navHeaderButton.toggleClass('replace');
		});
	
	/*
	STICKY
	================================== */
	var activeSticky = $('#active-sticky'),
		windowScroll = $(window);
		windowScroll.on('scroll',function() {
			var scroll = $(window).scrollTop();
			var isSticky = activeSticky;
			if (scroll < 80) {
				isSticky.removeClass("is-sticky");
			}
			else{
				isSticky.addClass("is-sticky");
			}
		});
	/*
	RT ANIMATION
	================================== */
	var rtAnimateNot = $('.rt-animate:not(.rt-animate-show)');
		rtAnimateNot.each(function() {
			var $rtElement = $(this);
			$rtElement.waypoint(function() {
				$rtElement.addClass('rt-animate-show');
			},
			{
				offset: $rtElement.data('rt-offset')
			});
		});
	
	/*
	EXPEND MENU 
	================================== */
	var exapndIcon = $('.expand-icon'),
		expandSidebar = $('.exapnd-sidebar');
		exapndIcon.on("click", function(e) {
			expandSidebar.toggleClass("slide_right");
			exapndIcon.toggleClass("close_icon");
			e.stopPropagation()
		});
	$(document).on('click', function(e) {
		var $selectOtherSide = $('.exapnd-sidebar,.expand-icon');
		if (!$selectOtherSide.is(e.target) && $selectOtherSide.has(e.target).length === 0) {
			expandSidebar.removeClass("slide_right");
			exapndIcon.removeClass("close_icon");
		}
	});
	
	/*
	ONE PAGE MENU
	================================== */
	var mainMenu = $('.onepage-menu nav'); 
		var headerTopOffset = $('header').height(); 
			mainMenu.onePageNav({
			currentClass: 'active',
			scrollThreshold: 0.2,
			scrollSpeed: 1000,
			scrollOffset: headerTopOffset - 20,
		});
	
	/*
	SMOOTH SCROLL
	================================ */
	var smScroll = $('.smooth-scroll a');
		if (smScroll.length > 0) {
			smScroll.on('click', function() {
				$.smoothScroll({
				  offset: -60,
				  scrollTarget: this.hash,
				  speed: 1000,
				});
				return false;
			});
		}


	
	/*
	PROGRESS WITH WAYPOINT ACTIVE
	================================== */
	var inWaypoint = $('.skill-progress');
		if (inWaypoint.length > 0) {
			inWaypoint.waypoint(function () {
				// element 
				jQuery('.skill-bar').each(function() {
					jQuery(this).find('.progress-content').animate({
						width:jQuery(this).attr('data-percentage')
					},2000);
					
					jQuery(this).find('.progress-mark').animate(
					{left:jQuery(this).attr('data-percentage')},
				{
					duration: 2150,
					step: function(now, fx) {
						var data = Math.round(now);
						jQuery(this).find('.percent').html(data + '%');
					}
				});  
				
				});
			}, {offset: '90%'});
		}
	/*
    SLICK CAROUSEL AS NAV
    ===================================*/
    var oneItem = $('#one-item'),
		bgSlider = $('#bg-slider');
		if (oneItem.length) {
			oneItem.slick({
				dots: true,
				arrows: false,
			});
		}
		if (bgSlider.length) {
			bgSlider.slick({
				dots: false,
				arrows: false,
				fade: true,
				autoplay: true,
				speed: 2500,
				autoplaySpeed: 5000
			});
		}
	
	
	
	
	 /*----------------------------------------------------*/
     /*	Our Clients Carousel
     /*----------------------------------------------------*/

    $("#our-customers").owlCarousel({

             slideSpeed: 1200,
             items: 1,
             itemsDesktop: [1199, 1],
             itemsDesktopSmall: [960, 1],
             itemsTablet: [768, 1],
             itemsMobile: [480, 1],
             navigation: true,
             pagination: true,
             loop: true,
             nav: true,
             dots: true,
             dotsData: true,
             autoplay: true,
             navigationText: true

         });
	
	 /*----------------------------------------------------*/
     /*	Our Team Carousel
     /*----------------------------------------------------*/

    $("#our-team").owlCarousel({

             slideSpeed: 600,
             items: 1,
             itemsDesktop: [1199, 1],
             itemsDesktopSmall: [960, 1],
             itemsTablet: [768, 1],
             itemsMobile: [480, 1],
             navigation: true,
             pagination: true,
             loop: true,
             nav: true,
             dots: true,
             dotsData: true,
             autoplay: true,
             navigationText: true

         });
	
	
	
	
	
 /*----------------------------------------------------*/
     /*	Our Team Carousel
     /*----------------------------------------------------*/

    $("#mob-our-team-mobile").owlCarousel({

             slideSpeed: 600,
             items: 1,
             itemsDesktop: [1199, 1],
             itemsDesktopSmall: [960, 1],
             itemsTablet: [768, 1],
             itemsMobile: [480, 1],
             navigation: true,
             pagination: true,
             loop: true,
             autoHeight:true,
             nav: true,
             dots: true,
             dotsData: true,
             autoplay: true,
             navigationText: true

         });	
	
	
	
	
	
	
	
	
	
	
	
	
    /*----------------------------------------------------*/
     /*	Service Carousel
     /*----------------------------------------------------*/

    $("#service-holder").owlCarousel({

             slideSpeed: 600,
             items: 1,
             itemsDesktop: [1199, 1],
             itemsDesktopSmall: [960, 1],
             itemsTablet: [768, 1],
             itemsMobile: [480, 1],
             navigation: true,
             pagination: true,
             loop: true,
             nav: true,
             dots: true,
             dotsData: true,
             autoplay: true,
             navigationText: true

         });

	/*
	SCROLLUP
	=================== */
	// $.scrollUp({
	// 	scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
	// 	easingType: 'linear',
	// 	scrollSpeed: 900,
	// 	animation: 'fade'
	// });
		jQuery(window).on('load', function(){
		   
		   
		    if ($("#pagecontent h2").offset() != undefined)
		    {
		 var hval = $("#pagecontent h2").offset().top;
		 var tt1=hval/3+20;
		 	 var stt11= $(".innerpage_banner").height()/2+$("h1.mearts-author").height()-20;
	 
		 	
		if(tablet_device){	
		      var stt11=stt11+5;
		      	 $(".linetop").css('height', stt11 + "px");
		  }else
		  {
		      	 $(".linetop").css('height', stt11 + "px");
		  }

}

		  var slider_height= $(".team_right").height();
if(slider_height<600)
{
   
    
    var screenImage = $(".team_right_img img");

// Create new offscreen image to test
var theImage = new Image();
theImage.src = screenImage.attr("src");

// Get accurate measurements from that.
var imageWidth = theImage.width;
var imageHeight = theImage.height;

    var imgwidth=(theImage.width/theImage.height)*slider_height -35;
     $(".team_right_img").css('width', imgwidth + "px");
     
     if ($(window).width() < 978) {

}
else {
   

  $(".tim_mimg").css('width', imgwidth + "px");

		  	  $(".team_right_img img").css('height', slider_height + "px");
		  	  	  $(".about-slider-content-update").css('height', slider_height + "px"); 
		  	  $(".about-slider-content-update").each(
    function () {
       //$( this ).css("position","absolute");
       //$( this ).css("padding-top","10%");
   
       $( this ).css("padding-left","5%");
        $( this ).css("padding-right","5%");
       // $( this ).css("padding-buttom","10%");
         var swidth= $( window ).width()-($(".team_right_img").width()+$(".team_left").width());

      // $( "this ").css('width', swidth + "px");
           //$( this ).css("padding-left","10%");
        //$( this ).css("padding-right","10%");
        
        
    
       return this;
    }
);
}
    
		  	  
		  	  var right_width= $(".team_right_img").width()-imgwidth;
		  	  console.log(right_width);
		  	 // $(".about-slider-content-update").css('width', right_width + "px");
		 
}
		  	 	 
var textv= $("#serviceone").height();
var txth = $("h2.title1").height();
var ph= (textv-txth)/2;

$(".service-box-left .xg-content").css("padding-top", ph);
	var ah=$("#pagebanner").height()/2+$("h1.mearts-author").height()/2;


	 	 var sh1= $(".slider-area").height()/2+$("h1.mearts-author").height()/2;
	 if($("#map_part").offset() !== undefined)
		    {
		        
		 var devh = $("#map_part").offset().top;
		  var h12 = $(".mearts-author").offset().top+$("h1.mearts-author").height();
		  var diffh=(devh-h12)-60;
	 $(".contactline").css('height', diffh + "px");
}

	
		 
		 	  setTimeout(function(){ 	
		 	      	 $(".lineservice").css('height', sh1 + "px");
		 	      $(".lineabout").css('height', ah + "px");
		 	      
		 	      
		 	  }, 500);
	
     var s1= $("#banner").height()/2 + $(".inner-circle").height() + $("#line_banner").height()+20;
     

     //alert($(".home-banner").height()/2 -$("#section10").height()/2 );
     
$('.v1').css('margin-top',s1);
        // Preloader
        var preeLoad = $('#loading-wrap');
			preeLoad.fadeOut(1500);

    	});
	
		

})(jQuery);


