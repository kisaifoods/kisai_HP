"use strict";$(".openbtn").click((function(){$(this).toggleClass("active"),$("#header").toggleClass("active"),$("#g_nav").toggleClass("active"),$("#g_nav").fadeToggle(300)})),$("#g_nav a").click((function(){$(".openbtn").removeClass("active"),$("#header").removeClass("active"),$("#g_nav").removeClass("active"),$("#g_nav").hide()}));var animate_init=function(){$(".iv").on("inview",(function(i,a){if(a){var e=$(this).data("delay")?$(this).data("delay"):0;$(this).css("visibility","visible"),e>0&&$(this).css("animation-delay",e+"s"),$(this).addClass("animated "+$(this).data("animate"))}else $(this).removeClass("animated "+$(this).data("animate")),$(this).css("visibility","hidden"),$(this).dequeue()})),$(".ivo").on("inview",(function(i,a){if(a){var e=$(this).data("delay")?$(this).data("delay"):0;$(this).css("visibility","visible"),e>0&&$(this).css("animation-delay",e+"s"),$(this).addClass("animated "+$(this).data("animate")),$(this).off("inview")}}))};$(document).ready((function(){animate_init()})),$((function(){$(".slider").slick({infinite:!0,arrows:!0,autoplay:!0,autoplaySpeed:4e3,speed:1200,centerMode:!0,centerPadding:"12%",slidesToShow:1,slidesToScroll:1})}));