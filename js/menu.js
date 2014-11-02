$(function () {
    $('#burger').click(function (e) {
        if ($('.main-menu').css('margin-right') != '0px') e.stopPropagation();
        $('.main-menu').animate({ 'margin-right': 0 });
    });
    $(window).click(function () {
        $('.main-menu').animate({ 'margin-right': '-55%' });
    });
});
