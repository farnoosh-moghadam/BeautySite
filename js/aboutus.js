$(document).ready(function () {
    if ($(window).width() >= 992) {
        isMobile = false;
    }
    else {
        isMobile = true;
    }

    if (isMobile) {
        $('.tutor-box').slick({
            slidesToShow: ($(window).width() >= 480) ? 2 : 1,
            arrows: true,
            dots: false,
        });
    }
    else {
        $('.tutor-box').slick({
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: $('#tutorCarouselArrow'),
            prevArrow: '<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',
            nextArrow: '<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>',
        });
    }

    var selectors = [];
    selectors.push('#BeautyTherapy');

    switchIcons(selectors, isMobile);
});

$(window).resize(function () {
    $('.tutor-box').unslick();
    if ($(window).width() >= 992) {
        $('.tutor-box').slick({
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: $('#tutorCarouselArrow'),
            prevArrow: '<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',
            nextArrow: '<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>',
        });
    }
    else {
        $('.tutor-box').slick({
            slidesToShow: ($(window).width() >= 480) ? 2 : 1,
            arrows: true,
            dots: false,
        });
    }

});
