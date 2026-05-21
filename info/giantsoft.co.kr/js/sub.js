/* *******************************************************
 * filename : sub.js
 * description : 서브컨텐츠에만 사용되는 JS
 * date : 2022-09-27
******************************************************** */


/* ****************** 서브 공통 ********************** */
ani_top_tit();
if ($.exists(".bg-tit")) {
	parallax_top_bg_tit();
}
if ($.exists(".intro-content-top")) {
	trigger_history();
	trigger_orgainzation();
}
if ($.exists(".recruit-page")) {
	trigger_recruit();
}
if ($.exists(".sub-inquiry-box")) {
  const $box = $(".sub-inquiry-box");
  
  $box.addClass("hover-disabled");
  setTimeout(() => $box.addClass("active-start"), 100);
  setTimeout(() => $box.removeClass("hover-disabled"), 3000);
}

// 포폴 뷰페이지 비주얼 높이값 설정
if ($.exists('.portfolio-view-visual')) {
	pfVisualHeight();
	$(window).on('resize', pfVisualHeight);

	function pfVisualHeight () {
		var pf_visual_height = getWindowHeight();
		$(".portfolio-view-visual").height(pf_visual_height);
	}
}

/* ************************
* Func : 서브 퀵메뉴 fixed
************************ */
if ($.exists(".right-quick-bar")) {
	var footerHeight = $("#footer").height();
	$(window).on("scroll", function  () {
		var footerOffsetTop = $("#footer").offset().top;
		var footerStartPoint = getScrollTop() - footerOffsetTop + getWindowHeight();
		if (getScrollTop () > footerOffsetTop - getWindowHeight ()) {
			$(".right-quick-bar").css({
				"bottom": `calc(${footerStartPoint}px + 6rem)`,
				"transition": "none",
			});
		}else {
			$(".right-quick-bar").css({
				"bottom": "6rem",
				"transition": "var(--custom-transiton2)",
			});
		}
	});
}

/* ****************** 서브 ********************** */
/*if ($.exists(".recruit-page")) {
	move_recruit_tit();
}*/
if ($.exists(".accordion-item")) {
	toggle_accordion_item();
}
if ($.exists("#consultPage")) {
	gsap.set($("#consultPage, #header"), {opacity:0})
	setTimeout(function  () {
		addClassName($(".consult-page-bg01, .consult-page-bg02"), "active");
		$("#consultPageCover").delay(1000).fadeOut(500);
		gsap.fromTo($("#consultPage, #header"),{opacity:0},{opacity:1, delay: 0.3, duration: 0.6})
	});
}

/* ************************
* Func : 서브 상단 타이틀 애니메이션
************************ */
function ani_top_tit () {
	$("#contentTop").addClass("start");
	gsap.fromTo($(".content-bg-tit"),{opacity:0},{opacity:1, duration:1.5})
	var textAnimation = new TimelineMax({paused: true, delay:0.2});
		textAnimation
			.staggerTo($(".content-tit .word > .char, .content-tit .whitespace"), 0.3, {y: '0%', opacity: 1}, 0.02)
			.staggerTo($(".content-top-bold-txt .word > .char, .content-top-bold-txt .whitespace"), 0.3, {y: '0%', opacity: 1}, 0.02, ">-=0.2")
			
	textAnimation.play();
}

/* ************************
* Func : 서브 상단 공통 텍스트 parallax
************************ */
function parallax_top_bg_tit () {
	gsap.fromTo(".content-bg-tit .bg-tit",{x:0}, {x:"-15vw", duration: 500, ease: Power0.easeNone, 
		scrollTrigger: {
			trigger: "#contentTop",
			scrub: true
		} 
	})
}

/* ************************
* Func : 모달팝업 플러그인 사용
* MagnificPopup.js 필요
************************ */
if ($.exists(".popup-gallery")) {
	magnificPopup($(".popup-gallery"));
}

/* ************************
* Func : 일정 가로사이즈 아래부터 scroll 사용하기
* mCustomScrollbar.js, customScrollX() 필요
************************ */
/* 서브 Scrollbar object  */
$(".custom-scrollbar-wrapper").each(function  () {
	$(this).prepend("<div class='custom-scrollbar-cover'><div class='scroll-cover-txt'><i class='xi-touch'></i></div></div>");
	var $scrollObject = $(this).find(".scroll-object-box");
	if ($.exists($scrollObject)) {
		customScrollX($scrollObject);
	}
	$(this).on("touchmove click",function  () {
		$(this).find(".custom-scrollbar-cover").fadeOut(200);
	});
});

