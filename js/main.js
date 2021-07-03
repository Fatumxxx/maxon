$(function () {
    $('.testimonials__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prew"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>'
    });

    $('.news__items').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1600,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    })

    $('a[href^="#down"]').bind('click.down-btn', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 100000, 'linear', function () {
            window.location.hash = target;
        });
    });

    new WOW().init();

});