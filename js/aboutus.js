$(document).ready(function () {
    $('.tutor-box').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: $('#tutorCarouselArrow'),
        prevArrow: '<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',
        nextArrow: '<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>',
    });
});