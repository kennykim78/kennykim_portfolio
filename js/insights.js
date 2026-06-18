/**
 * Insights (Blog/News) renderer
 * - Reads global `window.INSIGHTS` (defined in js/insights-data.js)
 * - Renders the list page (#insightsGrid) and the detail page (#insightArticle)
 * - No backend required: data is a static JS array, so it works on plain Nginx.
 */
(function () {
  "use strict";

  var POSTS = Array.isArray(window.INSIGHTS) ? window.INSIGHTS.slice() : [];

  // Newest first by date (YYYY-MM-DD), fall back to original order
  POSTS.sort(function (a, b) {
    return String(b.date || "").localeCompare(String(a.date || ""));
  });

  var CAT_LABEL = { design: "Design", ai: "AI", plan: "기획·QA", pm: "PM·사업기획" };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fmtDate(d) {
    if (!d) return "";
    var p = String(d).split("-");
    if (p.length !== 3) return d;
    return p[0] + "." + p[1] + "." + p[2];
  }

  function catLabel(c) {
    return CAT_LABEL[c] || (c ? String(c).toUpperCase() : "");
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function getParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
  }

  /* ---------------- LIST PAGE ---------------- */
  function renderList() {
    var grid = byId("insightsGrid");
    if (!grid) return;
    var empty = byId("insightsEmpty");
    var filterBar = byId("insightsFilter");
    var current = "all";

    function draw() {
      var items = POSTS.filter(function (p) {
        return current === "all" || p.category === current;
      });
      grid.innerHTML = items.map(cardHtml).join("");
      if (empty) empty.hidden = items.length !== 0;
    }

    function cardHtml(p) {
      var href = "insight/" + encodeURIComponent(p.id) + "/";
      var hasThumb = !!(p.thumb && String(p.thumb).trim());
      var thumb = hasThumb
        ? '<span class="card-thumb" style="background-image:url(\'' + esc(p.thumb) + '\')"></span>'
        : "";
      var cardClass = hasThumb ? "insight-card has-thumb" : "insight-card no-thumb";
      return (
        '<li class="' + cardClass + '">' +
        '<a href="' + href + '">' +
        thumb +
        '<div class="card-body">' +
        '<div class="card-meta"><span class="card-cat" data-cat="' + esc(p.category) + '">' + esc(catLabel(p.category)) + "</span>" +
        '<span class="card-date">' + esc(fmtDate(p.date)) + "</span></div>" +
        '<h3 class="card-title">' + esc(p.title) + "</h3>" +
        '<p class="card-summary">' + esc(p.summary) + "</p>" +
        '<span class="card-source">출처: ' + esc(p.source || "") + "</span>" +
        "</div></a></li>"
      );
    }

    if (filterBar) {
      filterBar.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter-chip");
        if (!btn) return;
        current = btn.getAttribute("data-cat") || "all";
        Array.prototype.forEach.call(filterBar.querySelectorAll(".filter-chip"), function (b) {
          b.classList.toggle("on", b === btn);
        });
        draw();
      });
    }

    draw();
  }

  /* ---------------- DETAIL PAGE ---------------- */
  function renderDetail() {
    var root = byId("insightArticle");
    if (!root) return;
    // Static pre-rendered page already has the article server-side; leave it untouched.
    if (window.__INSIGHT_PRERENDERED__) return;
    var id = getParam("id");
    // Legacy ?id= URL → consolidate to the canonical clean URL when the post exists.
    if (id && POSTS.some(function (p) { return String(p.id) === String(id); })) {
      window.location.replace("/insight/" + encodeURIComponent(id) + "/");
      return;
    }
    var post = POSTS.filter(function (p) { return String(p.id) === String(id); })[0];

    if (!post) {
      root.innerHTML =
        '<p class="insight-missing">요청하신 글을 찾을 수 없습니다. 목록에서 다시 선택해 주세요.</p>';
      return;
    }

    document.title = post.title + " — Kenny Insights";

    var tags = (post.tags || [])
      .map(function (t) { return '<span class="tag">#' + esc(t) + "</span>"; })
      .join("");

    root.innerHTML =
      '<div class="insight-head">' +
      '<div class="card-meta"><span class="card-cat" data-cat="' + esc(post.category) + '">' + esc(catLabel(post.category)) + "</span>" +
      '<span class="card-date">' + esc(fmtDate(post.date)) + "</span></div>" +
      '<h1 class="insight-title">' + esc(post.title) + "</h1>" +
      (tags ? '<div class="insight-tags">' + tags + "</div>" : "") +
      "</div>" +
      '<div class="insight-body">' + (post.bodyHtml || ("<p>" + esc(post.summary) + "</p>")) + "</div>" +
      '<div class="insight-source-box">' +
      "<p>이 글은 아래 원문을 바탕으로 Kenny가 한국어로 요약·정리한 큐레이션입니다.</p>" +
      '<a href="' + esc(post.sourceUrl) + '" target="_blank" rel="noopener noreferrer nofollow">' +
      "원문 보기 — " + esc(post.source || post.sourceUrl) + " ↗</a>" +
      "</div>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderList();
    renderDetail();
  });
})();
