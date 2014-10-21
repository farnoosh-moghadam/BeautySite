
$(document).ready(function () {
    $("#myTab a").each(function (index, element) {
        $(element).click(function () {
            $('html, body').animate({
                scrollTop: $("#learnTabContent").offset().top - 400
            }, 1000);

            $(this).tab('show');

            moveArrow("#learnArrow", index * 4, this);

            $("#learnTabContent").removeClass(function (index, css) {
                return (css.match(/\blearningProcess-box-\S+/g) || []).join(' ');
            }).addClass('learningProcess-box-' + $(this).attr("data-color"));

            $(this.parentNode).removeClass("opacity-half", 500);

            $("#myTab a").not($(this)).each(function (index, element) {
                $(element.parentNode).addClass("opacity-half", 500);
            });
        });
    });
});