/* ************************
* Func : 서브 상단 메뉴 FIXED
* getWindowWidth(), checkOffset(), toFit() 필요
************************ */
if ($.exists(".fixed-sub-menu")) {
	var $fixedSubMenu = $(".fixed-sub-menu");
	var topMenuStart =  checkOffset($fixedSubMenu);
	$(window).resize(function  () {
		if ( getWindowWidth() > tabletWidth ) {
			topMenuStart =  checkOffset($fixedSubMenu);
		}else {
			$fixedSubMenu.removeClass("top-fixed");
		}
	});
	window.addEventListener('scroll', toFit(function  () {
		if ( getWindowWidth() > tabletWidth ) {
			objectFixed($fixedSubMenu, topMenuStart, "top-fixed");
		}else {
			$fixedSubMenu.removeClass("top-fixed");
		}
	}, {
	}),{ passive: true })
}

/* ************************
	* Func : 컨텐츠 메뉴 FIXED 및 클릭시 해당영역 이동
	* getScrollTop(), getWindowWidth(), checkOffset(), toFit(), checkFixedHeight(), moveScrollTop() 필요
************************ */
let isTabClickMoving = false;
let $hoveredItem = null;
let $hoveredVtItem = null;

if ($.exists(".cm-fixed-tab-container-JS")) {
	var $fixedMoveTab = $(".cm-fixed-tab-list-JS");		// fixed되는 메뉴 클래스
	var $moveTabItem = $fixedMoveTab.find("li");
	var menuCount= $moveTabItem.length;
	var nav = [];
	
	$(window).on('load', function  () {
		checkStartOffset();
		nav = checkTopOffset();
	});
	$(window).on('resize', function  () {
		checkStartOffset();
		nav = checkTopOffset();
	}); 		
	
	// 탭이 붙기 시작하는 지점 체크
	function checkStartOffset () {
		if ($.exists('.history-tab-wrapper-style') ) {
			if(getWindowWidth() > 1280 ){
				var fixedStartPoint =  $(".history-tab-wrapper-style").offset().top - 30;
			}else{
				var fixedStartPoint =  $(".history-tab-wrapper-style").offset().top - $("#header").height() ;
			}
		}else if ($.exists('.left-fixed-style')) {
			var fixedStartPoint =  $(".cm-fixed-tab-container-JS").offset().top - 60;	
		} else {
			var fixedStartPoint =  $(".cm-fixed-tab-container-JS").offset().top - checkFixedHeight();	
		}
		
		return fixedStartPoint;
	}		

	// 해당되는 각각의 영역 상단값 측정
	function checkTopOffset () {
		var arr = [];
		for(var i=0;i < menuCount;i++){
			arr[i]=$($moveTabItem.eq(i).children("a").attr("href")).offset().top;
		}
		return arr;
	}
	
	// 스크롤 0일때 상단fixed되는 높이값 체크
	function checkFixedObjectHeight () {
		var fixedObjectTotalHeight = 0;
		for (var i=0; i<$(".top-fixed-object").length; i++) {
			var fixedObjectTotalHeight = fixedObjectTotalHeight + $(".top-fixed-object").eq(i).outerHeight();
		}
		return fixedObjectTotalHeight;
	}

	// 스크롤 event 
	window.addEventListener('scroll', toFit(function  () {
		// 메뉴fixed
		// objectFixed($fixedMoveTab, checkStartOffset(), "top-fixed");
		if (!isTabClickMoving && $(".move-line-list-JS").length > 0) {
			$(".move-line-list-JS li.selected").each(function  () {
				if ( getWindowWidth() > 800 ) {
					onLeftPosition = $(this).position().left;
					onLeftinnerPosition = $(this).find("a").position().left;
					onLeftWidth = $(this).find("a").outerWidth();
					
					$(".move-line").children("span").stop().animate({left:  onLeftPosition + onLeftinnerPosition}, 300, "swing");
					
					if ( getScrollTop() >  checkStartOffset() ) {
						$(this).find("em").css('color', '#fff');
						$(this).siblings().find("em").css('color', '#000');
						if (!$(this).hasClass('selected')) {
								$(".move-line-list-JS li.selected a em").css('color','#fff');
						}
					}else {
						$(this).find("em").css('color', '#fff');
						$(this).siblings().find("em").css('color', '#000');
						if (!$(this).hasClass('selected')) {
								$(".move-line-list-JS li.selected a em").css('color','#fff');
						}
					}
					
				}
			});
		}
		
		if ($.exists('.history-tab-list-style') ) {
			if ( getScrollTop() >  checkStartOffset() ) {
				$fixedMoveTab.addClass("top-fixed");
			}else if ( getScrollTop() <  (checkStartOffset() - $fixedMoveTab.height() - 20) ) {
				$fixedMoveTab.removeClass("top-fixed");
			}
		}else {
			if ( getScrollTop() >  checkStartOffset() ) {
				$fixedMoveTab.addClass("top-fixed");
			}else if ( getScrollTop() <  checkStartOffset() ) {
				$fixedMoveTab.removeClass("top-fixed");
			}
		}
		

		$moveTabItem.each(function  (idx) {
			var eachOffset = $.exists('.left-fixed-style') ? nav[idx] : nav[idx] -  checkFixedHeight();
			var minusOffset = $(window).height() / 6;	// 스크롤시 selected 붙는 지점을 조금 더 빠르게 하기위해 추가
			
			var isPc = window.innerWidth > 800;
			var scroll = getScrollTop() + minusOffset;
			var triggerOffset = isPc
				? eachOffset - ($fixedMoveTab.height() / 2) - 20
				: eachOffset - $fixedMoveTab.height() - 30;

			if (scroll >= triggerOffset) {
				$moveTabItem.removeClass('selected');
				$moveTabItem.eq(idx).addClass('selected');

				// 모바일 드롭메뉴일 때
				if ($.exists($moveTabItem.parents(".cm-drop-menu-box-JS"))) {
					$fixedMoveTab.find(".cm-drop-open-btn-JS > span").text($moveTabItem.eq(idx).find("em").text());
				}
			}
		});
		}, {
	}),{ passive: true })
	
	// 클릭 event 
	$moveTabItem.find("a").click(function  () {
		isTabClickMoving = true;
		
		var $target = $($(this).attr("href"));
		
		if (window.innerWidth > 800) {
			var goDivOffset = $.exists('.left-fixed-style') 
			? $target.offset().top - $("#header").height() - ($fixedMoveTab.height() / 2)
			: $target.offset().top - checkFixedHeight() +1;	// 이동해야할 지점
		} else {
			var goDivOffset = $.exists('.left-fixed-style') 
			? $target.offset().top - $("#header").height()  - $fixedMoveTab.height()
			: $target.offset().top - checkFixedHeight() +1;	// 이동해야할 지점
		}
		
		if ( getScrollTop()  < checkStartOffset()) {
			if ( getScrollTop() == 0 ) {
				var goDiv = $.exists('.left-fixed-style') 
					? goDivOffset
					: goDivOffset - checkFixedObjectHeight();
			}else {
				var goDiv = $.exists('.left-fixed-style')
					? goDivOffset
					: goDivOffset - $fixedMoveTab.height();
			}
		}else {
			var goDiv = goDivOffset;
		}
		setTimeout(function  () {
			moveScrollTop2(goDiv);
		});
		
		setTimeout(function () {
			isTabClickMoving = false;
		}, 600);

		// 모바일 드롭메뉴일때
		if ($.exists($(this).parents(".cm-drop-menu-box-JS")) ) {
			if ( getWindowWidth () < $fixedMoveTab.data("drop-width")+1 ) {
				$fixedMoveTab.find("ul").slideUp();
			}
		}
		 
		return false;
	});
}

