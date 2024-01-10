$(document).ready(function() {
    "use strict";
    $(".fancybox").fancybox();
    $(".fancybox-effects-d").fancybox({
        padding: 0,
        openEffect: "elastic",
        openSpeed: 150,
        closeEffect: "elastic",
        closeSpeed: 150,
        closeClick: true,
        arrows: true,
        showArrows: true,
        helpers: {
            overlay: null
        }
    })
});
$(function() {
    cbpFixedScrollLayout.init()
});
$(window).load(function() {
    "use strict";
    $(".modal").delay(5e3).fadeOut(1e3)
});
$("nav > a").click(function() {
    $("nav > a").removeClass("cbp-fbcurrent");
    $(this).addClass("cbp-fbcurrent")
});
$(".tablet-close").click(function(e) {
    $(".menu").toggleClass("no-collapse").toggleClass("collapse");
    e.preventDefault()
});
(function(e) {
    "use strict";
    e(window).load(function() {
        e("#content_1").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            theme: "dark"
        });
        e(".inner-noslit").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            theme: "dark"
        });
        e(".models-scroll").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            theme: "dark"
        });
        e("a[rel='load-content']").click(function(t) {
            t.preventDefault();
            var n = e(this),
                r = n.attr("href");
            n.addClass("loading");
            e.get(r, function(t) {
                n.removeClass("loading");
                e("#content_1 .mCSB_container").html(t);
                e("#content_1").mCustomScrollbar("update");
                e("#content_1").mCustomScrollbar("scrollTo", "top", {
                    scrollInertia: 200
                })
            })
        });
        e("a[rel='append-content']").click(function(t) {
            t.preventDefault();
            var n = e(this),
                r = n.attr("href");
            n.addClass("loading");
            e.get(r, function(t) {
                n.removeClass("loading");
                e("#content_1 .mCSB_container").append(t);
                e("#content_1").mCustomScrollbar("update");
                e("#content_1").mCustomScrollbar("scrollTo", "h2:last", {
                    scrollInertia: 2500,
                    scrollEasing: "easeInOutQuad"
                })
            })
        })
    })
})(jQuery)