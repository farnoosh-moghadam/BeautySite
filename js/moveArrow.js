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