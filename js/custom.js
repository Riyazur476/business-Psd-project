$(document).ready(function() {
    // $('.works-bg .works-menu ul li')
    //Banner slider
    $('.sliderBanner').slick({
        arrows: true,
        autoplay: true,
        prevArrow: '<i class="slick-prev fas fa-chevron-left prev-arrow"></i>',
        nextArrow: '<i class="slick-next fas fa-chevron-right next-arrow"></i>',
        dots: true,

    });

    //gallery filtery
    var mixer = mixitup('.mixitup');

    //feedback slider
    $('.Fslider').slick({
        // autoplay: true,
        prevArrow: '',
        nextArrow: '',
        slidesToShow: 2,
        dots: true,
    }, 1300);
    //wow js
})