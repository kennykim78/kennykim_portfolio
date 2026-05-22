document.addEventListener("DOMContentLoaded", () => {
  // GSAP and ScrollTrigger initialization
  gsap.registerPlugin(ScrollTrigger);

  // 1. Header & Drawer
  const appHeader = document.querySelector("[app-header]");
  const hamburger = document.querySelector(".btn-hamburger");
  const body = document.body;

  if (hamburger && appHeader) {
    hamburger.addEventListener("click", () => {
      appHeader.classList.toggle("drawer-open");
      if (appHeader.classList.contains("drawer-open")) {
        hamburger.classList.add("on");
      } else {
        hamburger.classList.remove("on");
      }
    });
  }

  // Header scroll effect
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    
    // Safeguard for iOS elastic scrolling/rubber-banding
    const safeScrollY = currentScrollY < 0 ? 0 : currentScrollY;

    if (safeScrollY > 50) {
      appHeader.classList.add("scrolled");
      appHeader.querySelector("header").classList.add("white");
    } else {
      appHeader.classList.remove("scrolled");
      appHeader.querySelector("header").classList.remove("white");
    }

    const serviceSection = document.getElementById("services");
    let inServiceSection = false;
    if (serviceSection) {
      const rect = serviceSection.getBoundingClientRect();
      // Check if the service section is currently occupying the viewport
      // rect.top <= 10 means the section has reached the top of the screen
      // rect.bottom > 50 means the section hasn't completely scrolled up yet
      if (rect.top <= 10 && rect.bottom > 50) {
        inServiceSection = true;
      }
    }

    if (safeScrollY > 100) {
      if (safeScrollY > lastScrollY) {
        // Scrolling down: Hide header
        appHeader.classList.add("roll");
      } else {
        // Scrolling up: Show header UNLESS in the service section
        if (inServiceSection) {
          appHeader.classList.add("roll");
        } else {
          appHeader.classList.remove("roll");
        }
      }
    } else {
      // Near top: Always show header
      appHeader.classList.remove("roll");
    }

    lastScrollY = safeScrollY;
  });

  // 1.5. About Page Hero Image Scroll Scale (with Pinning)
  const aboutHeroSection = document.querySelector('.about section.hero');
  if (aboutHeroSection) {
    const heroImages = aboutHeroSection.querySelectorAll('.slider .swiper-slide img');
    
    // 전체 히어로 섹션을 화면에 고정(pin)하고, 스크롤량에 비례해 이미지를 스케일링할 타임라인 정의
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutHeroSection,
        start: 'top top',
        end: '+=800 top',  // 800px 동안 고정되어 풍성하게 축소 연출
        scrub: true,
        pin: true,         // 이미지가 줄어드는 동안 뷰포트에 고정!
        pinSpacing: true,  // 고정 상태 해제 시 다음 영역이 이어서 자연스럽게 위로 스크롤되도록 여백 처리
      }
    });

    // 모든 Swiper 슬라이드 이미지들이 동시에 scale: 1 -> 0.5 로 축소되도록 타임라인에 등록
    heroImages.forEach(img => {
      tl.fromTo(
        img,
        { scale: 1 },
        {
          scale: 0.5,
          ease: 'none',
        },
        0 // 동시에(0초 시점에) 함께 시작
      );
    });
  }

  // =============================================
  // 1.6. Footer BG — Canvas Line Pattern (Scroll Reactive)
  // =============================================
  (function () {
    const canvas = document.getElementById('linePattern');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const footer = document.querySelector('[app-footer]');
    if (!footer) return;

    let progressObj = { value: 0 };

    // Canvas 크기를 실제 픽셀 크기로 동기화 (retina 대응)
    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      drawPattern(progressObj.value);
    }

    // 패턴 그리기 (progress: 0=숨김, 1=전체 표시)
    function drawPattern(progress) {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#555';
      ctx.lineCap = 'butt'; // 정밀한 바코드 형태를 위해 단면을 Flat하게 설정

      // 사용자 요청 스펙 반영: 
      // 1단: 1px 선, 20px 간격
      // 2단: 2px 선, 30px 간격
      // 3단: 3px 선, 40px 간격
      const rows = [
        { lineWidth: 1, gap: 30 },
        { lineWidth: 5, gap: 50 },
        { lineWidth: 1, gap: 30 }
      ];

      const rowDuration = 1 / rows.length; // 각 row에 할당되는 스크롤 영역 비율 (대략 0.33씩)

      for (let row = 0; row < rows.length; row++) {
        const config = rows[row];
        ctx.lineWidth = config.lineWidth;
        const gap = config.gap;

        // 3개 단을 Y축으로 빈틈없이 붙여 배치 (1px 오차 방지 겹침 적용)
        const yBase = row * (h / 3);
        const fullHeight = (h / 3) + 1;

        // 현재 row의 스크롤 구간 범위 계산 (0~1 사이)
        const rowStart = row * rowDuration;
        
        // 전체 progress 중 해당 row 영역에서의 진행도 (0 ~ 1)
        let rowProgress = (progress - rowStart) / rowDuration;
        rowProgress = Math.max(0, Math.min(1, rowProgress));

        for (let x = 0; x < w; x += gap) {
          // 각 row 내부에서 왼쪽에서 오른쪽으로 흐르듯이 등장하는 stagger 딜레이 계산
          const delay = (x / w) * 0.4; // row 안에서의 가로 딜레이 비율 (40%)
          let localProgress = (rowProgress - delay) / 0.6; // 남은 60% 비율 동안 선이 자라남
          localProgress = Math.max(0, Math.min(1, localProgress));

          const drawHeight = fullHeight * localProgress;

          if (drawHeight <= 0) continue;

          ctx.beginPath();
          // 하단 고정
          ctx.moveTo(x, yBase + fullHeight);
          // 위로 깔끔하게 자라나는 형태
          ctx.lineTo(x, yBase + fullHeight - drawHeight);
          ctx.stroke();
        }
      }
    }

    // GSAP ScrollTrigger로 부드러운 스크롤 인터랙션 연동
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.to(progressObj, {
        value: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: footer,
          start: 'top bottom', // footer가 화면 하단에 진입할 때부터 시작
          end: 'bottom bottom', // footer가 화면에 완전히 보일 때 완료
          scrub: true,
          onUpdate: (self) => {
            drawPattern(progressObj.value);
          }
        }
      });
    } else {
      // GSAP이 로드되지 않았을 경우를 대비한 부드러운 Vanilla Scroll Fallback
      window.addEventListener('scroll', () => {
        const rect = footer.getBoundingClientRect();
        const winHeight = window.innerHeight;
        
        // footer가 하단에 진입한 비율 계산
        const totalDist = winHeight + rect.height;
        const currentDist = winHeight - rect.top;
        const rawProgress = currentDist / totalDist;
        const progress = Math.max(0, Math.min(1, rawProgress));
        
        progressObj.value = progress;
        drawPattern(progress);
      }, { passive: true });
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });

    // 초기 실행
    resizeCanvas();
  })();


  // 2. Hero Animation
  const hero = document.querySelector(".hero");
  if (hero) {
    const coverClip = hero.querySelector(".cover-clip");
    const coverImg = hero.querySelector(".cover-image");
    const dim = hero.querySelector(".dim");

    if (coverClip && coverImg) {
      // Setting up the GSAP scrub animation for Hero
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // The hero sticky section relies on cover-clip moving up
      tl.fromTo(coverClip, { y: "100%" }, { y: "0%", ease: "none" }, 0);
      // Dim opacity
      if (dim) tl.fromTo(dim, { opacity: 0 }, { opacity: 1, ease: "none" }, 0);

      // Scale up image and clear inset
      tl.fromTo(
        coverImg,
        { width: "85%", left: "7.5%", height: "70%", top: "15%" },
        { width: "100%", left: "0%", height: "100%", top: "0%", ease: "none" },
        0,
      );
    }
  }

  // 3. History Sliders (Continuous Marquee Tracks & Dynamic Generation)
  const topSliderWrapper = document.querySelector(".history-slider-top .swiper-wrapper");
  const bottomSliderWrapper = document.querySelector(".history-slider-bottom .swiper-wrapper");

  // Dynamically generate top slider slides (2x copies for seamless looping)
  // Top track: Image is placed ABOVE the text (margin-bottom: 12px)
  if (topSliderWrapper && typeof historyDataTop !== "undefined") {
    const fullList = [...historyDataTop, ...historyDataTop];
    topSliderWrapper.innerHTML = fullList.map(item => {
      const imgHtml = item.image ? `
        <div class="history-item-image" style="width: ${item.imgWidth}; height: ${item.imgHeight}; margin-bottom: 12px; border-radius: 8px; overflow: hidden; display: block; flex-shrink: 0;">
          <img src="${item.image}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="" />
        </div>
      ` : '';
      return `
        <div class="swiper-slide">
          <div class="history-item${item.important ? ' important-project' : ''}">
            ${imgHtml}
            <span class="company">${item.company}</span>
            <h3 class="project-title">${item.project}</h3>
          </div>
        </div>
      `;
    }).join("");
  }

  // Dynamically generate bottom slider slides (2x copies for seamless looping)
  // Bottom track: Image is placed BELOW the text (margin-top: 12px)
  if (bottomSliderWrapper && typeof historyDataBottom !== "undefined") {
    const fullList = [...historyDataBottom, ...historyDataBottom];
    bottomSliderWrapper.innerHTML = fullList.map(item => {
      const imgHtml = item.image ? `
        <div class="history-item-image" style="width: ${item.imgWidth}; height: ${item.imgHeight}; margin-top: 12px; border-radius: 8px; overflow: hidden; display: block; flex-shrink: 0;">
          <img src="${item.image}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="" />
        </div>
      ` : '';
      return `
        <div class="swiper-slide">
          <div class="history-item${item.important ? ' important-project' : ''}">
            <span class="company">${item.company}</span>
            <h3 class="project-title">${item.project}</h3>
            ${imgHtml}
          </div>
        </div>
      `;
    }).join("");
  }

  if (document.querySelector(".history-slider-top")) {
    new Swiper(".history-slider-top", {
      slidesPerView: "auto",
      spaceBetween: 48,
      loop: true,
      freeMode: true,
      speed: 14000,
      autoplay: {
        delay: 0,
        reverseDirection: true,
        disableOnInteraction: false,
      },
    });
  }

  if (document.querySelector(".history-slider-bottom")) {
    new Swiper(".history-slider-bottom", {
      slidesPerView: "auto",
      spaceBetween: 48,
      loop: true,
      freeMode: true,
      speed: 14000,
      autoplay: {
        delay: 0,
        reverseDirection: false,
        disableOnInteraction: false,
      },
    });
  }

  // 4. Fade in elements on scroll
  const fadeSections = document.querySelectorAll(
    ".history-section > div, .text-interaction > div, .services > div, .leadership .align-warp",
  );
  fadeSections.forEach((sec) => {
    gsap.fromTo(
      sec,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
        },
      },
    );
  });

  // 5. Text Interaction Highlights (Black Block Reveal Animation)
  const textSpans = document.querySelectorAll(".text-interaction .reveal-block");
  textSpans.forEach((span) => {
    ScrollTrigger.create({
      trigger: span,
      start: "top 80%",
      onEnter: () => span.classList.add("on"),
      onLeaveBack: () => span.classList.remove("on"), // Revert animation when scrolling back up
    });
  });

  // 6. Services Horizontal Scroll & Tabs (Giantsoft Ported to Vanilla JS)
  (function () {
    const root = document.querySelector(".service-con.add-260226");
    if (!root) return;

    const track = root.querySelector(".service-tab-content-style");
    const panels = root.querySelectorAll(".service-tab-con");
    if (!track || !panels.length) return;

    const moveMenuList = root.querySelector(".move-line-list-JS");
    const moveLineSpan = root.querySelector(".move-line > span");
    const hasColorChange = root.querySelector(".color-change-JS") !== null;

    const TXT_EASE_SOFT = "power3.out";
    const DUR_T1 = 0.65, DUR_T2 = 0.85, DUR_T3 = 0.75, DUR_T4 = 0.65;
    const DUR_LI = 0.55, STAGGER_LI = 0.11;
    const DUR_CIR_GROUP = 0.70, STAGGER_CIR_GROUP = 0.18;
    const DUR_CIR_BADGE = 0.38, STAGGER_CIR_BADGE = 0.06;
    const IMG_Y = "50%";

    let activeIndex = -1;
    let pcPanelTLs = [];
    let panelStates = [];
    let stickyTicking = false;
    let mobileSTs = [];
    let hasPlayedThrough = false;

    function getWindowWidth() {
      return window.innerWidth || document.documentElement.clientWidth || 0;
    }

    // ---------------------------
    // move-line metrics calculation
    // ---------------------------
    function getLiMetrics(li) {
      if (!li) return null;
      const leftOuter = li.offsetLeft;
      const a = li.querySelector("a");
      if (!a) return null;
      const leftInner = a.offsetLeft;
      const width = a.offsetWidth;
      return { left: leftOuter + leftInner, width: width };
    }

    function animateLineToLi(li, durSeconds) {
      if (getWindowWidth() <= 800) return;
      if (!moveLineSpan) return;

      const m = getLiMetrics(li);
      if (!m) return;

      moveLineSpan.style.display = "block";
      gsap.to(moveLineSpan, {
        left: m.left,
        width: m.width,
        duration: durSeconds !== undefined ? durSeconds : 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    }

    function applyTextColors(activeLi) {
      // 탭 글자색은 이제 CSS(.selected 및 :hover)에서 완전하게 자동 처리하므로 inline-style 대입을 생략합니다.
    }

    // Hover effect for tabs
    function handleMouseEnter(e) {
      if (getWindowWidth() <= 800) return;
      const li = e.currentTarget;
      animateLineToLi(li, 0.3);
    }

    function handleMouseLeave() {
      if (getWindowWidth() <= 800) return;
      const selected = moveMenuList.querySelector("li.selected");
      if (!selected) return;

      animateLineToLi(selected, 0.3);
    }

    function bindHoverMoveLine_PC() {
      if (!moveMenuList || !moveLineSpan) return;

      Array.from(moveMenuList.children).forEach(li => {
        li.removeEventListener("mouseenter", handleMouseEnter);
        li.removeEventListener("mouseleave", handleMouseLeave);
      });

      if (getWindowWidth() <= 800) return;

      Array.from(moveMenuList.children).forEach(li => {
        li.addEventListener("mouseenter", handleMouseEnter);
        li.addEventListener("mouseleave", handleMouseLeave);
      });

      const sel = moveMenuList.querySelector("li.selected");
      if (sel) {
        const m = getLiMetrics(sel);
        if (m) {
          moveLineSpan.style.display = "block";
          gsap.set(moveLineSpan, { left: m.left, width: m.width });
        }
        applyTextColors(sel);
      }
    }

    // ---------------------------
    // panel helpers & timelines
    // ---------------------------
    function getPanelParts(panelEl) {
      const topSpan = panelEl.querySelector(".service-txt-top span");
      const topStrong = panelEl.querySelector(".service-txt-top strong");
      const topH5 = panelEl.querySelector(".service-txt-top h5");
      const bottomTxt = panelEl.querySelector(".service-txt-bottom .txt");
      const bottomDotTxt = panelEl.querySelector(".service-txt-bottom .dot-txt");
      const lis = panelEl.querySelectorAll(".service-txt-bottom .dot-txt li");
      const cirGroups = panelEl.querySelectorAll(".service-txt-bottom .cir-group");
      const cirDTs = panelEl.querySelectorAll(".service-txt-bottom .cir-group dt");
      const cirDDs = panelEl.querySelectorAll(".service-txt-bottom .cir-group dd");
      const cirBadges = panelEl.querySelectorAll(".service-txt-bottom .cir-group dd span");
      const img = panelEl.querySelector(".service-img-wrapper .img");
      const videoWrap = panelEl.querySelector(".service-img-wrapper .video");
      const video = panelEl.querySelector(".service-img-wrapper .video video");

      return {
        t1: topSpan || topStrong,
        t2: topH5,
        t3: bottomTxt,
        t4: bottomDotTxt,
        lis: Array.from(lis),
        cirGroups: Array.from(cirGroups),
        cirDTs: Array.from(cirDTs),
        cirDDs: Array.from(cirDDs),
        cirBadges: Array.from(cirBadges),
        img: img,
        videoWrap: videoWrap,
        video: video
      };
    }

    function setPanelStatePC(i, mode) {
      const panelEl = panels[i];
      if (!panelEl) return;

      const parts = getPanelParts(panelEl);
      const isFirst = (i === 0);

      if (isFirst && mode === "reset") {
        const elementsToClear = [parts.t1, parts.t2, parts.t3, parts.t4]
          .concat(parts.lis)
          .concat(parts.cirGroups)
          .concat(parts.cirDTs)
          .concat(parts.cirDDs)
          .concat(parts.cirBadges)
          .filter(Boolean);

        gsap.set(elementsToClear, { clearProps: "all" });

        if (parts.img) {
          gsap.set(parts.img, { autoAlpha: 1, clearProps: "backgroundPosition" });
        }
        if (parts.videoWrap) {
          gsap.set(parts.videoWrap, { autoAlpha: 1, clearProps: "transform" });
        }
        return;
      }

      if (mode === "reset") {
        if (parts.t1) gsap.set(parts.t1, { autoAlpha: 0, y: 18 });
        if (parts.t2) gsap.set(parts.t2, { autoAlpha: 0, y: 26 });
        if (parts.t3) gsap.set(parts.t3, { autoAlpha: 0, y: 16 });
        if (parts.t4) gsap.set(parts.t4, { autoAlpha: 0 });
        if (parts.lis.length) gsap.set(parts.lis, { autoAlpha: 0, y: 10 });

        if (parts.cirGroups.length) gsap.set(parts.cirGroups, { autoAlpha: 0 });
        if (parts.cirDTs.length) gsap.set(parts.cirDTs, { autoAlpha: 0, y: 10 });
        if (parts.cirDDs.length) gsap.set(parts.cirDDs, { autoAlpha: 0, y: 10 });
        if (parts.cirBadges.length) gsap.set(parts.cirBadges, { autoAlpha: 0, y: 8 });

        if (parts.img) {
          gsap.set(parts.img, {
            autoAlpha: 0,
            backgroundPosition: "70% " + IMG_Y
          });
        }
        if (parts.videoWrap) {
          gsap.set(parts.videoWrap, { autoAlpha: 0 });
        }
      }
    }

    function buildOnePanelTimeline(panelEl, i) {
      const isFirst = (i === 0);
      const parts = getPanelParts(panelEl);

      if (isFirst) {
        setPanelStatePC(i, "reset");
        return gsap.timeline({ paused: true });
      }

      setPanelStatePC(i, "reset");

      const tl = gsap.timeline({ paused: true });

      if (parts.t1) tl.to(parts.t1, { autoAlpha: 1, y: 0, duration: DUR_T1, ease: TXT_EASE_SOFT }, 0.00);
      if (parts.t2) tl.to(parts.t2, { autoAlpha: 1, y: 0, duration: DUR_T2, ease: TXT_EASE_SOFT }, 0.10);
      if (parts.t3) tl.to(parts.t3, { autoAlpha: 1, y: 0, duration: DUR_T3, ease: TXT_EASE_SOFT }, 0.22);
      if (parts.t4) tl.to(parts.t4, { autoAlpha: 1, duration: DUR_T4, ease: "power2.out" }, 0.36);

      if (parts.lis.length) {
        tl.to(parts.lis, {
          autoAlpha: 1,
          y: 0,
          duration: DUR_LI,
          ease: TXT_EASE_SOFT,
          stagger: STAGGER_LI
        }, 0.54);
      }

      if (parts.cirGroups.length) {
        tl.to(parts.cirGroups, {
          autoAlpha: 1,
          duration: DUR_CIR_GROUP,
          ease: "power2.out",
          stagger: STAGGER_CIR_GROUP
        }, 0.86);

        if (parts.cirDTs.length) {
          tl.to(parts.cirDTs, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: TXT_EASE_SOFT,
            stagger: 0.12
          }, 0.92);
        }

        if (parts.cirDDs.length) {
          tl.to(parts.cirDDs, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: TXT_EASE_SOFT,
            stagger: 0.12
          }, 0.96);
        }

        if (parts.cirBadges.length) {
          tl.to(parts.cirBadges, {
            autoAlpha: 1,
            y: 0,
            duration: DUR_CIR_BADGE,
            ease: TXT_EASE_SOFT,
            stagger: STAGGER_CIR_BADGE
          }, 1.08);
        }
      }

      if (parts.img) {
        tl.to(parts.img, {
          autoAlpha: 1,
          duration: 0.35,
          ease: "power2.out"
        }, 0.22);
      }

      if (parts.videoWrap) {
        tl.to(parts.videoWrap, {
          autoAlpha: 1,
          duration: 0.40,
          ease: "power2.out"
        }, 0.22);
      }

      return tl;
    }

    function buildOnePanelTimeline_Mobile(panelEl) {
      const parts = getPanelParts(panelEl);

      if (parts.t1) gsap.set(parts.t1, { autoAlpha: 0, y: 18 });
      if (parts.t2) gsap.set(parts.t2, { autoAlpha: 0, y: 26 });
      if (parts.t3) gsap.set(parts.t3, { autoAlpha: 0, y: 16 });
      if (parts.t4) gsap.set(parts.t4, { autoAlpha: 0 });
      if (parts.lis.length) gsap.set(parts.lis, { autoAlpha: 0, y: 10 });

      if (parts.cirGroups.length) gsap.set(parts.cirGroups, { autoAlpha: 0 });
      if (parts.cirDTs.length) gsap.set(parts.cirDTs, { autoAlpha: 0, y: 10 });
      if (parts.cirDDs.length) gsap.set(parts.cirDDs, { autoAlpha: 0, y: 10 });
      if (parts.cirBadges.length) gsap.set(parts.cirBadges, { autoAlpha: 0, y: 8 });

      if (parts.img) {
        gsap.killTweensOf(parts.img);
        gsap.set(parts.img, {
          autoAlpha: 0,
          y: 30,
          clearProps: "backgroundPosition",
          willChange: "transform, opacity"
        });
      }

      if (parts.videoWrap) {
        gsap.killTweensOf(parts.videoWrap);
        gsap.set(parts.videoWrap, {
          autoAlpha: 0,
          y: 30,
          willChange: "opacity"
        });
      }

      const tl = gsap.timeline({ paused: true });

      if (parts.t1) tl.to(parts.t1, { autoAlpha: 1, y: 0, duration: DUR_T1, ease: TXT_EASE_SOFT }, 0.00);
      if (parts.t2) tl.to(parts.t2, { autoAlpha: 1, y: 0, duration: DUR_T2, ease: TXT_EASE_SOFT }, 0.10);
      if (parts.t3) tl.to(parts.t3, { autoAlpha: 1, y: 0, duration: DUR_T3, ease: TXT_EASE_SOFT }, 0.22);
      if (parts.t4) tl.to(parts.t4, { autoAlpha: 1, duration: DUR_T4, ease: "power2.out" }, 0.36);

      if (parts.lis.length) {
        tl.to(parts.lis, {
          autoAlpha: 1,
          y: 0,
          duration: DUR_LI,
          ease: TXT_EASE_SOFT,
          stagger: STAGGER_LI
        }, 0.42);
      }

      if (parts.cirGroups.length) {
        tl.to(parts.cirGroups, {
          autoAlpha: 1,
          duration: DUR_CIR_GROUP,
          ease: "power2.out",
          stagger: STAGGER_CIR_GROUP
        }, 0.62);

        if (parts.cirDTs.length) {
          tl.to(parts.cirDTs, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: TXT_EASE_SOFT,
            stagger: 0.12
          }, 0.68);
        }

        if (parts.cirDDs.length) {
          tl.to(parts.cirDDs, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: TXT_EASE_SOFT,
            stagger: 0.12
          }, 0.72);
        }

        if (parts.cirBadges.length) {
          tl.to(parts.cirBadges, {
            autoAlpha: 1,
            y: 0,
            duration: DUR_CIR_BADGE,
            ease: TXT_EASE_SOFT,
            stagger: STAGGER_CIR_BADGE
          }, 0.82);
        }
      }

      if (parts.img) {
        tl.to(parts.img, {
          autoAlpha: 1,
          y: 0,
          duration: 0.70,
          ease: "power2.out"
        }, 0.74);
      }

      if (parts.videoWrap) {
        tl.to(parts.videoWrap, {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out"
        }, 0.74);
      }

      return tl;
    }

    // ---------------------------
    // sticky helpers
    // ---------------------------
    function getStickyTop() {
      const tab = root.querySelector(".service-tab-wrapper-style");
      return tab ? tab.offsetHeight : 0;
    }

    function getStickyHeight() {
      return window.innerHeight - getStickyTop();
    }

    function getMaxX() {
      const total = track.scrollWidth;
      const vw = window.innerWidth;
      return Math.max(0, total - vw);
    }

    function buildPCTimelines() {
      pcPanelTLs = [];
      panelStates = [];

      panels.forEach((panel, i) => {
        const tl = buildOnePanelTimeline(panel, i);
        pcPanelTLs[i] = tl;
        panelStates[i] = false;
      });
    }

    function resetPCStates() {
      activeIndex = -1;
      hasPlayedThrough = false;
      if (moveMenuList) {
        Array.from(moveMenuList.children).forEach(li => li.classList.remove("selected"));
      }
      gsap.set(track, { x: 0, force3D: true });

      buildPCTimelines();

      panels.forEach((panel, i) => {
        setPanelStatePC(i, "reset");
        panelStates[i] = false;
      });
    }

    function updateActiveByProgress(progress) {
      const panelCount = panels.length;
      if (!panelCount) return;

      let idx = Math.round(progress * (panelCount - 1));
      idx = Math.max(0, Math.min(panelCount - 1, idx));

      if (idx === activeIndex) return;
      activeIndex = idx;

      if (moveMenuList) {
        const activeLi = moveMenuList.children[idx];
        if (activeLi) {
          activeLi.classList.add("selected");
          Array.from(moveMenuList.children).forEach(sibling => {
            if (sibling !== activeLi) sibling.classList.remove("selected");
          });
          applyTextColors(activeLi);
          animateLineToLi(activeLi, 0.3);
        }
      }
    }

    function updatePanelRevealByProgress(progress) {
      const count = panels.length;
      if (!count) return;

      const resetPoint = 0.03;
      const step = count <= 1 ? 1 : 1 / (count - 1);

      if (progress <= resetPoint) {
        for (let r = 0; r < count; r++) {
          if (pcPanelTLs[r]) pcPanelTLs[r].pause(0);
          setPanelStatePC(r, "reset");
          panelStates[r] = false;
        }
        hasPlayedThrough = false;
        return;
      }

      for (let i = 0; i < count; i++) {
        const start = count <= 1 ? 0 : i / (count - 1);
        const triggerPoint = Math.max(0, start - step * 0.52);

        if (progress >= triggerPoint && !panelStates[i]) {
          panelStates[i] = true;

          if (pcPanelTLs[i]) {
            pcPanelTLs[i].pause(0);
            pcPanelTLs[i].restart();
          }
        }
      }

      if (progress >= 0.98) {
        hasPlayedThrough = true;
      }
    }

    function updateImageParallaxByProgress(progress) {
      const count = panels.length;
      if (!count) return;

      const step = count <= 1 ? 1 : 1 / (count - 1);

      panels.forEach((panel, i) => {
        const parts = getPanelParts(panel);
        if (!parts.img) return;

        if (!panelStates[i] && i !== 0) return;

        const start = count <= 1 ? 0 : i / (count - 1);
        const localStart = Math.max(0, start - step * 0.52);
        const localEnd = Math.min(1, start + step * 0.80);

        let localProgress = (progress - localStart) / Math.max(0.0001, (localEnd - localStart));
        localProgress = Math.max(0, Math.min(1, localProgress));

        const bgX = 100 - (localProgress * 100);

        gsap.set(parts.img, {
          backgroundPosition: bgX + "% " + IMG_Y
        });
      });
    }

    function renderSticky() {
      stickyTicking = false;
      if (getWindowWidth() <= 800) return;

      const rect = root.getBoundingClientRect();
      const maxX = getMaxX();

      const totalScrollable = Math.max(1, root.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      
      // 5번째 탭 이후의 누적 오프셋 오차로 인한 좌측 잘림 현상을 해결하기 위해 구간 세그먼트 보간(Segmented Interpolation)을 적용합니다.
      const panelCount = panels.length;
      let x = 0;
      if (panelCount > 1) {
        const segment = 1 / (panelCount - 1);
        const i = Math.floor(progress / segment);
        const localProgress = (progress % segment) / segment;

        const getPanelOffset = (idx) => {
          const vw = window.innerWidth;
          const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 10;
          const gap = fontSize * 8; // 8rem
          const padding = fontSize * 6; // 6rem

          let targetX = idx * vw + idx * gap + padding;
          if (targetX > maxX) {
            targetX = maxX;
          }
          return targetX;
        };

        const startX = getPanelOffset(Math.min(panelCount - 1, i));
        const endX = getPanelOffset(Math.min(panelCount - 1, i + 1));
        x = -(startX + (endX - startX) * localProgress);
      } else {
        x = -maxX * progress;
      }

      gsap.set(track, { x: x, force3D: true });

      updateActiveByProgress(progress);
      updatePanelRevealByProgress(progress);
      updateImageParallaxByProgress(progress);
    }

    function requestStickyRender() {
      if (stickyTicking) return;
      stickyTicking = true;
      requestAnimationFrame(renderSticky);
    }

    function refreshStickyMetrics() {
      if (getWindowWidth() <= 800) return;

      const stickyTop = getStickyTop();
      const stickyHeight = getStickyHeight();
      const maxX = getMaxX();

      root.classList.add("is-sticky-mode");
      root.style.setProperty("--service-sticky-top", stickyTop + "px");
      root.style.setProperty("--service-sticky-height", stickyHeight + "px");
      root.style.setProperty("--service-scroll-extra", maxX + "px");

      requestStickyRender();
    }

    function handleTabClick(e) {
      if (getWindowWidth() <= 800) return;
      e.preventDefault();

      const a = e.currentTarget;
      const li = a.closest("li");
      if (!li) return;

      const idx = Array.from(moveMenuList.children).indexOf(li);
      if (idx < 0) return;

      const panelCount = panels.length;
      const totalScrollable = Math.max(1, root.offsetHeight - window.innerHeight);
      const targetProgress = panelCount <= 1 ? 0 : idx / (panelCount - 1);
      
      const rootTop = root.getBoundingClientRect().top + window.scrollY;
      const targetY = rootTop + (totalScrollable * targetProgress);

      window.scrollTo({
        top: targetY,
        behavior: "smooth"
      });
    }

    function bindTabClicks_PC() {
      if (!moveMenuList) return;
      moveMenuList.querySelectorAll("a").forEach(a => {
        a.removeEventListener("click", handleTabClick);
        a.addEventListener("click", handleTabClick);
      });
    }

    function destroyPCSticky() {
      window.removeEventListener("scroll", requestStickyRender);
      window.removeEventListener("resize", handleResizeSticky);
      window.removeEventListener("load", handleResizeSticky);

      if (moveMenuList) {
        moveMenuList.querySelectorAll("a").forEach(a => {
          a.removeEventListener("click", handleTabClick);
        });
      }
      root.classList.remove("is-sticky-mode");
      root.style.removeProperty("--service-sticky-top");
      root.style.removeProperty("--service-sticky-height");
      root.style.removeProperty("--service-scroll-extra");
      gsap.set(track, { clearProps: "transform" });
    }

    function handleResizeSticky() {
      refreshStickyMetrics();
      bindHoverMoveLine_PC();
    }

    // ---------------------------
    // mobile
    // ---------------------------
    function destroyMobileST() {
      mobileSTs.forEach(st => { st.kill(); });
      mobileSTs = [];
    }

    function initMobileST() {
      destroyMobileST();

      panels.forEach((panel) => {
        const tl = buildOnePanelTimeline_Mobile(panel);

        const st = ScrollTrigger.create({
          trigger: panel,
          start: "top 85%",
          once: true,
          animation: tl
        });

        mobileSTs.push(st);
      });
    }

    // ---------------------------
    // main init per mode
    // ---------------------------
    function initPC() {
      destroyMobileST();
      destroyPCSticky();

      resetPCStates();
      bindHoverMoveLine_PC();
      bindTabClicks_PC();
      refreshStickyMetrics();

      window.addEventListener("scroll", requestStickyRender);
      window.addEventListener("resize", handleResizeSticky);
      window.addEventListener("load", handleResizeSticky);

      setTimeout(refreshStickyMetrics, 0);
      setTimeout(refreshStickyMetrics, 250);
    }

    function initMobile() {
      destroyPCSticky();
      destroyMobileST();

      if (moveMenuList && moveMenuList.children.length) {
        const firstLi = moveMenuList.children[0];
        firstLi.classList.add("selected");
        Array.from(moveMenuList.children).slice(1).forEach(li => li.classList.remove("selected"));
        applyTextColors(firstLi);
        animateLineToLi(firstLi, 0);
      }

      initMobileST();
    }

    function initByBreakpoint() {
      if (getWindowWidth() > 800) {
        initPC();
      } else {
        initMobile();
      }
    }

    initByBreakpoint();

    let prevMode = getWindowWidth() > 800 ? "pc" : "mo";
    window.addEventListener("resize", () => {
      const nextMode = getWindowWidth() > 800 ? "pc" : "mo";
      if (prevMode !== nextMode) {
        prevMode = nextMode;
        initByBreakpoint();
      }
    });
  })();

  // 7. Leadership Parallax
  const leadership = document.querySelector(".leadership");
  const lsBgItems = document.querySelectorAll(".leadership .bg-item");
  if (leadership && lsBgItems.length >= 5) {
    const lsTl = gsap.timeline({
      scrollTrigger: {
        trigger: leadership,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });

    lsTl.fromTo(
      lsBgItems[0],
      { x: -50, y: 0, opacity: 0.2 },
      { x: 0, y: -100, opacity: 1 },
      0,
    );
    lsTl.fromTo(
      lsBgItems[1],
      { x: 30, y: 0, opacity: 0.2 },
      { x: 0, y: -60, opacity: 1 },
      0,
    );
    lsTl.fromTo(lsBgItems[2], { y: 220 }, { y: -120 }, 0);
    lsTl.fromTo(lsBgItems[3], { y: 100 }, { y: -100 }, 0);
    lsTl.fromTo(lsBgItems[4], { x: -30 }, { x: 0 }, 0);
  }

  // 8. Careers Parallax
  const careers = document.querySelector(".careers");
  const careersImgCover = document.querySelector(".careers .img-cover");
  const careersImg = document.querySelector(".careers .img");
  const careersText = document.querySelector(".careers .align-warp");

  if (careers && careersImgCover && careersImg) {
    const cTl = gsap.timeline({
      scrollTrigger: {
        trigger: careers,
        scrub: true,
        start: "top bottom",
        end: "center center",
      },
    });

    cTl.fromTo(
      careersImgCover,
      { width: "75%", height: "55%" },
      { width: "100%", height: "100%", ease: "none" },
      0,
    );
    cTl.fromTo(careersImg, { y: "15%" }, { y: "0%", ease: "none" }, 0);
    cTl.fromTo(
      careersText,
      { y: "10vh", opacity: 0 },
      { y: "0vh", opacity: 1, ease: "none" },
      0,
    );
  }

  // 9. Additional Sub-Page Animations
  const listItems = document.querySelectorAll('ul[name="fade"] > li');
  listItems.forEach((li) => {
    gsap.fromTo(
      li,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: li,
          start: "top 90%",
        },
      },
    );
  });

  if (document.querySelector(".about .hero .slider")) {
    new Swiper(".about .hero .slider", {
      effect: "fade",
      speed: 1000,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
    });
  }

  if (document.querySelector(".about .history .slider")) {
    new Swiper(".about .history .slider", {
      effect: "fade",
      speed: 1000,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
    });
  }

  if (document.querySelector(".leadership .visual .slider")) {
    new Swiper(".leadership .visual .slider", {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      speed: 4000,
      autoplay: { delay: 0, disableOnInteraction: false },
    });
  }
});
