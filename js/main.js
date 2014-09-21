var isMobile = false;

$(document).ready(function () {
    if ($(window).width() >= 992) {
        isMobile = false;
    }
    else {
        isMobile = true;
    }

    $('#burger').click(function () {
        $('.main-menu-list').toggle('slow');
    });

    var selectors = [];
    selectors.push('#BeautyTherapy');
    selectors.push('#MakeUp');
    selectors.push('#Nail');

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

    $("#myTab a").each(function (index, element) {
        $(element).click(function (e) {
            e.preventDefault();
            $(this).tab('show');
            $("#learnArrow").animate({
                "margin-left": $(this).position().left + $(this).width() / 2 - 24,
            });
            $("#learnArrow").removeClass(function (index, css) {
                return (css.match(/\bborder-\S+/g) || []).join(' ');
            }).addClass('border-' + $(this).attr("color"));
            $("#learnTabContent").removeClass(function (index, css) {
                return (css.match(/\blearningProcess-box-\S+/g) || []).join(' ');
            }).addClass('learningProcess-box-' + $(this).attr("color"));
        });
    });
});

$(window).resize(function () {
    if ($(window).width() >= 992) {
        isMobile = false;
        $(".main-menu-list").show();
    } else {
        isMobile = true;
        $(".main-menu-list").hide();
        $(".collapse").each(function (index, element) {
            $(element).removeClass('in').prev('.panel-heading').find('.icon').removeClass('icon-minus').addClass('icon-plus');
        });
    }
});
