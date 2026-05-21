/* *******************************************************
 * filename : common.js
 * description : 전체적으로 사용되는 JS
 * Update : 2022-08-04
******************************************************** */
var laptopWidth = 1366;
var tabletWidth = 1280; // 헤더가 변경되는 시점
var mobileWidth = 800;
startOffset = isMobile() ? "100%" : "90%";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.refresh();

//페이지 로드될때 새로고침
window.onpageshow = function(event){
	if(event.persisted){
		//console.log("기존 페이지");
		window.location.reload(true);
	}else{
		//console.log("새로열림");
	}
}
// default
checkOsBrowser();	
mouseCheck();
translateSkipNav();
triggerScrollObject();
if ( detectBrowser() === "ie") {
	popupUpdateBrowser();
	convertToEdge();
}

// Header
focus_change_favicon();
topFixedHeader();
// 마우스 오버 효과
hoverBtnAni();

// Footer
setTopButton();
parallax_footer();

move_footer_consulting_btn();

// add
Splitting();
setSplitting();
initMagneticButtons();
hoverStoryAni();
trigger_menu_sitemap();
//smoothScroll
SmoothScroll({ 
	animationTime    : 800, // [ms]
	stepSize         : 100, // [px]
	accelerationDelta : 50,  // 50
	accelerationMax   : 3,   // 3
	touchpadSupport   : false, 
});

$(document).ready(function  () {
	toAnchorParameter("anchor");	/* 주소~?anchor=content  */
});

$(window).on("resize",function  () {
	checkOsBrowser();
});

/* ************************
* Func : 브라우저 체크 및 기기체크
* isMobile() 필요
************************ */
function checkOsBrowser () {
	if ( isMobile() ) {
		$("html").removeClass("is-pc").addClass("is-mobile").addClass(detectOS()+"-os");
	}else {
		$("html").removeClass("is-mobile").addClass("is-pc").addClass(detectBrowser()+"-browser");
	}
}

/* ************************
* Func : 스킵네비게이션 영문번역
************************ */
function translateSkipNav () {
	if ( $("html").attr("lang") != "ko" ) {
		$(".cm-accessibility a").text("Skip to content");
	}
}

/* ************************
* Func : 웹접근성 키보드이용시
************************ */
function mouseCheck () {
	if ( !isMobile() ) { 
		$("body").mousemove(function(event) { 
			$(this).addClass("mouse");
		});
		$("body").on("keydown touchstart",function(event) { 
			$(this).removeClass("mouse");
		});
	}
}

/* ************************
* Func : 스크롤시 Trigger Class
* Waypoint.js, isMobile () 필요
************************ */
function triggerScrollObject () {
  $("[data-scroll]").each(function() {
    var $scrollElem = $(this);

    var scrollElemOffset = $scrollElem.data("scroll-offset")
      ? $scrollElem.data("scroll-offset")
      : startOffset;

    var isOnce = $scrollElem.data("scroll-once");
    isOnce = (isOnce === true || isOnce === 1 || isOnce === "1" || isOnce === "true");

    $scrollElem.waypoint(function(direction) {
      if (direction === "down") {
        $scrollElem.addClass("animated");

        if (isOnce) {
          $scrollElem.waypoint("destroy");
        }
      } else if (direction === "up") {
        if (!isOnce) {
          $scrollElem.removeClass("animated");
        }
      }
    }, {
      triggerOnce: false,
      offset: scrollElemOffset
    });
  });
}

