$(document).ready(function () {
    if ($(window).width() < 992) {
        $('.testimonialCarousel').slick({
            arrows: true,
            dots: true,
        });
    }
    else {
        $('.testimonialCarousel').slick({
            arrows: true,
            dots: true,
            appendArrows: $('#testimonialCarouselArrow'),
            prevArrow: '<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',
            nextArrow: '<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>',
        });
    }
});

$(window).resize(function () {
    $('.testimonialCarousel').unslick();
    if ($(window).width() >= 992) {
        $('.testimonialCarousel').slick({
            arrows: true,
            dots: true,
            appendArrows: $('#testimonialCarouselArrow'),
            prevArrow: '<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',
            nextArrow: '<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>',
        });
    } else {
        $('.testimonialCarousel').slick({
            arrows: true,
            dots: true,
        });
    }
});