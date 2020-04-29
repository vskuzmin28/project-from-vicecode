(function ($) {
    $(document).ready(function () {

        $('.rewiews-slider').slick({
            accessibility: false,
            verticalSwiping: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 900,
                    accessibility: false,
                    settings: {
                        accessibility: false,
                        accessibility: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true

                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        accessibility: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            prevArrow: '<img class="slider arrows slider-arrows__left" src="./img/arrow-left.png" alt=""></img>',
            nextArrow: '<img class="slider arrows slider-arrows__right"  src="./img/arrow-right.png" alt=""></img>',
        });

        $('.btn-menu').on('click', function() {
            $('.menu').addClass('active')
        });

        $('.menu__links-item').on('click', function() {
            $(this).closest('.menu')
                .removeClass('active');
        });
        $('.btn-close').on('click', function() {
            $('.menu').removeClass('active')
        });

        $('.js-button-campaign').click(function(e) {
            e.preventDefault();
            $('.js-overlay-campaign').fadeIn();
            $('.js-overlay-campaign').addClass('disabled');
        });
        $('.js-close-campaign').click(function() {
            $('.js-overlay-campaign').fadeOut();

        });

        $('.js-button-review').click(function(e) {
            e.preventDefault();
            $('.js-overlay-review').fadeIn();
            $('.js-overlay-review').addClass('disabled');
        });
        $('.js-close-review').click(function() {
            $('.js-overlay-review').fadeOut();

        });

        $(document).mouseup(function(e) {
            var popup = $('.js-popup-review');
            if (e.target != popup[0] && popup.has(e.target).length === 0) {
                $('.js-overlay-review').fadeOut();
            }
        });

        $('.send').click(function() {
            $('.popup-form').removeClass();
            $('.popup-final').addClass();
        });
        $('.close').click(function() {
            $('.overlay').fadeOut();

        });

        $(document).mouseup(function(e) {
            var popup = $('.js-popup-campaign');
            if (e.target != popup[0] && popup.has(e.target).length === 0) {
                $('.js-overlay-campaign').fadeOut();
            }
        });
        $('.send').click(function() {
            $('.popup-form').removeClass();
            $('.popup-final').addClass();
        });
        $('.close').click(function() {
            $('.overlay').fadeOut();

        });

        $('.close-popup').click(function() {
            $('.overlay-sale').fadeOut();
        });

        $(document).mouseup(function(e) {
            var popup = $('.popup-sale');
            if (e.target != popup[0] && popup.has(e.target).length === 0) {
                $('.overlay-sale').fadeOut();
            }
        });

        $('.close-popup__repairs').click(function() {
            $('.overlay-repairs').fadeOut();
        });

        $(document).mouseup(function(e) {
            var popup = $('.popup-repairs');
            if (e.target != popup[0] && popup.has(e.target).length === 0) {
                $('.overlay-repairs').fadeOut();
            }
        });

        $(window).scroll(function(){

            if($(window).scrollTop() > 180){
                $('.header_float').addClass('fixed');
            } else {
                $('.header_float').removeClass('fixed');
            }

        });

        var now = new Date(),
            now_day = now.setDate(now.getDate() + 5),
            now_day_input = now.getDate();


        const monthNames = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
          "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];

        var day_result = monthNames[now.getMonth()];

        $('.load-date').text(now_day_input +' '+ day_result);

    });
})(jQuery);