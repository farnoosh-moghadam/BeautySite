$(document).ready(function(){$("#myTab a").each(function(a,o){$(o).click(function(){$("html, body").animate({scrollTop:$("#learnTabContent").offset().top-100},1e3),$(this).tab("show"),moveArrow("#learnArrow",4*a,this),$("#learnTabContent").removeClass(function(a,o){return(o.match(/\blearningProcess-box-\S+/g)||[]).join(" ")}).addClass("learningProcess-box-"+$(this).attr("data-color")),$(this.parentNode).removeClass("opacity-half",500),$("#myTab a").not($(this)).each(function(a,o){$(o.parentNode).addClass("opacity-half",500)})})})});