function moveArrow(objectId, offsetSize, linkObject) {
    var classesToRemove = $(objectId).attr("class").match(/col-\S{2}-offset-\d{1}/g);
    var allClassesInline = "";
    if ($(classesToRemove).length !== 0) {
        allClassesInline = classesToRemove.join(' ');
    }
    $(objectId).switchClass(allClassesInline, "col-lg-offset-" + offsetSize + " col-md-offset-" + offsetSize + " col-sm-offset-" + offsetSize + " col-xs-offset-" + offsetSize, 500);

    $(objectId + " div").removeClass(function (index, css) {
        return (css.match(/\bborder-\S+/g) || []).join(' ');
    }).addClass('border-' + $(linkObject).attr("data-color"));
}
$(document).ready(function () {
    $("#myTab a").each(function (index, element) {
        $(element).click(function () {
            $('html, body').animate({
                scrollTop: $("#learnTabContent").offset().top - 100
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