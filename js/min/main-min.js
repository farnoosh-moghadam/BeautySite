function handleSticky(e){isMobile||("down"===e?($("#stickyHeader").animate({height:"45px"}),$("#pinbarText").animate({height:"30px"}),$("#arrowHeader").animate({top:"35px"}).find(".icon").removeClass("icon-arrow-up").addClass("icon-arrow-down"),$("#arrowHeader").show(),isHeaderExpanded=!1):($("#stickyHeader").animate({height:"110px"}),$("#pinbarText").animate({height:"0px"}),$("#arrowHeader").hide()))}var isMobile=!1,isHeaderExpanded=!1;!function($){$.fn.clickToggle=function(e,a){var i=[e,a];return this.data("toggleclicked",0),this.click(function(){var e=$(this).data(),a=e.toggleclicked;$.proxy(i[a],this)(),e.toggleclicked=(a+1)%2}),this}}(jQuery),$(document).ready(function(){isMobile=$(window).width()>=992?!1:!0;var e=[];e.push("#BeautyTherapy"),e.push("#MakeUp"),e.push("#Nail"),$(e).each(function(e,a){$(a+" .panel-heading a").on("click",function(e){$(e.target).parents(".panel-heading").next(".panel-collapse").hasClass("in")&&!isMobile&&(e.preventDefault(),e.stopPropagation())}),$(a).on("show.bs.collapse",function(e){$(e.target).prev(".panel-heading").find(".icon").removeClass("icon-plus").addClass("icon-minus")}),$(a).on("hidden.bs.collapse",function(e){$(e.target.parentNode).not($(e.target).prev(".panel-heading")).find(".icon").removeClass("icon-minus").addClass("icon-plus")})}),isMobile&&$(".collapse").each(function(e,a){$(a).removeClass("in").prev(".panel-heading").find(".icon").removeClass("icon-minus").addClass("icon-plus")});var a=2e3;$(".JobGrowth-chartEmployee").waypoint(function(){$(".JobGrowth-chartEmployee").easyPieChart({easing:"easeOutBounce",barColor:"#05a8ba",lineWidth:20,trackColor:"#bbbcbf",scaleColor:!1,lineCap:"square",size:120,animate:a}),$(".JobGrowth-chartProjectedEmployeeOver").easyPieChart({easing:"easeOutBounce",barColor:"#05a8ba",lineWidth:25,trackColor:!1,scaleColor:!1,lineCap:"square",size:180,animate:a}),$(".JobGrowth-chartProjectedEmployee").easyPieChart({easing:"easeOutBounce",barColor:"#6bdfec",lineWidth:25,trackColor:"#bbbcbf",scaleColor:!1,lineCap:"square",size:180,animate:a})},{triggerOnce:!0,offset:"bottom-in-view"}),$(".tutor-box").slick({arrows:!0,slidesToShow:2,slidesToScroll:1,appendArrows:$("#tutorCarouselArrow"),prevArrow:'<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',nextArrow:'<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>'}),isMobile||$("#stickyHeader").waypoint("sticky",{handler:handleSticky,offset:-50}),$("#stickyHeader,#arrowHeader").click(function(e){isHeaderExpanded?"arrowHeader"===e.currentTarget.id&&($("#stickyHeader").animate({height:"45px"}),$("#pinbarText").animate({height:"30px"}),$("#arrowHeader").animate({top:"35px"}).find(".icon").removeClass("icon-arrow-up").addClass("icon-arrow-down"),isHeaderExpanded=!1):($("#stickyHeader").animate({height:"110px"}),$("#pinbarText").animate({height:"0px"}),$("#arrowHeader").animate({top:"95px"}).find(".icon").addClass("icon-arrow-up").removeClass("icon-arrow-down"),isHeaderExpanded=!0)})}),$(window).resize(function(){$(window).width()>=992?(isMobile=!1,$("#stickyHeader").waypoint("unsticky"),$("#stickyHeader").waypoint("sticky",{handler:handleSticky,offset:-50})):(isMobile=!0,$(".collapse").each(function(e,a){$(a).removeClass("in").prev(".panel-heading").find(".icon").removeClass("icon-minus").addClass("icon-plus")}),$("#stickyHeader").waypoint("unsticky"))});