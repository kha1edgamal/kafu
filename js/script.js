$(document).ready(function () {
        /*Smooth Scroll*/
     $('a[href*="#"]').smoothscroll();
     //--Owl Init --
     $('.join-slider').owlCarousel({
        animateOut: 'fadeOut',
        loop:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.statics-slider').owlCarousel({
        loop:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    })
});
