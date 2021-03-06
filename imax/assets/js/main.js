(function($){
    "use strict";

    $('header .mean-menu').meanmenu({
        meanMenuContainer: '.tab-nab',
		meanScreenWidth: 991
	}); 
	
	$(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".sticky-menu").addClass("sticky");
        }
        else {
            $(".sticky-menu").removeClass("sticky");
        }
    });

	$('#client-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#client-slider-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#shop-slider-3').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        autoplay: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#team-4-slider').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        autoplay: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
	
    $('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
    });

    window.addEventListener('scroll', function(){
        var scroll = document.querySelector('.gotopbtn');
        scroll.classList.toggle("active", window.scrollY > 500);
    });

    $(".gotopbtn").on("click", function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 1500)
    });

    $('input[type="number"]').niceNumber();

    $('select').niceSelect();

            
    $('.home1-video-popup').magnificPopup({
        type: "iframe",
    })

})(jQuery);
