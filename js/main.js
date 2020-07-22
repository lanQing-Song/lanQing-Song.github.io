"use strict";$(function(){var a=void 0!==GLOBAL_CONFIG.Snackbar,o=$("#nav"),s=$("#rightside"),t=$("body"),i=$("#blog_name").width(),n=$(".menus").width(),c=$("#sidebar").width();function e(t){var e;1===t?e=i+n>o.width()-c-20:2===t&&(e=i+n>o.width()-20),e?r():(o.find(".toggle-menu").removeClass("is-visible-inline"),o.find(".menus_items").removeClass("is-invisible"),o.find("#search_button span").removeClass("is-invisible"))}function r(){o.find(".toggle-menu").addClass("is-visible-inline"),o.find(".menus_items").addClass("is-invisible"),o.find("#search_button span").addClass("is-invisible")}function d(){window.innerWidth<768?r():e(2)}function l(){$("#sidebar").removeClass("tocOpenPc"),$(".menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#sidebar").animate({left:"-300px"},400),$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"}),setTimeout(function(){e(2)},400)}function h(){$("#sidebar").addClass("tocOpenPc"),$(".menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400),$("#sidebar").animate({left:0},400),$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"});var t=window.setInterval(function(){o.hasClass("fixed")?e(1):e(2)},100);setTimeout(function(){clearInterval(t)},400)}d(),$("#nav").css({opacity:"1",animation:"headerNoOpacity 1s"}),$(window).on("resize",function(){$("#sidebar").hasClass("tocOpenPc")&&o.hasClass("fixed")?e(1):d()}),GLOBAL_CONFIG_SITE.isPost&&1024<window.innerWidth&&$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){h()},400),$("#toggle-sidebar").on("click",function(){var t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on"),(t?l:h)()});var u=$(".toggle-menu"),m=$("#mobile-sidebar-menus"),f=$("#mobile-toc-button"),g=$("#menu_mask");function p(t){if(sidebarPaddingR(),$("body").css("overflow","hidden"),g.fadeIn(),"menu"===t){u.removeClass("close").addClass("open"),m.css("transform","translate3d(-100%,0,0)");for(var e=m.children(),i=0;i<=e.length;i++){var a=i/5+.2;e.eq(i).css("animation","sidebarItem "+a+"s")}}"toc"===t&&(f.removeClass("close").addClass("open"),$("#sidebar").addClass("tocOpenMobile"),$("#sidebar").css({transform:"translate3d(-100%,0,0)",left:""}))}function v(t){$("body").css({overflow:"","padding-right":""}),g.fadeOut(),"menu"===t&&(u.removeClass("open").addClass("close"),m.css("transform",""),$("#mobile-sidebar-menus > div,#mobile-sidebar-menus > hr").css("animation","")),"toc"===t&&(f.removeClass("open").addClass("close"),$("#sidebar").removeClass("tocOpenMobile"),$("#sidebar").css({transform:""}))}u.on("click",function(){p("menu")}),f.on("click",function(){p("toc")}),g.on("click touchstart",function(t){u.hasClass("open")&&v("menu"),f.hasClass("open")&&v("toc")}),$(window).on("resize",function(t){u.is(":visible")||u.hasClass("open")&&v("menu")}),window.matchMedia("(max-width: 1024px)").addListener(function(t){t.matches?$("#sidebar").hasClass("tocOpenPc")&&l():($("#toggle-sidebar").hasClass("on")&&h(),f.hasClass("open")&&v("toc"))}),$("#scroll_down").on("click",function(){scrollToDest("#content-inner")}),$("#bookmark-it").on("click",function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;var t;a?(t=GLOBAL_CONFIG.Snackbar.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.Snackbar.bookmark.message_next+".",snackbarShow(t)):alert(GLOBAL_CONFIG.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".")}});var b,C,w,y,_,O=$("figure.highlight");O.length&&(b=GLOBAL_CONFIG.highlightCopy,C=GLOBAL_CONFIG.highlightLang,w=GLOBAL_CONFIG_SITE.isHighlightShrink,(b||C||void 0!==w)&&O.prepend('<div class="highlight-tools"></div>'),y=$(".highlight-tools"),!0===w?y.append('<i class="fas fa-angle-down code-expand code-closed"></i>'):!1===w&&y.append('<i class="fas fa-angle-down code-expand"></i>'),$(document).on("click",".highlight-tools >.code-expand",function(){var t=$(this).parent().nextAll();$(this).hasClass("code-closed")?(t.css("display","block"),$(this).removeClass("code-closed")):(t.css("display","none"),$(this).addClass("code-closed"))}),C&&O.each(function(){"plain"===(_=$(this).attr("class").split(" ")[1])&&(_="Code"),$(this).find(".highlight-tools").append('<div class="code-lang">'+_+"</div>")}),b&&(y.append('<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),$(document).on("click",".highlight-tools>.copy-button",function(){var t=$(this).parents("figure.highlight");t.addClass("copy-true");var e=window.getSelection(),i=document.createRange();i.selectNodeContents(t.find("table .code pre")[0]),e.removeAllRanges(),e.addRange(i);e.toString();!function(e){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),a?snackbarShow(GLOBAL_CONFIG.copy.success):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(e).prev(".copy-notice").animate({opacity:0},650)},400)})}catch(t){if(!a)return $(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1},650,function(){setTimeout(function(){$(e).prev(".copy-notice").animate({opacity:0},650)},400)});snackbarShow(GLOBAL_CONFIG.copy.success)}else a?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(this),e.removeAllRanges(),t.removeClass("copy-true")}))),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each(function(t,e){var i,a=$(e);a.attr("alt")&&(i=$('<div class="img-alt is-center">'+a.attr("alt")+"</div>"),a.after(i))});var L,k,G=$(".justified-gallery"),I=!1;G.length&&(I=!0,(L=G.find("img")).unwrap(),L.length&&L.each(function(t,e){$(e).attr("data-src")&&$(e).attr("src",$(e).attr("data-src")),$(e).wrap("<div></div>")}),$("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.justifiedGallery.css,'">')),loadScript("".concat(GLOBAL_CONFIG.justifiedGallery.js),function(){k(G)}),k=function(t){t.each(function(t,e){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})});var x,A=GLOBAL_CONFIG.medium_zoom;GLOBAL_CONFIG.fancybox?($("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(t,e){var i=$(e).attr("data-src")?$(e).attr("data-src"):$(e).attr("src");$(e).wrap('<a href="'.concat(i,'" data-fancybox="group" data-caption="').concat($(e).attr("alt"),'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]})):A&&(x=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";x.update({background:e})});var B,F,N,S,T=0,D=!0,j="function"==typeof chatBtnHide,z="function"==typeof chatBtnShow;$(window).scroll(throttle(function(t){var e,i,a=$(this).scrollTop(),n=(i=T<(e=a),T=e,i);56<a?(n?(o.hasClass("visible")&&o.removeClass("visible"),z&&!0===D&&(chatBtnHide(),D=!1)):(o.hasClass("visible")||o.addClass("visible"),j&&!1===D&&(window.chatBtnShow(),D=!0)),o.addClass("fixed"),"0"===s.css("opacity")&&s.css({opacity:"1",transform:"translateX(-38px)"})):(0===a&&o.removeClass("fixed").removeClass("visible"),s.css({opacity:"",transform:""}))},200)),$("#go-up").on("click",function(){scrollToDest("body")}),GLOBAL_CONFIG_SITE.isPost&&GLOBAL_CONFIG_SITE.isSidebar&&($(".toc-child").hide(),$(window).scroll(throttle(function(t){var e=$(this).scrollTop();B(e),N(e),S(e)},100)),$(".toc-link").on("click",function(t){window.innerWidth<=1024?v("toc"):(t.preventDefault(),scrollToDest($(this).attr("href")))}),B=function(t){var e=$("#article-container").height(),i=$(window).height(),a=t/(i<e?e-i:$(document).height()-i),n=Math.round(100*a),o=100<n?100:n<=0?0:n;$(".progress-num").text(o),$(".sidebar-toc__progress-bar").animate({width:o+"%"},100)},F=GLOBAL_CONFIG.isanchor,N=function(e){if(0===$(".toc-link").length)return!1;var t=$("#article-container").find("h1,h2,h3,h4,h5,h6"),i="";t.each(function(){var t=$(this);e>t.offset().top-25&&(i="#"+$(this).attr("id"))}),""===i&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var a,n,o,s,c,r=$(".toc-link.active");i&&r.attr("href")!==i&&(F&&(c=i,window.history.replaceState&&c!==window.location.hash&&window.history.replaceState(void 0,void 0,c)),$(".toc-link").removeClass("active"),(a=$('.toc-link[href="'+i+'"]')).addClass("active"),o=0<(n=a.parents(".toc-child")).length?n.last():a,(s=o.closest(".toc-item").find(".toc-child")).is(":visible")||s.fadeIn(400),o.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide())},S=function(t){var e,i;$(".toc-link").hasClass("active")&&(e=$(".active").offset().top,i=$("#sidebar .sidebar-toc__content").scrollTop(),e>t+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(i+100),e<t+100&&$("#sidebar .sidebar-toc__content").scrollTop(i-100))}),$("#readmode").click(function(){$("body").toggleClass("read-mode")}),$("#font_plus").click(function(){t.css("font-size",parseFloat(t.css("font-size"))+1)}),$("#font_minus").click(function(){t.css("font-size",parseFloat(t.css("font-size"))-1)}),$("#mobile-sidebar-menus .menus-expand").on("click",function(){$(this).hasClass("menus-closed")?($(this).parents(".menus_item").find(".menus_item_child").slideDown(),$(this).removeClass("menus-closed")):($(this).parents(".menus_item").find(".menus_item_child").slideUp(),$(this).addClass("menus-closed"))}),$(window).on("touchmove",function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")}),$("#rightside_config").on("click",function(){$("#rightside-config-hide").hasClass("rightside-in")?$("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out"):$("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")});var P,E,R,M=GLOBAL_CONFIG.copyright;void 0!==M&&(document.body.oncopy=function(t){t.preventDefault();var e=window.getSelection(0).toString(),i=45<e.length?e+"\n\n\n"+M.languages.author+"\n"+M.languages.link+window.location.href+"\n"+M.languages.source+"\n"+M.languages.info:e;return t.clipboardData?t.clipboardData.setData("text",i):window.clipboardData.setData("text",i)}),$("#darkmode").click(function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),Cookies.set("theme","dark",2),a&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),Cookies.set("theme","light",2),a&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme()}),GLOBAL_CONFIG.runtime&&(P=$("#webinfo-runtime-count"),E=P.attr("publish_date"),(R=function(){var t=new Date(E),e=(new Date).getTime()-t.getTime(),i=Math.floor(e/864e5);P.text(i+" "+GLOBAL_CONFIG.runtime_unit)})(),clearInterval(void 0),setInterval(R,1e4)),$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')}),GLOBAL_CONFIG.baiduPush&&function(){var t=document.createElement("script"),e=window.location.protocol.split(":")[0];t.src="https"===e?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}();var q=$(".hide-button");q.length&&q.on("click",function(t){var e=$(this),i=$(this).next(".hide-content");e.toggleClass("open"),i.toggle(),e.hasClass("open")&&I&&0<i.find(".justified-gallery").length&&k(i.find(".justified-gallery"))}),$("#article-container .tabs").find(".tab button").on("click",function(t){var e,i,a,n=$(this),o=n.parent();o.hasClass("active")||(e=n.parents(".nav-tabs").next(),o.siblings(".active").removeClass("active"),o.addClass("active"),i=n.attr("data-href"),e.find("> .tab-item-content").removeClass("active"),e.find("> ".concat(i)).addClass("active"),a=e.find(i).find(".justified-gallery"),I&&0<a.length&&k(a))}),$(".card-category-list-item.parent a").on("click",function(t){if($(event.target).hasClass("card-category-list-icon")){var e=$(this);return e.find(".card-category-list-icon").toggleClass("expand"),e.parent().next().toggle(),!1}})});