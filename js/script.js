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
        nav:true,
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        dots: false,
        margin: 20,
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
    // -- Show Pargaraph On Hover --
    $(".statics-slider .item").hover(
        function () {
          $(this).find('p').slideDown();
          $(this).css('transform','translateY(-15%)')
        }, 
        function () {
            $(this).find('p').slideUp();
            $(this).css('transform','unset')
        }
        );
});
