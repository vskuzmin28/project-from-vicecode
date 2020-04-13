(function ($) {
  	$(document).ready(function () {

  		$('input[name="phone"]').inputmask("+7 (999)-999-99-99");

		var mainslider = new Swiper('.reviews-slider', {
			slidesPerView: 1,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
  		});

		$('.thanks-open').on ('click', function (e) {
			e.preventDefault ();
			$('.popup').modal('hide');
			$('#thanks').modal('show');
		} );

		$('.thanks-close').on ('click', function (e) {
			e.preventDefault ();
			$('.popup').modal('hide');
		});

		$('.mobile-menu').click(function(e){
			e.preventDefault();

			$(this).next().slideToggle(200);
			$(this).toggleClass('active');
		});

		$('.header-city li').click(function(){
			let text = $(this).text();
				$('.header-city__result').text(text);
		});

  		$(window).scroll(function(){

  			if($(window).scrollTop() > 180){
  				$('.fixed-menu').slideDown(200);
  			} else {
				$('.fixed-menu').slideUp(200);
  			}

  		});

		$(".fixed-menu, .menu").on("click","a", function (event) {
			
			var id  = $(this).attr('href').split('#')[1];

			if ($('.'+id).length != 0) {
				event.preventDefault();
				var	top = $('.'+id).offset().top - 100;

				$('body,html').animate({scrollTop: top}, 1500);
			}
		});

		setTimeout(function(){
			$('.contacts-map__menu').before('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acf1526328c862ada7518996a9e84c0076b0e48f1c30d5e2d395098d0ecfd7f79&amp;width=100%25&amp;height=475&amp;lang=ru_RU&amp;scroll=true"></script>');
		}, 4000);

  	});
})(jQuery);