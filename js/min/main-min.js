function moveArrow(e,n,i){var o=$(e).attr("class").match(/col-\S{2}-offset-\d{1}/g),s="";0!=$(o).length&&(s=o.join(" ")),$(e).switchClass(s,"col-lg-offset-"+n+" col-md-offset-"+n+" col-sm-offset-"+n+" col-xs-offset-"+n,500),$(e+" div").removeClass(function(e,n){return(n.match(/\bborder-\S+/g)||[]).join(" ")}).addClass("border-"+$(i).attr("color"))}var isMobile=!1;$(document).ready(function(){isMobile=$(window).width()>=992?!1:!0,$("#burger").click(function(){$(".main-menu-list").toggle("slow")});var e=[];e.push("#BeautyTherapy"),e.push("#MakeUp"),e.push("#Nail"),$(e).each(function(e,n){$(n+" .panel-heading a").on("click",function(e){$(e.target).parents(".panel-heading").next(".panel-collapse").hasClass("in")&&!isMobile&&(e.preventDefault(),e.stopPropagation())}),$(n).on("show.bs.collapse",function(e){$(e.target).prev(".panel-heading").find(".icon").removeClass("icon-plus").addClass("icon-minus")}),$(n).on("hidden.bs.collapse",function(e){$(e.target.parentNode).not($(e.target).prev(".panel-heading")).find(".icon").removeClass("icon-minus").addClass("icon-plus")})}),isMobile&&$(".collapse").each(function(e,n){$(n).removeClass("in").prev(".panel-heading").find(".icon").removeClass("icon-minus").addClass("icon-plus")}),$("#myTab a").each(function(e,n){$(n).click(function(n){n.preventDefault(),$(this).tab("show"),moveArrow("#learnArrow",4*e,this),$("#learnTabContent").removeClass(function(e,n){return(n.match(/\blearningProcess-box-\S+/g)||[]).join(" ")}).addClass("learningProcess-box-"+$(this).attr("color")),$(this.parentNode).removeClass("opacity-half",500),$("#myTab a").not($(this)).each(function(e,n){$(n.parentNode).addClass("opacity-half",500)})})}),$("#benefits-Tab a").each(function(e,n){$(n).click(function(n){n.preventDefault(),$(this).tab("show"),moveArrow("#benefitArrow",3*e,this),$(this).removeClass("opacity-half",500),$(this).find(".icon-benefits-circle-"+$(this).attr("color")).switchClass("icon-benefits-circle-"+$(this).attr("color"),"icon-benefits-circle-selected-"+$(this).attr("color"),500),$("#benefits-Tab a").not($(this)).each(function(e,n){$(n).addClass("opacity-half",500),$(n).find("span").switchClass("icon-benefits-circle-selected-"+$(n).attr("color"),"icon-benefits-circle-"+$(n).attr("color"),500)})})})}),$(window).resize(function(){$(window).width()>=992?(isMobile=!1,$(".main-menu-list").show()):(isMobile=!0,$(".main-menu-list").hide(),$(".collapse").each(function(e,n){$(n).removeClass("in").prev(".panel-heading").find(".icon").removeClass("icon-minus").addClass("icon-plus")}))});