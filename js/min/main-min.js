var isMobile=!1;$(document).ready(function(){isMobile=$(window).width()>=992?!1:!0,$("#burger").click(function(){$(".main-menu-list").toggle("slow")});var n=[];n.push("#BeautyTherapy"),n.push("#MakeUp"),n.push("#Nail"),$(n).each(function(n,i){$(i+" .panel-heading a").on("click",function(n){$(n.target).parents(".panel-heading").next(".panel-collapse").hasClass("in")&&!isMobile&&(n.preventDefault(),n.stopPropagation())}),$(i).on("show.bs.collapse",function(n){$(n.target).prev(".panel-heading").find(".icon").removeClass("icon-plus").addClass("icon-minus")}),$(i).on("hidden.bs.collapse",function(n){$(n.target.parentNode).not($(n.target).prev(".panel-heading")).find(".icon").removeClass("icon-minus").addClass("icon-plus")})})}),$(window).resize(function(){$(window).width()>=992?(isMobile=!1,$(".main-menu-list").show()):$(window).width()<991&&(isMobile=!0,$(".main-menu-list").hide())});