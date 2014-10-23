$(document).ready(function () {
    if ($(window).width() >= 992) {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 130,
            responsive: true,
        });
    }
});