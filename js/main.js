var isMobile = false;

(function ($) {
    $.fn.clickToggle = function (func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function () {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

function handleSticky(dir) {
    if (isMobile) {
        return;
    }
    if (dir === 'down') {
        $('#stickyHeader').animate({ 'height': '45px' });
        $('#pinbarText').animate({ 'height': '30px' });
        $('#arrowHeader').animate({ 'top': '35px' }).find('.icon').removeClass('icon-arrow-up').addClass('icon-arrow-down');
        $('#arrowHeader').show();
    }
    else {
        $('#stickyHeader').animate({ 'height': '110px' });
        $('#pinbarText').animate({ 'height': '0px' });
        $('#arrowHeader').hide();
    }
}

$(document).ready(function () {
    if ($(window).width() >= 992) {
        isMobile = false;
    }
    else {
        isMobile = true;
    }
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

    $("#benefits-Tab a").each(function (index, element) {
        $(element).click(function (e) {
            e.preventDefault();

            $(this).tab('show');

            moveArrow("#benefitArrow", index * 3, this);

            $(this).removeClass("opacity-half", 500);

            $(this).find(".icon-benefits-circle-" + $(this).attr("data-color"))
                .switchClass("icon-benefits-circle-" + $(this).attr("data-color"),
                    "icon-benefits-circle-selected-" + $(this).attr("data-color"), 500);

            $("#benefits-Tab a").not($(this)).each(function (index, element) {
                $(element).addClass("opacity-half", 500);
                $(element).find("span")
                .switchClass("icon-benefits-circle-selected-" + $(element).attr("data-color"),
                    "icon-benefits-circle-" + $(element).attr("data-color"), 500);
            });
        });
    });
    var animationTime = 2000;
    $('.JobGrowth-chartEmployee').waypoint(function () {
        $('.JobGrowth-chartEmployee').easyPieChart({
            easing: 'easeOutBounce',
            barColor: '#05a8ba',
            lineWidth: 20,
            trackColor: '#bbbcbf',
            scaleColor: false,
            lineCap: 'square',
            size: 120,
            animate: animationTime,
        });

        $('.JobGrowth-chartProjectedEmployeeOver').easyPieChart({
            easing: 'easeOutBounce',
            barColor: '#05a8ba',
            lineWidth: 25,
            trackColor: false,
            scaleColor: false,
            lineCap: 'square',
            size: 180,
            animate: animationTime,
        });

        $('.JobGrowth-chartProjectedEmployee').easyPieChart({
            easing: 'easeOutBounce',
            barColor: '#6bdfec',
            lineWidth: 25,
            trackColor: '#bbbcbf',
            scaleColor: false,
            lineCap: 'square',
            size: 180,
            animate: animationTime,
        });

    },
        {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });

    $('.tutor-box').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: $('#tutorCarouselArrow'),
        prevArrow: '<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',
        nextArrow: '<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>',
    });

    if (!isMobile) {
        $('#stickyHeader').waypoint('sticky', {
            handler: handleSticky,
            offset: -50
        });
    }

    $('.icon-arrow-header-circle').clickToggle(function () {
        $('#stickyHeader').animate({ 'height': '110px' });
        $('#pinbarText').animate({ 'height': '0px' });
        $('#arrowHeader').animate({ 'top': '95px' }).find('.icon').addClass('icon-arrow-up').removeClass('icon-arrow-down');
    }, function () {
        $('#stickyHeader').animate({ 'height': '45px' });
        $('#pinbarText').animate({ 'height': '30px' });
        $('#arrowHeader').animate({ 'top': '35px' }).find('.icon').removeClass('icon-arrow-up').addClass('icon-arrow-down');
    });
});

$(window).resize(function () {
    if ($(window).width() >= 992) {
        isMobile = false;

        $('#stickyHeader').waypoint('unsticky');
        $('#stickyHeader').waypoint('sticky', {
            handler: handleSticky,
            offset: -50
        });
    } else {
        isMobile = true;
        $(".collapse").each(function (index, element) {
            $(element).removeClass('in').prev('.panel-heading').find('.icon').removeClass('icon-minus').addClass('icon-plus');
        });

        $('#stickyHeader').waypoint('unsticky');
    }
});
