document.addEventListener("DOMContentLoaded", () => {
  const floatingActions = document.querySelector(".floating-actions");
  if (floatingActions && floatingActions.parentElement !== document.body) {
    document.body.appendChild(floatingActions);
  }

  // GSAP and ScrollTrigger initialization
  gsap.registerPlugin(ScrollTrigger);

  // 1. Header & Drawer
  const appHeader = document.querySelector("[app-header]");
  const hamburger = document.querySelector(".btn-hamburger");
  const drawer = appHeader ? appHeader.querySelector(".drawer") : null;
  const body = document.body;

  if (hamburger && appHeader && drawer) {
    const setDrawerOpen = (open) => {
      appHeader.classList.toggle("drawer-open", open);
      drawer.classList.toggle("on", open);
      hamburger.classList.toggle("on", open);
      body.classList.toggle("drawer-open", open);
      document.documentElement.classList.toggle("drawer-open", open);

      if (open) {
        appHeader.classList.remove("roll");
      }
    };

    hamburger.addEventListener("click", (e) => {
      e.preventDefault();
      const nextOpen = !drawer.classList.contains("on");
      setDrawerOpen(nextOpen);
    });

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setDrawerOpen(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("on")) {
        setDrawerOpen(false);
      }
    });
  }

  const signatureLogo = document.querySelector("[app-header] .logo--signature");
  if (signatureLogo) {
    const signaturePaths = Array.from(signatureLogo.querySelectorAll(".logo-path"));
    const signatureText = signatureLogo.querySelector(".logo-script");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SIGNATURE_ROW_TOLERANCE = 10;
    const SIGNATURE_LETTER_COUNT = 8;

    const signaturePathMeta = signaturePaths.map((path, index) => {
      const length = path.getTotalLength();
      const startPoint = path.getPointAtLength(0);
      const endPoint = path.getPointAtLength(length);
      const bbox = path.getBBox();
      const dx = endPoint.x - startPoint.x;
      const dy = endPoint.y - startPoint.y;
      const isHorizontalDominant = Math.abs(dx) >= Math.abs(dy);
      const reverseDirection = isHorizontalDominant ? dx < 0 : dy < 0;

      return {
        path,
        index,
        length,
        reverseDirection,
        top: bbox.y,
        left: bbox.x,
      };
    });

    const xSortedSignaturePathMeta = [...signaturePathMeta].sort((a, b) => {
      if (Math.abs(a.left - b.left) > 1) {
        return a.left - b.left;
      }

      if (Math.abs(a.top - b.top) > SIGNATURE_ROW_TOLERANCE) {
        return a.top - b.top;
      }

      return a.index - b.index;
    });

    const buildLetterGroups = (pathsByX) => {
      if (pathsByX.length <= SIGNATURE_LETTER_COUNT) {
        return pathsByX.map((meta) => [meta]);
      }

      const gaps = [];
      for (let i = 0; i < pathsByX.length - 1; i += 1) {
        gaps.push({
          at: i,
          gap: pathsByX[i + 1].left - pathsByX[i].left,
        });
      }

      const boundaryCount = Math.min(SIGNATURE_LETTER_COUNT - 1, gaps.length);
      const boundaries = gaps
        .sort((a, b) => b.gap - a.gap)
        .slice(0, boundaryCount)
        .map((item) => item.at)
        .sort((a, b) => a - b);

      const groups = [];
      let start = 0;
      boundaries.forEach((boundaryIndex) => {
        groups.push(pathsByX.slice(start, boundaryIndex + 1));
        start = boundaryIndex + 1;
      });
      groups.push(pathsByX.slice(start));

      return groups;
    };

    const letterGroups = buildLetterGroups(xSortedSignaturePathMeta);

    const orderedSignaturePathMeta = letterGroups
      .map((group) => group.sort((a, b) => {
        if (Math.abs(a.top - b.top) > SIGNATURE_ROW_TOLERANCE) {
          return a.top - b.top;
        }

        if (Math.abs(a.left - b.left) > 1) {
          return a.left - b.left;
        }

        return a.index - b.index;
      }))
      .flat();

    const orderedSignaturePaths = orderedSignaturePathMeta.map((meta) => meta.path);

    if (signaturePaths.length) {
      if (reduceMotion) {
        signatureLogo.classList.add("logo-animated");
        signaturePathMeta.forEach((meta) => {
          meta.path.style.strokeDasharray = "none";
          meta.path.style.strokeDashoffset = "0";
          meta.path.style.fillOpacity = "1";
        });
      } else {
        let signatureTimeline = null;

        const replaySignaturePaths = () => {
          if (signatureTimeline) {
            signatureTimeline.kill();
            signatureTimeline = null;
          }

          signatureLogo.classList.remove("logo-animated");
          signatureLogo.classList.add("is-signing");

          orderedSignaturePathMeta.forEach((meta) => {
            meta.path.style.strokeDasharray = `${meta.length}`;
            meta.path.style.strokeDashoffset = `${meta.reverseDirection ? -meta.length : meta.length}`;
            meta.path.style.fillOpacity = "0";
          });

          signatureTimeline = gsap.timeline({
            defaults: { ease: "power2.out" },
            onComplete: () => {
              signatureLogo.classList.remove("is-signing");
              signatureLogo.classList.add("logo-animated");
              signaturePathMeta.forEach((meta) => {
                meta.path.style.strokeDasharray = "none";
                meta.path.style.strokeDashoffset = "0";
                meta.path.style.fillOpacity = "1";
              });
            },
          });

          signatureTimeline.to(orderedSignaturePaths, {
            strokeDashoffset: 0,
            duration: 0.85,
            stagger: 0.14,
          });

          signatureTimeline.to(orderedSignaturePaths, {
            fillOpacity: 1,
            duration: 0.28,
            stagger: 0.05,
          }, "-=0.18");
        };

        replaySignaturePaths();
        window.setInterval(() => {
          if (document.visibilityState !== "hidden") {
            replaySignaturePaths();
          }
        }, 10000);
      }
    } else if (signatureText) {
      if (reduceMotion) {
        signatureLogo.classList.add("logo-animated");
      } else {
        requestAnimationFrame(() => signatureLogo.classList.add("is-signing"));
        signatureText.addEventListener("animationend", () => {
          signatureLogo.classList.remove("is-signing");
          signatureLogo.classList.add("logo-animated");
        }, { once: true });
      }
    }
  }

  // Header scroll effect
  let lastScrollY = window.scrollY;

  function isInPortfolioListSection() {
    const portfolioList = document.querySelector(".projects .list");
    if (!portfolioList) return false;

    const rect = portfolioList.getBoundingClientRect();

    // Keep behavior consistent across mobile and desktop pinning:
    // treat the section as active while the portfolio list intersects viewport.
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    
    // Safeguard for iOS elastic scrolling/rubber-banding
    const safeScrollY = currentScrollY < 0 ? 0 : currentScrollY;

    if (drawer && drawer.classList.contains("on")) {
      appHeader.classList.remove("roll");
      lastScrollY = safeScrollY;
      return;
    }

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

    const inPortfolioListSection = isInPortfolioListSection();

    if (safeScrollY > 100) {
      if (safeScrollY > lastScrollY) {
        // Scrolling down: Hide header
        appHeader.classList.add("roll");
      } else {
        // Scrolling up: Keep header hidden inside specific sections
        if (inServiceSection || inPortfolioListSection) {
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

  // 1.55. About Top Anchor Menu Sync (click + scroll active state)
  const aboutRoot = document.querySelector('.about');
  const aboutAnchorMenu = aboutRoot ? aboutRoot.querySelector('.anchor-menu') : null;
  if (aboutRoot && aboutAnchorMenu) {
    const aboutAnchorLinks = Array.from(aboutAnchorMenu.querySelectorAll('a'));
    const aboutSections = [
      aboutRoot.querySelector('section.philosophy'),
      aboutRoot.querySelector('section.core-value'),
      aboutRoot.querySelector('section.history'),
      aboutRoot.querySelector('section.vision'),
    ];

    const setActiveAboutAnchor = (index) => {
      aboutAnchorLinks.forEach((link, i) => {
        link.classList.toggle('on', i === index);
      });
    };

    aboutAnchorLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = aboutSections[index];
        if (!targetSection) return;

        const headerEl = document.querySelector('[app-header] header');
        const headerOffset = headerEl ? headerEl.offsetHeight : 0;
        const anchorOffset = aboutAnchorMenu ? aboutAnchorMenu.offsetHeight : 0;
        const targetY = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset - anchorOffset - 8;

        setActiveAboutAnchor(index);
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      });
    });

    aboutSections.forEach((section, index) => {
      if (!section) return;
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveAboutAnchor(index),
        onEnterBack: () => setActiveAboutAnchor(index),
      });
    });

    setActiveAboutAnchor(0);
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
    ".text-interaction > div, .services > div, .leadership .align-warp",
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
      const vw = window.innerWidth;
      const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 10;
      const gap = fontSize * 8; // 8rem (gap between panels in CSS)
      const padding = fontSize * 6; // 6rem (initial padding)
      const count = panels.length;
      // 마지막 패널의 왼쪽 오프셋 = 패널 인덱스 * (vw + gap) + padding
      // 총 이동 거리 = 마지막 패널의 우측 끝 - 뷰포트 너비
      if (count <= 1) return 0;
      const lastPanelLeft = (count - 1) * vw + (count - 1) * gap + padding;
      return Math.max(0, lastPanelLeft);
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

    if (lsBgItems[5]) {
      lsTl.fromTo(lsBgItems[5], { x: 40, y: 80, opacity: 0.3 }, { x: 0, y: -80, opacity: 1 }, 0);
    }

    if (lsBgItems[6]) {
      lsTl.fromTo(lsBgItems[6], { x: -20, y: 60, opacity: 0.3 }, { x: 0, y: -70, opacity: 1 }, 0);
    }
  }

  // 8. Careers Parallax
  const careers = document.querySelector(".careers");
  const careersImgCover = document.querySelector(".careers .img-cover");
  const careersImg = document.querySelector(".careers .img");
  const careersText = document.querySelector(".careers .align-warp");

  if (careers && careersImgCover && careersImg) {
    // FOUC 방지: ScrollTrigger 준비 전에 즉시 초기 상태 지정
    gsap.set(careersImgCover, { width: "75%", height: "55%", opacity: 0 });

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
      { width: "75%", height: "55%", opacity: 0 },
      { width: "100%", height: "100%", opacity: 1, ease: "none" },
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
  // 9. Premium Portfolio Cinematic Stack Animation (Desktop Overlay & Responsive Fallback)
  const animContainer = document.querySelector('.portfolio-animation-container');
  const listContainer = document.querySelector('.projects .list');
  const listUl = document.querySelector('.projects .list ul[name="fade"]');

  // 외부 데이터(portfolioData)를 기반으로 동적 DOM 렌더링을 안전하게 우선 수행 (id 바인딩 추가)
  if (listUl && typeof window !== "undefined" && window.portfolioData) {
    listUl.innerHTML = window.portfolioData.map((item, idx) => `
      <li id="portItem${idx}">
        <div class="img">
          <img cdn-img src="${item.img}" alt="${item.title}" />
        </div>
        <div class="info-box">
          <h3 class="title">${item.title}</h3>
          <p class="category">${item.category}</p>
          <p class="desc">${item.desc}</p>
        </div>
      </li>
    `).join('');
  }

  // 포트폴리오 탭 메뉴 동적 생성 및 자석 밑줄/양방향 연동 추가
  const portTabsUl = document.getElementById('portfolioTabs');
  const portTabsAside = document.querySelector('.portfolio-tab-wrapper-style');
  if (portTabsUl && typeof window !== "undefined" && window.portfolioData) {
    portTabsUl.innerHTML = window.portfolioData.map((item, idx) => `
      <li class="${idx === 0 ? 'selected' : ''}">
        <a href="#portItem${idx}"><em>${item.shortTitle}</em></a>
      </li>
    `).join('');
  }

  const portTabsWrapper = document.querySelector('.portfolio-tab-list-style');
  const portTabsLineSpan = document.querySelector('.portfolio-tab-list-style .tab-on-icon.move-line > span');
  let currentPortfolioTabIndex = -1;

  function getPortLiMetrics(li) {
    if (!li) return null;
    const leftOuter = li.offsetLeft;
    const a = li.querySelector("a");
    if (!a) return null;
    const leftInner = a.offsetLeft;
    const width = a.offsetWidth;
    return { left: leftOuter + leftInner, width: width };
  }

  function animatePortLineToLi(li, durSeconds) {
    if (!portTabsLineSpan) return;
    const m = getPortLiMetrics(li);
    if (!m) return;

    gsap.to(portTabsLineSpan, {
      left: m.left,
      width: m.width,
      duration: durSeconds !== undefined ? durSeconds : 0.3,
      ease: "power2.out",
      overwrite: "auto"
    });
  }

  function autoScrollTabCenter(targetLi) {
    if (!portTabsWrapper || !targetLi) return;
    const wrapperWidth = portTabsWrapper.offsetWidth;
    const liLeft = targetLi.offsetLeft;
    const liWidth = targetLi.offsetWidth;
    const targetScrollLeft = liLeft - (wrapperWidth / 2) + (liWidth / 2);
    
    portTabsWrapper.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
  }

  function syncPortfolioTabActive(idx) {
    if (!portTabsUl || currentPortfolioTabIndex === idx) return;
    const targetLi = portTabsUl.children[idx];
    if (!targetLi) return;

    currentPortfolioTabIndex = idx;
    portTabsUl.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
    targetLi.classList.add('selected');
    animatePortLineToLi(targetLi, 0.3);
    
    // 가로 스크롤 오토 포커스 슬라이딩
    autoScrollTabCenter(targetLi);
  }

  function getPortfolioPinnedOffset() {
    const header = document.querySelector('[app-header] header');
    const headerHeight = header ? header.offsetHeight : 78;
    const tabHeight = portTabsAside ? portTabsAside.offsetHeight : 72;
    return headerHeight + tabHeight;
  }

  function getPortfolioTabSyncOffset() {
    return getPortfolioPinnedOffset() + 8;
  }

  function getPortfolioActiveIndexByTopLine() {
    const syncLine = getPortfolioTabSyncOffset();
    let activeIdx = 0;

    listItems.forEach((item, idx) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop <= syncLine + 1) {
        activeIdx = idx;
      }
    });

    return Math.max(0, Math.min(listItems.length - 1, activeIdx));
  }

  function updatePortfolioTabExit(progress, panelCount, contentProgressCap) {
    if (!portTabsAside || window.innerWidth < 1024) return;

    const safeCap = Math.max(0.01, Math.min(0.99, contentProgressCap || 0.9));
    let releaseProgress = 0;
    if (progress > safeCap) {
      releaseProgress = Math.max(0, Math.min(1, (progress - safeCap) / (1 - safeCap)));
    }
    const exitDistance = portTabsAside.offsetHeight + 40;

    gsap.set(portTabsAside, {
      y: -exitDistance * releaseProgress,
      autoAlpha: 1 - releaseProgress,
      pointerEvents: releaseProgress > 0.99 ? "none" : "auto",
    });
  }

  // 초기 라인 배치
  if (portTabsUl && portTabsUl.children.length > 0) {
    setTimeout(() => {
      const selected = portTabsUl.querySelector("li.selected");
      if (selected) {
        animatePortLineToLi(selected, 0);
      }
    }, 200);
  }

  // 동적으로 렌더링된 li 요소들을 획득하여 애니메이션 바인딩
  const listItems = document.querySelectorAll('ul[name="fade"] > li');

  if (listContainer && listItems.length > 0) {
    let scrollTriggerInstance = null;
    let desktopTimeline = null;
    let mobileTabSyncSTs = [];
    let mobileRevealTweens = [];

    function initPortfolioAnimation() {
      // 1. 기존 리소스 클리어
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill(true);
        scrollTriggerInstance = null;
      }
      if (desktopTimeline) {
        desktopTimeline.kill();
        desktopTimeline = null;
      }
      mobileTabSyncSTs.forEach(st => st.kill());
      mobileTabSyncSTs = [];
      mobileRevealTweens.forEach(tween => tween.kill());
      mobileRevealTweens = [];

      if (portTabsAside) {
        gsap.set(portTabsAside, { clearProps: "transform,opacity,visibility,pointerEvents" });
      }
      currentPortfolioTabIndex = -1;

      gsap.killTweensOf(listItems);
      listItems.forEach(li => {
        gsap.killTweensOf(li);
        const img = li.querySelector('.img');
        const info = li.querySelector('.info-box');
        if (img) {
          gsap.killTweensOf(img);
          gsap.set(img, { clearProps: "all" });
        }
        if (info) {
          gsap.killTweensOf(info);
          gsap.set(info, { clearProps: "all" });
        }
        gsap.set(li, { clearProps: "all" });
        li.classList.remove('active');
      });

      // 2. 분기 처리 (1024px 이상 해상도만 프리미엄 시네마틱 오버랩 핀 적용)
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // 첫 번째 카드는 로드 시 100% 활성화, 나머지는 opacity 0 / 아래 대기
        listItems.forEach((li, idx) => {
          const img = li.querySelector('.img');
          const info = li.querySelector('.info-box');
          
          if (idx === 0) {
            gsap.set(li, { opacity: 1 });
            gsap.set([img, info], { scale: 1, opacity: 1, y: 0 });
            li.classList.add('active');
          } else {
            gsap.set(li, { opacity: 0 });
            gsap.set([img, info], { scale: 0.82, opacity: 0, y: 150 });
          }
        });

        desktopTimeline = gsap.timeline();

        // 33개의 아이템 간 교차 오버랩 루프 (각 스왑 호출마다 탭 동기화 트리거 추가)
        for (let i = 0; i < listItems.length - 1; i++) {
          const currentLi = listItems[i];
          const nextLi = listItems[i + 1];
          
          const curImg = currentLi.querySelector('.img');
          const curInfo = currentLi.querySelector('.info-box');
          const nextImg = nextLi.querySelector('.img');
          const nextInfo = nextLi.querySelector('.info-box');

          // (1) 현재 카드가 위로 작아지며 날아감과 동시에 (2) 다음 카드가 아래서 자라나며 등장
          desktopTimeline
            // 현재 카드가 위로 상승하며 페이드 아웃
            .to(curImg, { scale: 0.82, opacity: 0, y: -150, ease: "power2.inOut", duration: 0.8 })
            .to(curInfo, { scale: 0.85, opacity: 0, y: -80, ease: "power2.inOut", duration: 0.8 }, "<")
            .call(() => {
              currentLi.classList.remove('active');
            }, null, "-=0.4")
            
            // 다음 카드가 레이어 opacity:1 처리되며 아래서 솟아오름
            .to(nextLi, { opacity: 1, duration: 0.1 }, "-=0.8")
            .to(nextImg, { scale: 1, opacity: 1, y: 0, ease: "power2.inOut", duration: 0.8 }, "-=0.8")
            .to(nextInfo, { scale: 1, opacity: 1, y: 0, ease: "power2.inOut", duration: 0.8 }, "<")
            .call(() => {
              nextLi.classList.add('active');
            }, null, "-=0.4")

            // 카드 안착 후 읽을 수 있도록 유지(Hold) 구간 생성
            .to({}, { duration: 0.5 });
        }

        // 전체 컨테이너 Pin 및 실시간 onUpdate 탭 추적 결합
        const panelCount = listItems.length;
        const baseScrollDistance = Math.max(1, panelCount - 1) * 750;
        const tabExitScrollDistance = 420;
        const totalScrollDistance = baseScrollDistance + tabExitScrollDistance;
        const contentProgressCap = baseScrollDistance / totalScrollDistance;

        scrollTriggerInstance = ScrollTrigger.create({
          trigger: listContainer,
          start: () => `top top+=${getPortfolioPinnedOffset()}`,
          end: `+=${totalScrollDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          animation: desktopTimeline,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const contentProgress = Math.min(1, progress / contentProgressCap);
            const rawIndex = contentProgress * (panelCount - 1);
            const idx = Math.max(0, Math.min(panelCount - 1, Math.floor(rawIndex + 0.6)));

            updatePortfolioTabExit(progress, panelCount, contentProgressCap);
            
            const targetLi = portTabsUl.children[idx];
            if (targetLi && !targetLi.classList.contains('selected')) {
              portTabsUl.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
              targetLi.classList.add('selected');
              animatePortLineToLi(targetLi, 0.3);
              autoScrollTabCenter(targetLi);
            }
          }
        });

      } else {
        if (portTabsAside) {
          gsap.set(portTabsAside, { clearProps: "transform,opacity,visibility,pointerEvents" });
        }

        // 모바일/태블릿: 순차적으로 아래서 위로 부드럽게 페이드인 등장 (스크롤 겹침 없음, onEnter 탭 연동 추가)
        listItems.forEach((li, idx) => {
          const revealTween = gsap.fromTo(
            li,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: li,
                start: "top 85%",
                once: true,
              },
            },
          );

          mobileRevealTweens.push(revealTween);
        });

        const syncST = ScrollTrigger.create({
          trigger: listContainer,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => syncPortfolioTabActive(getPortfolioActiveIndexByTopLine()),
          onEnterBack: () => syncPortfolioTabActive(getPortfolioActiveIndexByTopLine()),
          onUpdate: () => syncPortfolioTabActive(getPortfolioActiveIndexByTopLine()),
          onRefresh: () => syncPortfolioTabActive(getPortfolioActiveIndexByTopLine()),
        });

        mobileTabSyncSTs.push(syncST);
      }
    }

    // 초기 활성화
    initPortfolioAnimation();

    // 탭 클릭 수직 스크롤 양방향 연동 제어 바인딩
    if (portTabsUl) {
      portTabsUl.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          const li = a.closest('li');
          if (!li) return;
          const idx = Array.from(portTabsUl.children).indexOf(li);
          if (idx < 0) return;

          syncPortfolioTabActive(idx);

          if (window.innerWidth >= 1024 && scrollTriggerInstance) {
            const startScroll = scrollTriggerInstance.start;
            const endScroll = scrollTriggerInstance.end;
            const totalDist = endScroll - startScroll;
            const panelCount = listItems.length;

            const progress = idx / (panelCount - 1);
            const targetY = startScroll + (totalDist * progress);

            window.scrollTo({
              top: targetY + 2,
              behavior: "smooth"
            });
          } else {
            const targetCard = listItems[idx];
            if (targetCard) {
              const stickyOffset = getPortfolioTabSyncOffset();
              const y = targetCard.getBoundingClientRect().top + window.scrollY - stickyOffset;
              window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
            }
          }
        });
      });
    }

    // 리사이즈 디바운스 및 재정비
    let prevWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      if (Math.abs(window.innerWidth - prevWidth) > 50) {
        prevWidth = window.innerWidth;
        initPortfolioAnimation();
      }
    });
  }

  if (document.querySelector(".about .hero .slider")) {
    new Swiper(".about .hero .slider", {
      effect: "fade",
      speed: 1000,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
    });
  }

  if (document.querySelector(".about .history .slider")) {
    const historySwiper = new Swiper(".about .history .slider", {
      effect: "fade",
      speed: 1000,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
    });

    const historySection = document.querySelector(".about section.history");
    if (historySection) {
      const navLinks = Array.from(historySection.querySelectorAll(".menu nav a"));
      const historyGroups = Array.from(historySection.querySelectorAll(".content > ul"));

      const setActiveHistoryNav = (index) => {
        if (!navLinks.length || !historyGroups.length) return;
        const safeIndex = Math.max(0, Math.min(index, Math.min(navLinks.length, historyGroups.length) - 1));

        navLinks.forEach((link, i) => {
          link.classList.toggle("on", i === safeIndex);
        });

        if (historySwiper && historySwiper.realIndex !== safeIndex) {
          historySwiper.slideToLoop(safeIndex, 600);
        }
      };

      historyGroups.forEach((group, index) => {
        ScrollTrigger.create({
          trigger: group,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveHistoryNav(index),
          onEnterBack: () => setActiveHistoryNav(index),
        });
      });

      navLinks.forEach((link, index) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetGroup = historyGroups[index];
          if (!targetGroup) return;

          const headerEl = document.querySelector("[app-header] header");
          const headerOffset = headerEl ? headerEl.offsetHeight : 0;
          const targetY = targetGroup.getBoundingClientRect().top + window.scrollY - headerOffset - 16;

          setActiveHistoryNav(index);
          window.scrollTo({ top: targetY, behavior: "smooth" });
        });
      });

      setActiveHistoryNav(0);
    }
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

  const floatingTopButton = document.querySelector(".floating-action-top");
  if (floatingTopButton) {
    floatingTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
