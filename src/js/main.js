$(function() {
    $('.popular__slider-items').slick({
        dots: false,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });

    var mixer = mixitup('.products');

    $('.followers__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});