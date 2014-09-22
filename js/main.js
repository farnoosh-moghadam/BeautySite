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

            var offsetSize = index * 4;
            var classesToRemove = $("#learnArrow").attr("class").match(/col-\S{2}-offset-\d{1}/g);
            var allClassesInline = "";
            if($(classesToRemove).length != 0)
                allClassesInline = classesToRemove.join(' ');
            $("#learnArrow").switchClass(allClassesInline, "col-lg-offset-" + offsetSize + " col-md-offset-" + offsetSize + " col-sm-offset-" + offsetSize + " col-xs-offset-" + offsetSize, 500)

            $("#learnArrow div").removeClass(function (index, css) {
                return (css.match(/\bborder-\S+/g) || []).join(' ');
            }).addClass('border-' + $(this).attr("color"));

            $("#learnTabContent").removeClass(function (index, css) {
                return (css.match(/\blearningProcess-box-\S+/g) || []).join(' ');
            }).addClass('learningProcess-box-' + $(this).attr("color"));

            $(this.parentNode).removeClass("opacity-half", 500);

            $("#myTab a").not($(this)).each(function (index, element) {
                $(element.parentNode).addClass("opacity-half");
            });
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