/* ************************
* Func : 드롭메뉴 공통
* getWindowWidth () 필요
************************ */
$(".cm-drop-menu-box-JS").each(function  () {
	var $dropBox = $(this);
	var $dropOpenBtn = $(this).find(".cm-drop-open-btn-JS");
	var $dropList = $(this).find(".cm-drop-list-JS");
	var eventState = $dropBox.data("drop-event");
	
	if ( eventState === "click" ) {
		$dropOpenBtn.click(function  () {
			$dropList.slideToggle(500);
			$dropBox.toggleClass("open");
			$dropBox.on("mouseleave", function  () {
				dropClose ();
			});
			return false;
		});
		$("body").click(function  () {
			dropClose();
		});
	}else if ( eventState === "hover" ) {
		$dropBox.hover(function  () {
			$dropList.slideDown(500);
			$dropBox.addClass("open");
		},function  () {
			dropClose ();
		});
	}
	function dropClose () {
		if ( $dropBox.data("drop-width") ) {
			if ( getWindowWidth () < $dropBox.data("drop-width")+1 ) {
				$dropList.slideUp(500);
				$dropBox.removeClass("open");
			}
		}else {
			$dropList.slideUp(500);
			$dropBox.removeClass("open");
		}
	}
	$(window).resize(function  () {
		if ( getWindowWidth () > $dropBox.data("drop-width") ) {
			$dropList.removeAttr("style");
		}else {
			$dropList.hide();
		}
	});
});

/* ************************
* Func : 탭 메뉴 공통 사용
* getWindowWidth () 필요
************************ */
$(".cm-tab-container-JS").each(function  () {
	var $cmTabList = $(this).find(".cm-tab-list-JS");
	var $cmTabListli = $cmTabList.find("li");
	var $cmConWrapper = $(this).children(".cm-tab-content-wrapper-JS");
	var $cmContent = $cmConWrapper.children();
	
	
	// 탭 영역 숨기고 selected 클래스가 있는 영역만 보이게
	var $selectCon = $cmTabList.find("li.selected").find("a").attr("href");
	var selectTxt = $cmTabList.find("li.selected").find("em").text();
	$cmContent.hide();
	$($selectCon).show();

	$cmTabListli.children("a").click(function  () {
		if ( !$(this).parent().hasClass("selected")) {
			var visibleCon = $(this).attr("href");
			$cmTabListli.removeClass("selected");
			$(this).parent("li").addClass("selected");
			$cmContent.hide();
			$(visibleCon).fadeIn();
		}
		return false;
	});

	// 모바일 버튼이 있을때 추가
	var $cmTabMobileBtn = $(this).find(".cm-tab-select-btn-JS");
	if ($.exists($cmTabMobileBtn)) {
		$cmTabMobileBtn.find("span").text(selectTxt);
		// Mobile Btn Click
		$cmTabMobileBtn.click(function  () {
			$(this).toggleClass("open").siblings().slideToggle();
			return false;
		});

		// Mobile List Click
		$cmTabListli.children("a").click(function  () {
			$cmTabMobileBtn.find("span").text($(this).find("em").text());
			tabListClose();
		});
		$("body").click(function  () {
			tabListClose();
		});
		function tabListClose () {
			if ( getWindowWidth () < 801 ) {
				$cmTabMobileBtn.removeClass("open").siblings().slideUp();
			}
		}
		$(window).resize(function  () {
			if ( getWindowWidth () > 800 ) {
				$cmTabMobileBtn.siblings().removeAttr("style");
			}else {
				$cmTabMobileBtn.siblings().hide()//.css("display","none");
			}
		});
	}
});

/* ************************
* Func : 상단 :: 사이트맵 toggle
************************ */
/* -------- 대메뉴복사 후 사이트맵 삽입 -------- */
$(".sitemap-wrapper-style").append("<ul></ul>");

for(var i=0; i < gnbLength; i++){
	var gnbText = $gnbItem.eq(i).children("a").text();
	var gnb2depList = $gnbItem.eq(i).find(".gnb-2dep > ul").html() ? $gnbItem.eq(i).find(".gnb-2dep > ul").html() :	'';
	$(".sitemap-wrapper-style > ul").append('<li><span class="num">0'+(i+1)+'</span><h2>'+gnbText+'</h2><ul class="sitemap-2dep">'+gnb2depList+'</ul></li>');
}

