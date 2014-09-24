﻿var isMobile = false;

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

            moveArrow("#learnArrow", index * 4, this);

            $("#learnTabContent").removeClass(function (index, css) {
                return (css.match(/\blearningProcess-box-\S+/g) || []).join(' ');
            }).addClass('learningProcess-box-' + $(this).attr("color"));

            $(this.parentNode).removeClass("opacity-half", 500);

            $("#myTab a").not($(this)).each(function (index, element) {
                $(element.parentNode).addClass("opacity-half", 500);
            });
        });
    });

    $("#benefits-Tab a").each(function (index, element) {
        $(element).click(function (e) {
            e.preventDefault();

            $(this).tab('show');

            moveArrow("#benefitArrow", index * 3, this);

            $(this).switchClass("opacity-half", "icon-benefits-circle-selected icon-benefits-circle-" + $(this).attr("color"), 500);

            $("#benefits-Tab a").not($(this)).each(function (index, element) {
                $(element).switchClass("icon-benefits-circle-selected icon-benefits-circle-" + $(this).attr("color"), "opacity-half", 500);
            });
        });
    });
});

function moveArrow(objectId, offsetSize, linkObject) {
    var classesToRemove = $(objectId).attr("class").match(/col-\S{2}-offset-\d{1}/g);
    var allClassesInline = "";
    if ($(classesToRemove).length != 0)
        allClassesInline = classesToRemove.join(' ');
    $(objectId).switchClass(allClassesInline, "col-lg-offset-" + offsetSize + " col-md-offset-" + offsetSize + " col-sm-offset-" + offsetSize + " col-xs-offset-" + offsetSize, 500)

    $(objectId + " div").removeClass(function (index, css) {
        return (css.match(/\bborder-\S+/g) || []).join(' ');
    }).addClass('border-' + $(linkObject).attr("color"));
}

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
