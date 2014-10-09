$(document).ready(function($) {

    // init controller
    var controller = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: "onLeave",
            duration: 460,
        }
    });

    // build scenes
	var backgroundPos = "0 460px";
    new ScrollScene({
            triggerElement: "#parallax1"
        })
        .setTween(TweenMax.to("#parallax1", 1, {
            backgroundPosition: backgroundPos,
            ease: Linear.easeNone
        }))
        .addTo(controller)
		.addIndicators();
		
    new ScrollScene({
            triggerElement: "#parallax2"
        })
        .setTween(TweenMax.to("#parallax2", 1, {
            backgroundPosition: backgroundPos,
            ease: Linear.easeNone
        }))
        .addTo(controller)
		.addIndicators();

    new ScrollScene({
            triggerElement: "#parallax3"
        })
        .setTween(TweenMax.to("#parallax3", 1, {
            backgroundPosition: backgroundPos,
            ease: Linear.easeNone
        }))
        .addTo(controller)
		.addIndicators();
});