require(["jquery"],function($){$(document).ready(function(){$("div.mobile-search-toggle").on("click",function(){$(".block-search.mobile-search").hasClass("active")?$(".block-search.mobile-search").removeClass("active"):($(".block-search.mobile-search").addClass("active"),$(".block-search.mobile-search").find("input").focus())}),$(window).width()<=767&&($("li.dropdown > a").on("click",function(e){e.preventDefault(),$(this).closest("li").hasClass("open")?$(this).closest("li").removeClass("open"):$(this).closest("li").addClass("open")}),$("li.dropdown h2").on("click",function(e){e.preventDefault(),$(this).hasClass("active")?($(this).removeClass("active"),$(this).next("ul").removeClass("active")):($(this).addClass("active"),$(this).next("ul").addClass("active"))}),$(".mobile-switchers").html(""),$(".header-left-links > ul").clone().appendTo(".mobile-switchers")),$(window).resize(function(){$(window).width()>767&&$(".mobile-switchers").html("")}),$(".menu > ul > li:has( > ul)").addClass("menu-dropdown-icon"),$(".menu > ul > li > ul:not(:has(ul))").addClass("normal-sub"),$(".menu > ul > li").hover(function(e){let dropdownElement=$(e.currentTarget).children("ul"),delayTime=1e3*dropdownElement.data("delay-time");if($(window).width()>767){e.preventDefault();var timer=$(this).data("hover");timer||(timer=setTimeout(function(){dropdownElement.addClass("hovered"),$(this).data("hover",null)},delayTime),$(this).data("hover",timer))}},function(e){let dropdownElement=$(e.currentTarget).children("ul");if($(window).width()>767){e.preventDefault();var timer=$(this).data("hover");timer?(clearTimeout(timer),dropdownElement.removeClass("hovered"),$(this).data("hover",null)):dropdownElement.removeClass("hovered")}}),$(".menu-vertical-items").hover(function(e){$(".menu-vertical-items").removeClass("active"),$(".vertical-subcate-content").removeClass("active"),$(this).addClass("active"),$("#"+$(this).data("toggle")).addClass("active")}),$(".menu-mobile").click(function(e){$(".menu > ul").toggleClass("show-on-mobile"),e.preventDefault()}),$(".nav-sections-item-content li.active").each(function(){$(this).parents("li").addClass("has-active"),$(this).addClass("has-active")}),$(window).width()>=768&&($(".has-active").parents(".vertical-subcate-content").addClass("active"),$('.vertical-menu-left li[data-toggle="'+$(".has-active").parents(".vertical-subcate-content").attr("id")+'"]').addClass("active"),$(".menu-vertical-items.active").length>=1&&$(".menu-vertical-items.active").each(function(){$("#"+$(this).data("toggle")).addClass("active")}),$(".menu-vertical-wrapper").find(".active").length<=0&&$(".menu-vertical-wrapper").each(function(){$(this).find(".menu-vertical-items:first-child").addClass("active"),$("#"+$(this).find(".menu-vertical-items:first-child").data("toggle")).addClass("active")})),$(window).width()<=767&&$(".col-menu-3.vertical-menu-left .menu-vertical-items").each(function(){var childDivId=$(this).data("toggle");$(this).append($("#"+childDivId).html()),$(".menu-vertical-items .menu-vertical-child").hide()})})});