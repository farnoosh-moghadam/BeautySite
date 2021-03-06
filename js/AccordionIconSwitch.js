﻿
function switchIcons(selectors,isMobile) {
    $(selectors).each(function (index, element) {
        $(element + ' .panel-heading a').on('click', function (e) {
            if ($(e.target).parents('.panel-heading').next('.panel-collapse').hasClass('in') && !isMobile) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        $(element).on('show.bs.collapse', function (e) {
            $(e.target).prev('.panel-heading').find('.icon').removeClass('icon-plus').addClass('icon-minus');
        });

        $(element).on('hidden.bs.collapse', function (e) {
            $(e.target.parentNode).not($(e.target).prev('.panel-heading')).find('.icon').removeClass('icon-minus').addClass('icon-plus');
        });
    });

    if (isMobile) {
        $(".collapse").each(function (index, element) {
            $(element).removeClass('in').prev('.panel-heading').find('.icon').removeClass('icon-minus').addClass('icon-plus');
        });
    }
}