/* ************************
* Func : 에디터관련
************************ */
if ($.exists(".editor")) {
	/* 테이블 스크롤넣기 */ 
	$(".editor table").each(function  () {
		$(this).wrap("<div class='editor-table-box'></div>");
	});
	
	/* iframe 태그 감싸기 */ 
	$(".editor iframe").each(function  () {
		var iframeSrc = $(this).attr("src");
		var findStr = "https://www.youtube.com/embed"; 

		if (iframeSrc.indexOf(findStr) != -1) {
		  $(this).wrap("<div class='editor-iframe-box'></div>");
		}
	});
}


/* ************************
* Func : 서브 Recruit
************************ */
function move_recruit_tit () {
	gsap.fromTo(".recruit-page .rt-title",{x:0}, {x:"-30vw", duration: 500, ease: Power0.easeNone, 
		scrollTrigger: {
			trigger: "#content",
			scrub: true
		} 
	})
}

/* ************************
* Func : 서브 Toggle 게시판
************************ */
// Accordion Toggle
function toggle_accordion_item () {
	$(".accordion-item .accordion-item-tit").click(function  () {
		var $accordionItem = $(this).parent(".accordion-item");
		var $accordionCon = $(this).siblings(".accordion-item-con");
		if ($accordionItem.is(".open")) {
			$(".accordion-item").removeClass("open"); 
			gsap.to($accordionCon, 0.5, {height: "0",ease: Power4.easeInOut});
		}else {
			if ( $(".accordion-item.open").length > 0 ) {
				console.log("open");
				gsap.to($(".accordion-item.open .accordion-item-con"), 0.3, {height: "0",ease: Power1.easeInOut, onComplete : function  () {
					gsap.to($accordionCon, 0.5, {height: "auto",ease: Power4.easeInOut});
					$accordionItem.addClass("open");
				}});
				$(".accordion-item").removeClass("open");
			}else {
				console.log("open2");
				gsap.to($accordionCon, 0.5, {height: "auto",ease: Power4.easeInOut});
			$(".accordion-item").removeClass("open");
				$accordionItem.addClass("open");
			}
		}
	});
}


