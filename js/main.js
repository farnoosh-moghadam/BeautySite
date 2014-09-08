$(document).ready(function () {
    $("#burger").click(function () {
        $(".main-menu-list").toggle("slow");
    });
});

$(window).resize(function () {
    if ($(window).width() >= 992) {
        $(".main-menu-list").show();
    } else if ($(window).width() < 991) {
        $(".main-menu-list").hide();
    }
});