/* -------- 사이트맵 스타일 03, 04, 05 -------- */
var $openSitemapBtn = $(".cm-sitemap-open-btn");
var $closeSitemapBtn = $(".cm-sitemap-close-btn");
var $cmSitemapWrapper = $(".cm-sitemap-wrapper");
var sitemapOpenState = false;
// Split
if ($.exists('#siteMapCon02') || $.exists('#siteMapCon03')) {
	var sitemap_item_tit = document.querySelectorAll(".sitemap-wrapper-style > ul > li > h2");
	var sitemap_item = document.querySelectorAll(".sitemap-wrapper-style > ul > li span");
	Splitting({ target: sitemap_item_tit });
	Splitting({ target: sitemap_item });
}

// Sitemap OPEN
$openSitemapBtn.click(function  () {
	if ( !sitemapOpenState ) {
		htmlScrollControl (true);
		$cmSitemapWrapper.addClass("open");
		sitemapOpenState = true;
	}
	return false;
});
// Sitemap CLOSE
$closeSitemapBtn.click(function  () {
	close_cm_sitemap();
});
$(document).keydown(function(event) {
	if ( event.keyCode == 27 || event.which == 27 ) {
		close_cm_sitemap();
	}
});

function close_cm_sitemap () {
	if ( sitemapOpenState ) {
		if ( $cmSitemapWrapper.is("#siteMapCon02") ) { // Sitemap 02 Close
			$cmSitemapWrapper.removeClass("open");
			setTimeout(function  () {
				htmlScrollControl (false);
				sitemapOpenState = false;
			},1000);
		}else {
			gsap.to($cmSitemapWrapper, 0.3, {opacity:0, ease: Sine.easeOut, onComplete : function  () {
				$cmSitemapWrapper.removeClass("open");
				$cmSitemapWrapper.removeAttr("style");
				htmlScrollControl (false);
				sitemapOpenState = false;
			}})
		}
	}
}

/* ************************
* Func : 단어 Splitting Plugin 
* Splitting.js 필요
************************ */	
function setSplitting () {
	// Splitting Char Set Delay
	var $splittingTxt = $(".cm-word-split-JS");
	$($splittingTxt).each(function  () {
		splittingTextDelay($(this),$(this).data("speed"),$(this).data("speed-delay"));
	});

	// Splitting word 번역기능 비활성화
	$(".splitting .char").attr("translate","no");
}

/* ************************
* Func : 상단 :: 모바일버전에서 헤더 FIXED
* getWindowWidth (), objectFixed() 필요
************************ */	
function topFixedHeader () {
	checkWidth = getWindowWidth();
	$(window).on("scroll", function  () {
		toggleFixedClass();
	});
	$(window).on("resize", function  () {
		checkWidth = getWindowWidth();
		toggleFixedClass();
	});
}
function toggleFixedClass () {
	objectFixed($("#header"), 0, "top-fixed");
}

/* ************************
* Func : Favicon.ico Change
************************ */
function focus_change_favicon () {
	var faviconObj = document.getElementById("favicon");
	var faviconOnHref = faviconObj.href;
	var faviconOffHref = faviconObj.dataset.offHref;
	window.onfocus = () => faviconObj.href = faviconOnHref;
	window.onblur = () => faviconObj.href = faviconOffHref;
}

/* ************************
* FOOTER
************************ */
// Top Button
function setTopButton () {
	$(".to-top-btn").each(function  () {
		// top버튼 나오게 (필요한 경우에만 넣으세요)
		if ( $(this).length > 0 ) {
			$(window).scroll(function  () {
				objectFixed($(".to-top-btn"), 0, "bottom-fixed");
			});
		}
		// top버튼 클릭
		$(this).on("click",function  () {
			if ($.exists('#fullpage')) {
				$.fn.fullpage.moveTo(1);
			}else {
				$("html, body").animate({scrollTop:0}, 300 ,"easeInOutExpo");
			}
			return false;
		});
	});
}
// Move Parallax consulting btn
function move_footer_consulting_btn () {
	$("body").on('mousemove', function (e){
		var body_xPos = e.pageX / $(this).width() * 100 - 50;
		var body_yPos = e.pageY / $(this).height() * 100 - 50;
		
		TweenMax.to($(".to-footer-consulting-btn"), 2, {
			x: -body_xPos * .6,
			y: -body_yPos * .6,
			transformPerspective: 500,
			ease: Expo.easeOut
		});
	});
}