/* ************************
* Func : 프러젝트 문의
************************ */
function pageProgressMoveEffect () {
	var $progressBar = $(".consult-progress-bar").find(".bar");
	var currentItemTotal = $(".consult-con-list").children(".consult-item").length;
	var currentItemIndex = $(".consult-con-list").children(".consult-item.active").index();
	var calc = ( currentItemIndex / currentItemTotal ) * 100;
	$progressBar.animate({
		width: calc + '%',
	});
}
function pageMoveEffect () {
	var currentItem = $(".consult-con-list").children(".consult-item.active").index() - 2;
	var goCurrentItem = $(".consult-result-list").children(".consult-item").eq(currentItem).offset().top - ($("#header").height() * 1.85);
	moveScrollTop(goCurrentItem,800);
	pageProgressMoveEffect();
}
function pageMoveUp () {
	$(".move-consult-down").removeClass("block").attr('onclick', 'pageMoveDown();');
	$(".consult-con-list .consult-item.active").removeClass("active").prev(".consult-item").addClass("active");
	$(".consult-result-list .consult-item.active").removeClass("show active").prev(".consult-item").addClass("active").removeClass("show");
	if ($(".consult-con-list").children(".consult-item").eq(0).hasClass("active")) {
		$(".move-consult-up").addClass("block").attr('onclick', '');
		var goConsultDiv = $("#header").height() / 2;
		setTimeout(() => moveScrollTop(goConsultDiv,800));
	}else {
		pageMoveEffect();
	}
	pageProgressMoveEffect();
}
function pageMoveDown () {
	$(".consult-result-con").css("display","block");
	$(".move-consult-up").removeClass("block").attr('onclick', 'pageMoveUp();');
	$(".consult-con-list .consult-item.active").removeClass("active").next(".consult-item").addClass("active");
	$(".consult-result-list .consult-item.active").addClass("show").removeClass("active").next(".consult-item").addClass("active");
	if ($(".consult-con-list").children(".consult-item").eq(0).hasClass("active")) {
		$(".move-consult-up").removeClass("block").attr('onclick', '');
	}else if ($(".consult-con-list").children(".consult-item").last().hasClass("active")) {
		$(".move-consult-down").removeClass("block").attr('onclick', 'pageMoveDownLast();');
	}
	pageProgressMoveEffect();
	pageMoveEffect();
}
function pageMoveDownLast () {
	setTimeout(() => $(".consult-con").addClass("hide"));
	$(".consult-result-list .consult-item.active").addClass("show").removeClass("active").next(".consult-item").addClass("active");
	$(".consult-result-list").children(".consult-item").last().addClass("show");
	var goCurrentItem = $(".consult-result-list").children(".consult-item").last().offset().top - ($("#header").height() / 2);
	moveScrollTop(goCurrentItem,800);
}
function pageMoveDownBack () {
	setTimeout(() => $(".consult-con").removeClass("hide"));
	$(".consult-result-list .consult-item.active").removeClass("show active").prev(".consult-item").addClass("active").removeClass("show");
	$(".consult-result-list").children(".consult-item").last().removeClass("show");
	pageMoveEffect();
}

if ($.exists(".consult-page")) {
	$(window).on('load', function  () {
		var goConsultDiv = $("#header").height() / 2;
		setTimeout(() => moveScrollTop(goConsultDiv,800),1300);
		setTimeout(() => $(".consult-con").removeClass("hide"),1200);
	});	
}

