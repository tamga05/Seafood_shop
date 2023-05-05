$(function () {

    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>',
        vertical: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 631,
                settings: {
                    dots: false,
                    arrows: false,
                    // autoplay: true
                }
            }
        ]
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        // autoplay: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="product-prev"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="product-next"></button>'
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        // focusOnSelect: true
        fade: true,
        arrows: false
    });

});