/* ************************
* Func : Custom Select 
************************ */
if ($.exists('.custom-select-box .custom-select')) {
	$(".custom-select-box .custom-select").each(function() {
		var classes = $(this).attr("class");
		var id = $(this).attr("id");
		var name = $(this).attr("name"); 
		var placeholder = $(this).attr("placeholder") ? $(this).attr("placeholder") : $(this).find("option:selected").text();
		var template = '<div class="' + classes + '">';
		template += '<span class="custom-select-trigger">' + placeholder + "</span>";
		template += '<ul class="custom-option-drop-list">';
		$(this).find("option").each(function() {
			var first_select = $(this).is(":selected") ? " selection" : "";
			template += '<li class="custom-option-item'+ first_select +'" data-value="' + $(this).attr("value") + '">' + $(this).html() + "</li>";
		});
		template += "</ul></div>";
		$(this).wrap('<div class="custom-select-wrapper"></div>');
		$(this).hide();
		$(this).after(template);
	});
	$(".custom-option:first-of-type").hover(function() {
		$(this).parents(".custom-option-drop-list").addClass("option-hover");
	}, function() {
		$(this).parents(".custom-option-drop-list").removeClass("option-hover");
	});
	$(".custom-select-trigger").on("click", function(event) {
		$("html").one("click", function() {
			$(".custom-select").removeClass("opened");
			$(".custom-option-drop-list").slideUp();
		});
		$(this).parents(".custom-select").toggleClass("opened");
		$(this).siblings(".custom-option-drop-list").slideToggle();
		event.stopPropagation();
	});
	$(".custom-option-item").on("click", function() {
		$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
		$(this).parents(".custom-option-drop-list").find(".custom-option-item").removeClass("selection");
		$(this).addClass("selection");
		$(this).parents(".custom-select").removeClass("opened");
		$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
		// 이메일 선택할때 넣어주세요.
		/* if ($(this).data("value") != "a" && $(this).data("value") != "b") {
			$(".email2").attr("value", $(this).text()).prop("readonly", true);
		} else {
			$(".email2").attr("value", "").prop("readonly", false).focus();
		} */
	});
}


/* ************************
* Func : Magnetic Button Ani 
************************ */
function initMagneticButtons() {
  // Magnetic Buttons
	var magnets = document.querySelectorAll('.cm-magnetic-btn')
	var strength = 30

	magnets.forEach( (magnet) => {
		magnet.addEventListener('mousemove', moveMagnet );
		magnet.addEventListener('mouseout', function(event) {
			TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
		});
	});
	function moveMagnet(event) {
	  var magnetButton = event.currentTarget
	  var bounding = magnetButton.getBoundingClientRect()

	  TweenMax.to( magnetButton, 1, {
		x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
		y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
		ease: Power4.easeOut
	  })

	  //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
	}
}

/* ************************
* Func : Story Gallery Hover 
************************ */
function hoverStoryAni() {
	if ($.exists('.story-item')) {
		$('.story-item-inner').on('mouseenter', function(e){
			x = e.pageX - $(this).offset().left,
			y = e.pageY - $(this).offset().top;
			$(this).find('.cm-fill').css({top:y, left:x})
		});
		$('.story-item-inner').on('mouseout', function(e){
			x = e.pageX - $(this).offset().left,
			y = e.pageY - $(this).offset().top;
			$(this).find('.cm-fill').css({top:y, left:x})
		});
	}
}