if ($.exists(".portfolio-page")) {
	var swiperPortfolioCate = new Swiper('.portfolio-menu-container', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 0,
		loop: false,
		initialSlide: 0,
	});
}

/* ************************
* Func : Trigger history + orgainzation
************************ */
//history
function trigger_history () {
	var $historyOpenBtn = $(".history-open-btn");
	var $historyCloseBtn = $(".history-close-btn");

	// OPEN
	$historyOpenBtn.click(function  () {
		htmlScrollControl (true);
		$("#header").hide();
		$("#aboutHistoryContent").addClass("open");
		return false;
	});
	// CLOSE
	$historyCloseBtn.click(function  () {
		close_cm_history();
		return false;
	});

	$(document).keydown(function(event) {
		if ( event.keyCode == 27 || event.which == 27 ) {
			close_cm_history();
		}
	});

	function close_cm_history () {
		$("#header").show();
		$("#aboutHistoryContent").removeClass("open");
		htmlScrollControl (false);
		historyOpenState = false;
	}
}
//orgainzation
function trigger_orgainzation () {
	var $orgainzationOpenBtn = $(".orgainzation-open-btn");
	var $orgainzationCloseBtn = $(".orgainzation-close-btn");

	// OPEN
	$orgainzationOpenBtn.click(function  () {
		htmlScrollControl (true);
		$("#header").hide();
		$("#aboutOrgContent").addClass("open");
		return false;
	});
	// CLOSE
	$orgainzationCloseBtn.click(function  () {
		close_cm_orgainzation();
		return false;
	});

	$(document).keydown(function(event) {
		if ( event.keyCode == 27 || event.which == 27 ) {
			close_cm_orgainzation();
		}
	});

	function close_cm_orgainzation () {
		$("#header").show();
		$("#aboutOrgContent").removeClass("open");
		htmlScrollControl (false);
	}
}
//채용 팝업
function trigger_recruit () {
	var $plannerOpenBtn = $(".planner-popup-open");
	var $designerOpenBtn = $(".designer-popup-open");
	var $pubilsherOpenBtn = $(".pubilsher-popup-open");
	var $developerOpenBtn = $(".developer-popup-open");
	var $recruitCloseBtn = $(".recruit-close-btn");

	// OPEN
	$plannerOpenBtn.click(function  () {
		htmlScrollControl (true);
		$("#header").hide();
		$(".recruit-planner-popup").addClass("open");
		return false;
	});
	$designerOpenBtn.click(function  () {
		htmlScrollControl (true);
		$("#header").hide();
		$(".recruit-designer-popup").addClass("open");
		return false;
	});
	$pubilsherOpenBtn.click(function  () {
		htmlScrollControl (true);
		$("#header").hide();
		$(".recruit-pubilsher-popup").addClass("open");
		return false;
	});
	$developerOpenBtn.click(function  () {
		htmlScrollControl (true);
		$("#header").hide();
		$(".recruit-developer-popup").addClass("open");
		return false;
	});
	// CLOSE
	$recruitCloseBtn.click(function  () {
		close_cm_orgainzation();
		return false;
	});

	$(document).keydown(function(event) {
		if ( event.keyCode == 27 || event.which == 27 ) {
			close_cm_orgainzation();
		}
	});

	function close_cm_orgainzation () {
		$("#header").show();
		$(".recruit-planner-popup, .recruit-designer-popup, .recruit-pubilsher-popup, .recruit-developer-popup").removeClass("open");
		htmlScrollControl (false);
	}
}


/* ************************
	* Func : HISTORY 슬라이드 탭
************************ */
if ($.exists(".about-history-tab-wrapper")) {
	$('.about-history-tab-list-JS').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		dots:false,
		autoplay: false,
		speed:600,
		infinite:false,
		easing: 'easeInOutQuint',
		pauseOnHover:false,
		focusOnSelect: true,
		asNavFor: '.about-history-tab-con-JS'
	});
	$('.about-history-tab-con-JS').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		dots:false,
		autoplay: false,
		speed:600,
		infinite:false,
		easing: 'easeInOutQuint',
		pauseOnHover:false,
		swipeToSlide: true,
		asNavFor: '.about-history-tab-list-JS'
	});	
}


