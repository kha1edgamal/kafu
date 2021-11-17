$(document).ready(function () {
    //Open-Close Off-canvas menu
    $('.open-nav').click(function(){
        $('.off-canvas').addClass('opened');
    });
    $('.close-nav').click(function(){
        $('.off-canvas').removeClass('opened');
    })
    // -- Tooltip init --
    $('[data-toggle="tooltip"]').tooltip();
    //-- Remove scrollbar when modal is visible
    $('.modal').on("hidden.bs.modal", function (e) { 
        if ($('.modal:visible').length) { 
            $('body').addClass('modal-open');
        }
    });
     //--Owl Init --
     $('.join-slider').owlCarousel({
         //add rtl true in arabic ver
         rtl:true,
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
    });
    $('.statics-slider').owlCarousel({
         //add rtl true in arabic ver
         rtl:true,
        loop:true,
        nav:true,
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        dots: false,
        margin: 20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.partners-slider').owlCarousel({
         //add rtl true in arabic ver
         rtl:true,
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
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.timer-slider .slider').owlCarousel({
         //add rtl true in arabic ver
        //  rtl:true,
        loop:false,
        nav:true,
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        dots: false,
        margin: 0,
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
    });
    $('.app-slider .owl-carousel').on('initialized.owl.carousel translate.owl.carousel', function(e){
        idx = e.item.index;
        $('.owl-item.smaller').removeClass('smaller');
        $('.owl-item.medium').removeClass('medium');
        $('.owl-item').eq(idx).addClass('smaller');
        $('.owl-item').eq(idx+1).addClass('medium');
        $('.owl-item').eq(idx+3).addClass('medium');
        $('.owl-item').eq(idx+4).addClass('smaller smaller-2');
    });
    $('.app-slider .owl-carousel').owlCarousel({
         //add rtl true in arabic ver
        //  rtl:true,
        loop:true,
        autoplay: true,
        rewind:true,
        autoplayTimeout:2000,
        nav:false,
        center: true,
        touchDrag  : false,
        mouseDrag  : false,
        dots: false,
        margin: 30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
   
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
    //-- Sticky Header On Scroll --
    $(window).scroll(function(){
        var header = $('header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) header.addClass('sticky');
        else header.removeClass('sticky');
      });

    //-- Profile progress bar --
    var circle = document.querySelector('circle');
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }

    const input = document.querySelector('input');
    setProgress(input.value);

    input.addEventListener('change', function (e) {
        if (input.value < 101 && input.value > -1) {
            setProgress(input.value);
        }
    })

    //-- Read Uploaded user profile picture --
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });
    // -- Select2 Init --
    if ($('select').length) {
        $(".m-select").select2({
            width: '100%',
            containerCssClass: "pf-select",
            minimumResultsForSearch: -1
        });
    }
    //--Toast msg when copy--
    
    $('.code-cpy').click(function (e) {
        e.preventDefault();
        $('.cpy-toast').html('Copied!').fadeIn().delay(2000).fadeOut();
    });

    //-- Animate Numbers On Load --
    $('.Count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    

});