function parallax_footer () {
	gsap.fromTo("#footerInner",{y:-400}, {y:0, duration: 1000, ease: Power0.easeNone, 
		scrollTrigger: {
			scrub: true
		} 
	})
	/*gsap.to(".footer-round-cover",{height:0, duration: 1500, ease: Power0.easeNone, 
		scrollTrigger: {
			trigger: "#footer",
			scrub: true,
			onLeave : function  () {
				gsap.to(".footer-cover",{autoAlpha:0})
			},
			onEnterBack : function  () {
				gsap.to(".footer-cover",{autoAlpha:1})
			},
			start: "-20% center",
			end: "80% bottom",
			//markers: true,
		} 
	})*/
}

/* ************************
* Func : Trigger Menu & SITEMAP 
************************ */
function trigger_menu_sitemap () {
	var menuOpenState = false;
	var $menuTriggerBtn = $(".menu-open-btn");
	//var $menuCloseBtn = $(".menu-close-btn");

	// menu OPEN
	$menuTriggerBtn.click(function  () {
		if ( !menuOpenState ) {
			htmlScrollControl (true);
			$("#header").addClass("sitemap-open");
			$menuTriggerBtn.addClass("open");
			$("#gnbMenuContent").addClass("open");
			menuOpenState = true;
		}else{
			close_cm_menu();
		}
		return false;
	});

	$(document).keydown(function(event) {
		if ( event.keyCode == 27 || event.which == 27 ) {
			close_cm_menu();
		}
	});

	function close_cm_menu () {
		if ( menuOpenState ) {
			$("#header").removeClass("sitemap-open");
			$menuTriggerBtn.removeClass("open");
			$("#gnbMenuContent").removeClass("open");
			htmlScrollControl (false);
			menuOpenState = false;
		}
	}
}

/* *********************** 
	* 하얀 배경 체크 
************************ */
var $mainVisualCon = $("#mainVisual");
var $whiteBgCon = $(".cm-bg-white-content");
var $FooterCon = $("#footer");
var $FooterCoverCon = $(".footer-round-cover");
var $footerTopBtn = $(".to-top-btn");

$(window).on('load', function  () {
	changeStartOffset();
});
$(window).on('resize', function  () {
	changeStartOffset();
});

var isVisible = false;
$(window).on('scroll', function() {
	if (!isVisible) {
		changeStartOffset();
		isVisible=true;
	}
});

// 지점 체크
function changeStartOffset () {
	var changeStartPoint =  $whiteBgCon.offset().top - $whiteBgCon.height();	
	if ($.exists('.sub-wrap')) {
		$footerTopBtn.addClass("black-ver");
	}
	return changeStartPoint;
}

// 스크롤 event 
window.addEventListener('scroll', toFit(function  () {
	var footerStartPoint = $(document).height() - $(window).height() - $FooterCon.height() +  $FooterCoverCon.height();
	//console.log(getScrollTop(), changeStartOffset());
	if( getScrollTop() > changeStartOffset() + 150 ){
		$footerTopBtn.addClass("black-ver");
	}else {
		$footerTopBtn.removeClass('black-ver');
	}
	if ( getScrollTop() > footerStartPoint ) {
		$footerTopBtn.removeClass('black-ver');
	} 

	}, {
}),{ passive: true });


/* *********************** 
	* 마우스 오버 효과
************************ */
function hoverBtnAni() {
	$('.cm-fill-ani-JS').on('mouseenter', function(e){
		x = e.pageX - $(this).offset().left,
		y = e.pageY - $(this).offset().top;
		$(this).find('.cm-fill').css({top:y, left:x})
	});
	$('.cm-fill-ani-JS').on('mouseout', function(e){
		x = e.pageX - $(this).offset().left,
		y = e.pageY - $(this).offset().top;
		$(this).find('.cm-fill').css({top:y, left:x})
	});
}