(function () {
  if (!window.jQuery) return;
  if (!$.exists) $.exists = (sel) => $(sel).length > 0;

  function getWindowWidth2() {
    return window.innerWidth || document.documentElement.clientWidth || 0;
  }

  var LINE_DUR  = 300;
  var LINE_EASE = "swing";

  $(".cm-tab-style-JS").each(function () {
    var $wrap = $(this);

    var $menuList     = $wrap.find(".move-line-list-JS");
    var $moveLineSpan = $wrap.find(".move-line").children("span");
    if (!$menuList.length || !$moveLineSpan.length) return;

    var hasColorChange = $wrap.find(".color-change-JS").length > 0;

    // portfolio-menu-container만 on을 선택 클래스로 사용
    var ACTIVE_SEL = $wrap.hasClass("portfolio-menu-container")
      ? "li.on, li.selected"
      : "li.selected";

    function getLiMetrics($li) {
      if (!$li || !$li.length) return null;
      var leftOuter = $li.position().left;
      var $a = $li.find("a").first();
      if (!$a.length) return null;

      var leftInner = $a.position().left;
      var width     = $a.outerWidth();
      return { left: leftOuter + leftInner, width: width };
    }

    function animateLineToLi($li, dur) {
      if (getWindowWidth2() <= 800) return; // 모바일은 라인 안 움직이게
      var m = getLiMetrics($li);
      if (!m) return;

      $moveLineSpan
        .show()
        .stop(true, false)
        .animate({ left: m.left, width: m.width }, dur || LINE_DUR, LINE_EASE);
    }

    function applyTextColors($activeLi) {
      if (!hasColorChange || getWindowWidth2() <= 800) return;
      $menuList.find("em").css("color", "#000");
      $activeLi.find("em").css("color", "#fff");
    }

    function getActiveLi() {
      var $active = $menuList.find(ACTIVE_SEL).first();
      if (!$active.length) $active = $menuList.children("li").first();
      return $active.length ? $active : $();
    }

    function syncToActive(instant) {
      var $active = getActiveLi();
      if (!$active.length) return;

      if (instant) {
        var m = getLiMetrics($active);
        if (m) $moveLineSpan.css({ left: m.left, width: m.width }).show();
      } else {
        animateLineToLi($active, LINE_DUR);
      }
      applyTextColors($active);
    }

    function bindHover_PC() {
      // wrap별 네임스페이스로 충돌 방지
      $menuList.children("li").off(".movelineUnified");
      if (getWindowWidth2() <= 800) return;

      $menuList.children("li")
        .on("mouseenter.movelineUnified", function () {
          var $li = $(this);

          if (hasColorChange) {
            $li.find("em").css("color", "#fff");
            $li.siblings().find("em").css("color", "#000");

            if (!$li.is(ACTIVE_SEL)) {
              $menuList.find(ACTIVE_SEL + " em").css("color", "#000");
            }
          }

          animateLineToLi($li, LINE_DUR);
        })
        .on("mouseleave.movelineUnified", function () {
          syncToActive(false);
        });

      syncToActive(true);
    }

    // - 기본 페이지: selected 없으면 1번에 selected
    // - portfolio 페이지: on/selected 둘 다 없으면 1번에 on
    if (!$menuList.find(ACTIVE_SEL).length) {
      $menuList.children("li").removeClass("selected on");
      if ($wrap.hasClass("portfolio-menu-container")) {
        $menuList.children("li").eq(0).addClass("on");
      } else {
        $menuList.children("li").eq(0).addClass("selected");
      }
    }

    bindHover_PC();

    var resizeTimer = null;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        bindHover_PC();

        if (getWindowWidth2() <= 800) {
          $moveLineSpan.stop(true, false).hide();
          if (hasColorChange) $menuList.find("em").css("color", "");
        }
      }, 120);
    });
  });

})();

/* *********************** 
* Func : 공유하기 복사
************************ */
$(document).ready(function () {
	function copyToClipboard(text) {
		if (navigator.clipboard && window.isSecureContext) {
			return navigator.clipboard.writeText(text);
		}

		return new Promise((resolve, reject) => {
			try {
				const $temp = $("<textarea>");
				$("body").append($temp);
				$temp.val(text).select();
				document.execCommand("copy");
				$temp.remove();
				resolve();
			} catch (e) {
				reject(e);
			}
		});
	}

	$(".share-open-btn").on("click", function (e) {
		e.preventDefault();

		var copy_lang = $("#copy_lang").val();
		var url = window.location.href;
		var successMsg = copy_lang == 1 ? "링크를 복사 했습니다." : "I copied the link.";
		var failMsg = copy_lang == 1 ? "Ctrl+C를 눌러 복사하세요." : "Press Ctrl+C to copy.";

		copyToClipboard(url)
			.then(() => alert(successMsg))
			.catch(() => window.prompt(failMsg, url));
	});
});