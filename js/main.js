﻿var isMobile = false;

function moveArrow(objectId, offsetSize, linkObject) {
    var classesToRemove = $(objectId).attr("class").match(/col-\S{2}-offset-\d{1}/g);
    var allClassesInline = "";
    if ($(classesToRemove).length !== 0){
        allClassesInline = classesToRemove.join(' ');
	}
    $(objectId).switchClass(allClassesInline, "col-lg-offset-" + offsetSize + " col-md-offset-" + offsetSize + " col-sm-offset-" + offsetSize + " col-xs-offset-" + offsetSize, 500);

    $(objectId + " div").removeClass(function (index, css) {
        return (css.match(/\bborder-\S+/g) || []).join(' ');
    }).addClass('border-' + $(linkObject).attr("color"));
}

function handleSticky(dir) {
	  if(isMobile) {
		  return;
	  }
	  if(dir==='down')
	  {
		  $('#stickyHeader').hover(function() {
			  $('#stickyHeader').animate({'height': '110px'});
			  $('#pinbarText').animate({'height': '0px'});
		  }, function() {
			  $('#stickyHeader').animate({'height': '40px'});
			  $('#pinbarText').animate({'height': '25px'});
		  });
		  $('#stickyHeader').animate({'height': '40px'});
		  $('#pinbarText').animate({'height': '25px'});
	  }
	  else
	  {
		  $('#stickyHeader').unbind('mouseenter mouseleave');
		  $('#stickyHeader').animate({'height': '110px'});
		  $('#pinbarText').animate({'height': '0px'});
	  }
}

$(document).ready(function () {
    if ($(window).width() >= 992) {
        isMobile = false;
    }
    else {
        isMobile = true;
    }
    var selectors = [];
    selectors.push('#BeautyTherapy');
    selectors.push('#MakeUp');
    selectors.push('#Nail');

    $(selectors).each(function (index, element) {
        $(element + ' .panel-heading a').on('click', function (e) {
            if ($(e.target).parents('.panel-heading').next('.panel-collapse').hasClass('in') && !isMobile) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        $(element).on('show.bs.collapse', function (e) {
            $(e.target).prev('.panel-heading').find('.icon').removeClass('icon-plus').addClass('icon-minus');
        });

        $(element).on('hidden.bs.collapse', function (e) {
            $(e.target.parentNode).not($(e.target).prev('.panel-heading')).find('.icon').removeClass('icon-minus').addClass('icon-plus');
        });
    });

    if (isMobile) {
        $(".collapse").each(function (index, element) {
            $(element).removeClass('in').prev('.panel-heading').find('.icon').removeClass('icon-minus').addClass('icon-plus');
        });
    }

    $("#myTab a").each(function (index, element) {
        $(element).click(function () {
            $('html, body').animate({
     			scrollTop: $("#learnTabContent").offset().top - 100
 			}, 1000);

            $(this).tab('show');

            moveArrow("#learnArrow", index * 4, this);

            $("#learnTabContent").removeClass(function (index, css) {
                return (css.match(/\blearningProcess-box-\S+/g) || []).join(' ');
            }).addClass('learningProcess-box-' + $(this).attr("color"));

            $(this.parentNode).removeClass("opacity-half", 500);

            $("#myTab a").not($(this)).each(function (index, element) {
                $(element.parentNode).addClass("opacity-half", 500);
            });
        });
    });

    $("#benefits-Tab a").each(function (index, element) {
        $(element).click(function (e) {
            e.preventDefault();

            $(this).tab('show');

            moveArrow("#benefitArrow", index * 3, this);

            $(this).removeClass("opacity-half", 500);

            $(this).find(".icon-benefits-circle-" + $(this).attr("color"))
                .switchClass("icon-benefits-circle-" + $(this).attr("color"),
                    "icon-benefits-circle-selected-" + $(this).attr("color"), 500);

            $("#benefits-Tab a").not($(this)).each(function (index, element) {
                $(element).addClass("opacity-half", 500);
                $(element).find("span")
                .switchClass("icon-benefits-circle-selected-" + $(element).attr("color"),
                    "icon-benefits-circle-" + $(element).attr("color"), 500);
            });
        });
    });
    var animationTime = 2000;
    $('.JobGrowth-chartEmployee').waypoint(function () {
        $('.JobGrowth-chartEmployee').easyPieChart({
            easing: 'easeOutBounce',
            barColor: '#05a8ba',
            lineWidth: 20,
            trackColor: '#bbbcbf',
            scaleColor: false,
            lineCap: 'square',
            size: 120,
            animate: animationTime,
        });

        $('.JobGrowth-chartProjectedEmployeeOver').easyPieChart({
            easing: 'easeOutBounce',
            barColor: '#05a8ba',
            lineWidth: 25,
            trackColor: false,
            scaleColor: false,
            lineCap: 'square',
            size: 180,
            animate: animationTime,
        });

        $('.JobGrowth-chartProjectedEmployee').easyPieChart({
            easing: 'easeOutBounce',
            barColor: '#6bdfec',
            lineWidth: 25,
            trackColor: '#bbbcbf',
            scaleColor: false,
            lineCap: 'square',
            size: 180,
            animate: animationTime,
        });

    },
        {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });


    if (isMobile) {
        $('.testimonialCarousel').slick({
            arrows: true,
            dots: true,
        });
    }
    else {
        $('.testimonialCarousel').slick({
            arrows: true,
            dots: true,
            appendArrows: $('#testimonialCarouselArrow'),
            prevArrow: '<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',
            nextArrow: '<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>',
        });
    }

    $('.tutor-box').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: $('#tutorCarouselArrow'),
        prevArrow: '<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',
        nextArrow: '<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>',
    });
	
	$('#stickyHeader').waypoint('sticky', {
    	handler:handleSticky,
		offset: -50
	});
	
	$( "#dialog" ).dialog({
      autoOpen: false,
    });
 
    $( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
});

$(window).resize(function () {
    if ($(window).width() >= 992) {
        isMobile = false;

        $('.testimonialCarousel').unslick();
        $('.testimonialCarousel').slick({
            arrows: true,
            dots: true,
            appendArrows: $('#testimonialCarouselArrow'),
            prevArrow: '<span href="#" class="icon icon-arrow-left icon-arrowLeft-circle"></span>',
            nextArrow: '<span class="icon icon-arrow-right icon-arrowRight-circle ml-5"></span>',
        });
		$('#stickyHeader').waypoint('unsticky');
		$('#stickyHeader').waypoint('sticky', {
    		handler:handleSticky,
			offset: -50
		});
    } else {
        isMobile = true;
        $(".collapse").each(function (index, element) {
            $(element).removeClass('in').prev('.panel-heading').find('.icon').removeClass('icon-minus').addClass('icon-plus');
        });

        $('.testimonialCarousel').unslick();
        $('.testimonialCarousel').slick({
            arrows: true,
            dots: true,
        });
		
		$('#stickyHeader').waypoint('unsticky');
    }
});
