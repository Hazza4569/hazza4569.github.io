$(function() {
  // Init Controller
    let scrollController = new ScrollMagic.Controller();

  //Animate name to the right on scroll
    let twnNameRight = TweenMax.to('#harry', 0.5, {
        x: "180%"
    });

    let scnNameRight = new ScrollMagic.Scene({
        triggerElement: '#page1',
        duration: "100%",
        triggerHook:0.9
    })
        .setTween(twnNameRight)
        .addTo(scrollController);

  //Animate subtitle to the right on scroll
    let twnSubttlRight = TweenMax.to('#subtitle', 0.5, {
        x: "180%"
    });

    let scnSubttlRight = new ScrollMagic.Scene({
        triggerElement: '#page1',
        duration: "100%",
        triggerHook:1
    })
        .setTween(twnSubttlRight)
        .addTo(scrollController);

  //Remove initial animation from nav buttons
    new ScrollMagic.Scene({
        triggerElement: '#page1',
        triggerHook:1,
        duration: 1//px
    })
        .addTo(scrollController)
        .on("leave", function (e) {
            $(".nav__link").removeClass("animated slideInLeft");
        });

  //Shrink Navigation Buttons into navigation bar on scroll
    let shrinkRate = "60%";

    let twnNavShrink = new TweenMax.staggerTo('.nav__link',0.5, {
        x: "-45%",
        backgroundColor: 'rgb(0, 0, 0)'
    },-0.03);

    let scnNavShrink = new ScrollMagic.Scene({
        triggerElement: '#page1',
        duration: shrinkRate,
        triggerHook:1,
        offset:1//px (to allow initial animations to turn off)
    })
        .setTween(twnNavShrink)
        .addTo(scrollController);

    let twnNavColour = new TweenMax.staggerTo('.nav__fade',0.5, {
        backgroundColor: 'rgba(100, 100, 100, 1)',
        color: 'rgba(100,100,100,0)'
    },-0.03);

    let scnNavColour = new ScrollMagic.Scene({
        triggerElement: '#page1',
        duration: shrinkRate,
        triggerHook:1,
        offset:1//px (to allow initial animations to turn off)
    })
    .setTween(twnNavColour)
    .addTo(scrollController);

    let twnNavIcon = new TweenMax.staggerTo('.nav-small',0.5, {
        color: 'rgba(100, 100, 100, 1)'
    },-0.03);
    let scnNavIcon = new ScrollMagic.Scene({
        triggerElement: '#page1',
        duration: shrinkRate,
        triggerHook:1,
        offset:1//px (to allow initial animations to turn off)
    })
    .setTween(twnNavIcon)
    .addTo(scrollController);

  //Hexagon animations:
    let twnNavHexSlide = new TweenMax.staggerFrom('.nav-small',0.5,{
        x:'-50%',
        scale: 0,
        rotation: -180
    },-0.03);
    new ScrollMagic.Scene({
        triggerElement: '#page1',
        duration: '40%',
        triggerHook:0.6,
        offset:1//px (to allow initial animations to turn off)
    })
        .setTween(twnNavHexSlide)
        .addTo(scrollController);

  //Small label appearance
    let twnNavSmallLbl = new TweenMax.staggerFrom('.small-label',0.5,{
        color: 'rgba(100, 100, 100, 0)'
    },-0.03);
    new ScrollMagic.Scene({
        triggerElement: '#page1',
        duration: shrinkRate,
        triggerHook:0.7,
        offset:1//px (to allow initial animations to turn off)
    })
        .setTween(twnNavSmallLbl)
        .addTo(scrollController);

  //Highlight scroll progress
  //N.B: Due to complications with layering in css, have to have a seperate
  //highlight div for each section of the nav bar. This will require a large
  //number of separate animations.
    for (let i = 0; i < 5; i++)
    {
        let twnNavHighlighta = new TweenMax.from(("#hl"+i), 0.5, {
            height: 0
        });
        new ScrollMagic.Scene({
            triggerElement: ("#page" + (i+1)),
            duration: i === 0 ? '50%' : '100%',
            triggerHook: i === 0 ? 0.5 : 1,
            offset: 0//px (to allow initial animations to turn off)
        })
            .setTween(twnNavHighlighta)
            .addTo(scrollController)
            .on("enter leave", function (e) {
                $("#hl" + i).css(e.type === "enter" ? "top" : "bottom", "0")
                    .css(e.type === "leave" ? "top" : "bottom", "auto");
            });

        let twnNavHighlightb = new TweenMax.to(("#hl"+i), 0.5, {
            height: 0
        });
        new ScrollMagic.Scene({
            triggerElement: ("#page" + (i+1)),
            duration: '100%',
            triggerHook: 0,
            offset: 0//px (to allow initial animations to turn off)
        })
            .setTween(twnNavHighlightb)
            .addTo(scrollController);
    }
});

//Scroll Linking:
$(document).ready(function() {
   $('.nav__link').localScroll({duration:1200});
});