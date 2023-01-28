/*-----------------------------------------------------------------------------------
    Template Name: Qolle - Agency HTML Template
    Template URI: https://webtend.net/demo/html/qolle/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    01. Header
    02. Dropdown menu
    03. Submenu Dropdown
    04. Menu Hidden
    05. OnePage Nav
    06. Project Gallery
    07. Scroll to Top
    08. Feedback Slider
    09. Nice Select
    10. WOW Animation
    11. Preloader
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // 01. Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // 02. Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // 03. Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-chevron-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
         
        // 04. Menu Hidden Sidebar Content Toggle
        if($('.menu-sidebar').length){
            //Show Form
            $('.menu-sidebar').on('click', function(e) {
                e.preventDefault();
                $('body').addClass('side-content-visible');
            });
            //Hide Form
            $('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
                e.preventDefault();
                $('body').removeClass('side-content-visible');
            });
            //Dropdown Menu
            $('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
                $(this).next('ul').slideToggle(500);
            });
        }
         
        
        // 05. OnePage Nav Scroll
        $(".onepage a").on('click', function(e){
            e.preventDefault();
            var hash = this.hash;
            var position = $(hash).offset().top;
            $("html").animate({
                scrollTop : position
            },1000);
        });
        
        
        // 06. Project Gallery Popup
        $('.project-item a').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
         
        
        // 07. Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }      

        
        // 08. Feedback Slider
        if ($('.feedback-logo-wrap').length) {
            $('.feedback-logo-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 5000,
                arrows: false,
                speed: 1000,
                slidesToShow: 5,
                slidesToScroll: 1,
                focusOnSelect: true,
                asNavFor: '.feedback-content-wrap',
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                ]
            });
        } 
        
        if ($('.feedback-content-wrap').length) {
            $('.feedback-content-wrap').slick({
                dots: false,
                infinite: false,
                autoplay: false,
                fade: true,
                autoplaySpeed: 5000,
                arrows: false,
                centerMode: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.feedback-logo-wrap'
            });
        }
        
        
        // 09. Nice Select
        $('select').niceSelect();
        
        
        // 10. WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }

        
    });
    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        // 11. Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();  
        
    });

})(window.jQuery);
