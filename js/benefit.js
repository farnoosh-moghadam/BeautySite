$(document).ready(function () {
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
});