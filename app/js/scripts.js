$(document).ready(function() {

	// Замена цвета иконки

	$('img.steps__img').each(function(){
	  var $img = $(this);
	  var imgClass = $img.attr('class');
	  var imgURL = $img.attr('src');
	  $.get(imgURL, function(data) {
	    var $svg = $(data).find('svg');
	    if(typeof imgClass !== 'undefined') {
	      $svg = $svg.attr('class', imgClass+' replaced-svg');
	    }
	    $svg = $svg.removeAttr('xmlns:a');
	    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	    }
	    $img.replaceWith($svg);
	  }, 'xml');
	});


	// Swiper


	var mySwiper = new Swiper ('.swiper-masters', {

		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 1,
		spaceBetween : 32,

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next-masters',
		  prevEl: '.swiper-button-prev-masters',
		},
		breakpoints: {
			319: {
				slidesPerView: 1,
				spaceBetween : 10,
				slidesPerGroup: 1
		    },
			767: {
				slidesPerView: 2,
			    spaceBetween: 16,
			    slidesPerGroup: 1
		    },
		    992: {
		      slidesPerView: 3,
		      spaceBetween: 16,
		      slidesPerGroup: 1
		    },
		    1200: {
		      slidesPerView: 3,
		      spaceBetween: 32,
		      slidesPerGroup: 1
		    },
		}

	})


	var mySwiper_2 = new Swiper ('.swiper-reviews', {
		
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		spaceBetween: 30,
		breakpoints: {
			319: {
				slidesPerView: 1,
				spaceBetween : 10,
		    },
		    567: {
		    	slidesPerView: 1,
			    spaceBetween: 10,
			},
			767: {
				slidesPerView: 1,
			    spaceBetween: 16,
		    },
			992: {
				slidesPerView: 2,
		     	spaceBetween: 16,
		    },
		},

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},

	})

	// Accordeon

	// $('.question__burger').on('click', function() {

	// 	$(this).siblings('.question__answer').slideToggle(400);
	// 	$(this).toggleClass('question__burger__plus');

	// });


    ! function(i) {

      var o, n;

      i(".title_block").on("click", function() {

        o = i(this).parents(".accordion_item"), n = o.find(".info"),
          o.hasClass("active_block") ? (o.removeClass("active_block"),
            n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
            o.siblings(".active_block").removeClass("active_block").children(
              ".info").stop(!0, !0).slideUp())
      })

    }(jQuery);

	// Price btn

	$('.price__more').click(function () {

	  $('.not-show').toggleClass('active');
	  $(this).addClass('hide');

	});

	// City subway btn

	$('.city-subway-btn').click(function () {

	  $('.not-show').toggleClass('active');
	  $(this).css({'opacity':'0'});

	});

	// Smooth scroll

	var hashTagActive = "";
    $(".scroll").on("click touchstart" , function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 2000, 'swing');
            hashTagActive = this.hash;
        }
    });

	// Modal

	function showMessage() {
	    var inst = $('[data-remodal-id="modal-message"]').remodal();
	    inst.open();
	}

	document.addEventListener('wpcf7mailsent', function (event) {
	    setTimeout(showMessage, 500);
	}, false);

	// Modal close

	// $('.remodal-overlay, .remodal-wrapper').on('click', function() {



	// });


    // Masked Input

    $("#phone-main-banner").mask("+7 (999) 999-9999");
    $("#phone-diag").mask("+7 (999) 999-9999");
    $("#phone-master").mask("+7 (999) 999-9999");
    $("#phone-master-2").mask("+7 (999) 999-9999");
    $("#phone-master-3").mask("+7 (999) 999-9999");
    $("#phone-call").mask("+7 (999) 999-9999");
    $("#phone-1").mask("+7 (999) 999-9999");
    $("#phone-modal").mask("+7 (999) 999-9999");

    // Menu

    $('.header .menu .menu-item').on('click', function() {

    	$('.nav-link').removeClass('activeLink');
    	$('.nav-link', this).addClass('activeLink');

    });

    // Mobile menu

    $('.burger').on('click', function() {

    	$('.mobile-menu').animate({
    		left: '0px'
    	}, 400);

    });

    $('.close').on('click', function() {

    	$('.mobile-menu').animate({
    		left: '-100vw'
    	}, 400);

    });

    $('.scroll').on('click', function() {

    	$('.mobile-menu').animate({
    		left: '-100vw'
    	}, 400);

    });

    // Sticky header

    $(window).scroll(function () {

	    if ($(this).scrollTop() > 300) {

	        $("header.sticky").addClass('active');
	        $('button#responsive-menu-button').css('top', '8px');

	    } else {

	        $("header.sticky").removeClass('active');
	        $('button#responsive-menu-button').css('top', '32px');

	    }
	});

});