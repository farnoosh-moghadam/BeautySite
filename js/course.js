function handleSticky(dir) {
    if ($(window).width() < 992) {
        return;
    }
    if (dir === 'down') {
        $('#stickyForm').find('.form-course-box').css({ 'margin-top': '0px','width':'360px' });
    }
    else {
        $('#stickyForm').find('.form-course-box').css({ 'margin-top': '-150px', 'width': '100%' });
    }
}

$(document).ready(function () {

    if ($(window).width() >= 992) {
        $('#stickyForm').waypoint('sticky', {
            handler: handleSticky,
        });
    }
});

$(window).resize(function () {
    if ($(window).width() >= 992) {
        $('#stickyForm').waypoint('unsticky');
        $('#stickyForm').waypoint('sticky', {
            handler: handleSticky,
        });
    }
    else
    {
        $('#stickyForm').waypoint('unsticky');
    }
});