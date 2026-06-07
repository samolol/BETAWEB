/*
Sequence animation on scroll when visible.
*/
(function () {
  const style = document.createElement("style");
  style.textContent = `
    .animate-on-scroll { animation-play-state: paused !important; }
    .animate-on-scroll.animate { animation-play-state: running !important; }
  `;
  document.head.appendChild(style);

  const once = true;
  if (!window.__inViewIO) {
    window.__inViewIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          if (once) window.__inViewIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
  }

  window.initInViewAnimations = function (selector = ".animate-on-scroll") {
    document.querySelectorAll(selector).forEach((el) => window.__inViewIO.observe(el));
  };

  document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("counter-trigger")) startCounters(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".counter-trigger").forEach((el) => {
    if (!el.classList.contains("hero-reveal-stats")) observer.observe(el);
  });

  function startCounters(container) {
    if (!container || container.dataset.counted === "true") return;
    container.dataset.counted = "true";
    container.querySelectorAll("[data-target]").forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target"));
      const suffix = counter.getAttribute("data-suffix") || "";
      const prefix = counter.getAttribute("data-prefix") || "";
      const duration = 1500;
      const startTime = performance.now();

      function update(t) {
        const p = Math.min((t - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        counter.innerText = prefix + (target * ease).toFixed(target % 1 === 0 ? 0 : 1) + suffix;
        if (p < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    });
  }

  window.startCountersOnce = startCounters;

  const textSection = document.getElementById("scroll-reveal-section");
  const words = document.querySelectorAll(".reveal-word");
  if (textSection && words.length) {
    window.addEventListener("scroll", () => {
      const rect = textSection.getBoundingClientRect();
      const winH = window.innerHeight;
      const startReveal = winH * 0.9;
      const endReveal = winH * 0.4;
      let progress = (startReveal - rect.top) / (startReveal - endReveal);
      progress = Math.max(0, Math.min(1, progress));
      const activeCount = Math.floor(progress * words.length);
      words.forEach((w, i) => i < activeCount ? w.classList.add("active") : w.classList.remove("active"));
    }, { passive: true });
  }

  const workflowSteps = document.querySelectorAll(".workflow-step-content");
  const stepIndicators = document.querySelectorAll(".step-trigger");
  const workflowImages = document.querySelectorAll(".workflow-img");
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const index = entry.target.getAttribute("data-step");

      stepIndicators.forEach((ind) => {
        const line = ind.querySelector(".step-indicator");
        const text = ind.querySelector(".step-text");
        const active = ind.getAttribute("data-step") === index;
        ind.classList.toggle("is-active", active);
        line?.classList.toggle("active", active);
        text?.classList.toggle("active", active);
      });

      workflowImages.forEach((img) => {
        const active = img.getAttribute("data-step") === index;
        img.classList.toggle("opacity-0", !active);
        img.classList.toggle("scale-95", !active);
        img.classList.toggle("opacity-100", active);
        img.classList.toggle("scale-100", active);
      });
    });
  }, { rootMargin: "-40% 0px -40% 0px" });

  workflowSteps.forEach((step) => stepObserver.observe(step));

  const form = document.getElementById("lead-form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const phone = (data.get("phone") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      if (!name || !email) {
        if (status) {
          status.textContent = "Doplňte prosím jméno a e-mail.";
          status.className = "form-status is-error text-xs font-geist min-h-[1rem]";
        }
        return;
      }

      const subject = encodeURIComponent("Dotaz | WebNaMíru.online");
      const body = encodeURIComponent(
        `Jméno: ${name}\nE-mail: ${email}\nTelefon: ${phone || "neuveden"}\n\nZpráva:\n${message || "Neuvedeno"}`
      );

      if (status) {
        status.textContent = "Otevírám e-mail. Když ne, napište na sam@webnamiru.online.";
        status.className = "form-status is-success text-xs font-geist min-h-[1rem]";
      }

      window.location.href = `mailto:sam@webnamiru.online?subject=${subject}&body=${body}`;
    });
  }
});

!function(){
  if(!window.UnicornStudio){
    window.UnicornStudio={isInitialized:!1};
    var i=document.createElement("script");
    i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
    i.onload=function(){
      window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0);
    };
    (document.head || document.body).appendChild(i);
  }
}();

/* Process section: real sticky lock for desktop.
   The left column stays fixed while the right steps scroll, then releases at section end. */
(function () {
  function initProcessStickyLock() {
    const section = document.getElementById("workflows");
    if (!section) return;

    const layout = section.querySelector(".process-layout");
    const left = section.querySelector(".process-left-sticky");
    const right = section.querySelector(".process-right-scroll");
    if (!layout || !left || !right) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    let ticking = false;

    function reset() {
      section.classList.remove("process-sticky-js-enabled");
      left.classList.remove("is-fixed", "is-bottom");
      document.documentElement.style.removeProperty("--process-left-left");
      document.documentElement.style.removeProperty("--process-left-width");
      document.documentElement.style.removeProperty("--process-left-height");
    }

    function update() {
      ticking = false;

      if (!desktop.matches) {
        reset();
        return;
      }

      section.classList.add("process-sticky-js-enabled");

      const nav = document.querySelector("nav");
      const navBottom = nav ? Math.max(0, nav.getBoundingClientRect().bottom) : 0;
      const topOffset = Math.round(navBottom + 24);
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const leftHeight = Math.max(420, viewportH - topOffset - 16);

      const layoutRect = layout.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const sectionTop = scrollY + sectionRect.top;
      const sectionBottom = scrollY + sectionRect.bottom;
      const leftWidth = layoutRect.width / 2;
      const leftLeft = layoutRect.left;

      document.documentElement.style.setProperty("--process-sticky-top", `${topOffset}px`);
      document.documentElement.style.setProperty("--process-left-left", `${leftLeft}px`);
      document.documentElement.style.setProperty("--process-left-width", `${leftWidth}px`);
      document.documentElement.style.setProperty("--process-left-height", `${leftHeight}px`);

      const lockStart = sectionTop - topOffset;
      const lockEnd = sectionBottom - topOffset - leftHeight;

      left.classList.remove("is-fixed", "is-bottom");

      if (scrollY < lockStart) {
        return;
      }

      if (scrollY >= lockEnd) {
        left.classList.add("is-bottom");
        return;
      }

      left.classList.add("is-fixed");
    }

    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("orientationchange", requestUpdate);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(requestUpdate).catch(() => {});
    }

    requestUpdate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProcessStickyLock);
  } else {
    initProcessStickyLock();
  }
})();


/* Targeted update: animated reveal of selected hero content after a small downward scroll */
(function () {
  function initHeroScrollReveal() {
    const items = Array.from(document.querySelectorAll(".hero-reveal-on-scroll"));
    if (!items.length) return;

    const stats = document.querySelector(".hero-reveal-stats");
    const cards = stats ? Array.from(stats.querySelectorAll(".metric-card")) : [];
    let revealed = false;
    let ticking = false;

    items.forEach((item, index) => {
      item.style.setProperty("--hero-delay", `${index * 95}ms`);
    });

    cards.forEach((card, index) => {
      card.style.setProperty("--metric-delay", `${240 + index * 130}ms`);
    });

    function showItems() {
      if (revealed) return;
      revealed = true;

      items.forEach((item) => item.classList.add("is-visible"));

      window.setTimeout(() => {
        if (stats && typeof window.startCountersOnce === "function") {
          window.startCountersOnce(stats);
        }
      }, 360);

      window.removeEventListener("scroll", requestCheck);
    }

    function checkScroll() {
      ticking = false;
      const y = window.scrollY || window.pageYOffset || 0;
      if (y > 38) showItems();
    }

    function requestCheck() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(checkScroll);
      }
    }

    requestCheck();
    window.addEventListener("scroll", requestCheck, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeroScrollReveal);
  } else {
    initHeroScrollReveal();
  }
})();


// Cookie consent
(function () {
  const STORAGE_KEY = "webnamiru_cookie_consent";

  function initCookieConsent() {
    const banner = document.getElementById("cookie-consent");
    const accept = document.getElementById("cookie-accept");
    const decline = document.getElementById("cookie-decline");

    if (!banner || !accept || !decline) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      window.setTimeout(() => {
        banner.classList.add("is-visible");
      }, 700);
    }

    function saveConsent(value) {
      localStorage.setItem(STORAGE_KEY, value);
      banner.classList.remove("is-visible");
    }

    accept.addEventListener("click", () => saveConsent("accepted"));
    decline.addEventListener("click", () => saveConsent("necessary"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCookieConsent);
  } else {
    initCookieConsent();
  }
})();


// Premium scroll experience
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initScrollProgress() {
    const bar = document.querySelector(".scroll-progress__bar");
    if (!bar) return;

    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function initNavScrollState() {
    const nav = document.querySelector("nav");
    if (!nav) return;

    function update() {
      nav.classList.toggle("scroll-nav-active", window.scrollY > 18);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initRevealOnScroll() {
    const selectors = [
      "section .container > div",
      ".why-web-reason-card",
      ".why-me-card",
      ".pricing-card",
      ".faq-card",
      ".faq-item",
      ".contact-info-panel",
      ".contact-form-panel",
      ".workflow-step-content",
      ".example-card",
      ".legal-content section"
    ];

    const elements = Array.from(document.querySelectorAll(selectors.join(",")))
      .filter((el) => !el.closest("nav") && !el.classList.contains("scroll-progress"));

    elements.forEach((el, index) => {
      if (el.classList.contains("workflow-step-content") || el.classList.contains("why-web-reason-card") || el.classList.contains("why-me-card") || el.classList.contains("faq-item") || el.classList.contains("example-card")) {
        el.classList.add("scroll-scale");
      } else {
        el.classList.add("scroll-fade");
      }

      el.style.setProperty("--scroll-delay", `${Math.min((index % 4) * 70, 210)}ms`);
    });

    if (reduceMotion) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    });

    elements.forEach((el) => observer.observe(el));
  }

  function initSoftGlowSections() {
    const sections = Array.from(document.querySelectorAll("section"))
      .filter((section) => !section.closest("footer"));

    sections.forEach((section, index) => {
      if (index === 0) return;
      section.classList.add("section-soft-glow");
    });

    if (reduceMotion) return;

    function updateGlow() {
      const center = window.innerHeight / 2;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        if (!visible) return;

        const progress = Math.min(1, Math.max(0, (center - rect.top) / Math.max(rect.height, 1)));
        section.style.setProperty("--glow-x", `${35 + progress * 30}%`);
        section.style.setProperty("--glow-y", `${18 + progress * 22}%`);
      });
    }

    updateGlow();
    window.addEventListener("scroll", updateGlow, { passive: true });
    window.addEventListener("resize", updateGlow);
  }

  function initCardMagneticHover() {
    const cards = Array.from(document.querySelectorAll(
      ".why-web-reason-card, .why-me-card, .pricing-card, .faq-item, .contact-form-panel, .contact-info-panel, .example-card, .workflow-step-content"
    ));

    cards.forEach((card) => {
      card.classList.add("card-magnetic");

      if (reduceMotion) return;

      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translate3d(${x * 4}px, ${y * 4}px, 0)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  function initSoftParallax() {
    if (reduceMotion) return;

    const targets = Array.from(document.querySelectorAll(
      ".hero-offer-pill, .workflow-img, .pricing-card, .faq-card"
    ));

    targets.forEach((target) => target.classList.add("parallax-soft"));

    function update() {
      const viewport = window.innerHeight;

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewport) return;

        const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
        target.style.setProperty("--parallax-y", `${progress * -10}px`);
      });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function init() {
    initScrollProgress();
    initNavScrollState();
    initRevealOnScroll();
    initSoftGlowSections();
    initCardMagneticHover();
    initSoftParallax();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


// Restore workflow sticky after premium scroll effects
(function () {
  function restoreWorkflowSticky() {
    const workflow = document.getElementById("workflows");
    if (!workflow) return;

    const stickyLeft = workflow.querySelector(".workflow-sticky-left, .sticky.top-0");
    const layout = workflow.querySelector(".workflow-sticky-layout");

    [workflow, stickyLeft, layout].forEach((el) => {
      if (!el) return;
      el.classList.remove("scroll-fade", "scroll-scale", "card-magnetic", "parallax-soft");
      el.classList.add("is-visible");
      el.style.transform = "";
      el.style.filter = "";
      el.style.opacity = "";
    });

    if (stickyLeft && window.matchMedia("(min-width: 1024px)").matches) {
      stickyLeft.style.position = "sticky";
      stickyLeft.style.top = "0px";
      stickyLeft.style.height = "100vh";
      stickyLeft.style.minHeight = "100vh";
      stickyLeft.style.zIndex = "5";
    }

    workflow.style.overflow = "visible";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restoreWorkflowSticky);
  } else {
    restoreWorkflowSticky();
  }

  window.addEventListener("resize", restoreWorkflowSticky);
})();


// FINAL: true pinned split scroll for process section
(function () {
  function initProcessPinnedScroll() {
    const section = document.getElementById("workflows");
    if (!section) return;

    const left = section.querySelector(".process-pinned-left") || section.querySelector(".sticky.top-0");
    const right = section.querySelector(".process-pinned-right") || section.querySelector(".workflow-step-content")?.parentElement;
    if (!left || !right) return;

    const desktop = window.matchMedia("(min-width: 1024px)");

    let baseLeft = 0;
    let baseWidth = 0;
    let sectionTop = 0;
    let sectionBottom = 0;
    let ticking = false;

    function clearPin() {
      left.classList.remove("is-js-pinned", "is-js-released", "is-js-before");
      left.style.left = "";
      left.style.width = "";
      left.style.position = "";
      left.style.top = "";
      left.style.bottom = "";
      left.style.height = "";
      left.style.minHeight = "";
      left.style.maxHeight = "";
    }

    function measure() {
      if (!desktop.matches) {
        clearPin();
        return;
      }

      clearPin();

      const leftRect = left.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();

      baseLeft = leftRect.left;
      baseWidth = leftRect.width;
      sectionTop = window.scrollY + sectionRect.top;
      sectionBottom = sectionTop + section.offsetHeight;

      update();
    }

    function update() {
      if (!desktop.matches) {
        clearPin();
        ticking = false;
        return;
      }

      const y = window.scrollY;
      const vh = window.innerHeight;

      left.style.left = `${baseLeft}px`;
      left.style.width = `${baseWidth}px`;

      const pinStart = sectionTop;
      const pinEnd = sectionBottom - vh;

      if (y < pinStart) {
        left.classList.add("is-js-before");
        left.classList.remove("is-js-pinned", "is-js-released");
        left.style.left = "";
        left.style.width = "";
      } else if (y >= pinStart && y < pinEnd) {
        left.classList.add("is-js-pinned");
        left.classList.remove("is-js-before", "is-js-released");
        left.style.left = `${baseLeft}px`;
        left.style.width = `${baseWidth}px`;
        left.style.top = "0px";
        left.style.height = "100vh";
        left.style.minHeight = "100vh";
        left.style.maxHeight = "100vh";
        left.style.bottom = "";
      } else {
        left.classList.add("is-js-released");
        left.classList.remove("is-js-before", "is-js-pinned");
        left.style.left = "0px";
        left.style.width = `${baseWidth}px`;
        left.style.top = "auto";
        left.style.bottom = "0px";
        left.style.height = "100vh";
        left.style.minHeight = "100vh";
        left.style.maxHeight = "100vh";
      }

      ticking = false;
    }

    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    // Remove classes from premium effects that can break pinning.
    [section, left].forEach((el) => {
      el.classList.remove("scroll-fade", "scroll-scale", "card-magnetic", "parallax-soft");
      el.classList.add("is-visible");
      el.style.transform = "";
      el.style.filter = "";
      el.style.opacity = "";
    });

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    // Wait for fonts/images/layout.
    setTimeout(measure, 80);
    setTimeout(measure, 450);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProcessPinnedScroll);
  } else {
    initProcessPinnedScroll();
  }
})();


// Formspree submit handling
(function () {
  function initFormspreeSubmit() {
    const form = document.getElementById("lead-form");
    const status = document.getElementById("form-status");

    if (!form || !status) return;

    form.setAttribute("action", "https://formspree.io/f/meevolra");
    form.setAttribute("method", "POST");
    form.removeAttribute("enctype");

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton ? submitButton.textContent : "";

      status.textContent = "Odesílám...";
      status.classList.remove("text-green-300", "text-red-300");
      status.classList.add("text-neutral-400");

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.style.opacity = "0.65";
        submitButton.style.cursor = "wait";
      }

      try {
        const formData = new FormData(form);
        const response = await fetch("https://formspree.io/f/meevolra", {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Formspree error");
        }

        form.reset();
        status.textContent = "Úspěšně zasláno, brzy se ozvu.";
        status.classList.remove("text-neutral-400", "text-red-300");
        status.classList.add("text-green-300");

        if (submitButton) {
          submitButton.textContent = "Odesláno";
        }
      } catch (error) {
        status.textContent = "Odeslání se nepovedlo. Zkuste to prosím znovu, nebo napište na sam@webnamiru.online.";
        status.classList.remove("text-neutral-400", "text-green-300");
        status.classList.add("text-red-300");
      } finally {
        if (submitButton) {
          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.style.opacity = "";
            submitButton.style.cursor = "";
            if (submitButton.textContent === "Odesláno") {
              submitButton.textContent = originalButtonText || "Odeslat nezávazný dotaz";
            }
          }, 2400);
        }
      }
    }, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFormspreeSubmit);
  } else {
    initFormspreeSubmit();
  }
})();


// Mobile menu and responsive polish
(function () {
  const RESPONSIVE_CSS = `
    html, body {
      max-width: 100%;
      overflow-x: hidden;
    }

    img, video, canvas, svg {
      max-width: 100%;
    }

    body.mobile-menu-lock {
      overflow: hidden;
    }

    .mobile-menu-toggle,
    .mobile-menu-panel {
      display: none;
    }

    @media (max-width: 1023px) {
      #workflows,
      #workflows.process-pinned-section {
        overflow: hidden !important;
      }

      #workflows .process-pinned-left,
      #workflows .workflow-sticky-left,
      #workflows .sticky.top-0 {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        bottom: auto !important;
        width: 100% !important;
        height: auto !important;
        min-height: auto !important;
        max-height: none !important;
      }

      #workflows .process-pinned-layout,
      #workflows .process-layout {
        display: flex !important;
        flex-direction: column !important;
      }

      #workflows .process-right-scroll,
      #workflows .process-pinned-right,
      #workflows .lg\\:w-1\\/2 {
        width: 100% !important;
      }
    }

    @media (max-width: 767px) {
      nav {
        top: 12px !important;
        padding-left: 12px !important;
        padding-right: 12px !important;
      }

      nav > div {
        width: 100% !important;
        max-width: calc(100vw - 24px) !important;
        min-height: 58px;
        padding: 8px !important;
        gap: 8px !important;
        border-radius: 18px !important;
      }

      nav .nav-domain {
        flex: 1 1 auto;
        min-width: 0;
        max-width: calc(100vw - 96px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 12px 14px !important;
        border-radius: 13px !important;
      }

      nav .nav-title {
        display: none !important;
      }

      nav .nav-cta {
        display: none !important;
      }

      nav .hidden.md\\:flex,
      nav .md\\:flex {
        display: none !important;
      }

      .mobile-menu-toggle {
        display: inline-flex !important;
        width: 44px;
        height: 44px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        border: 1px solid rgba(147,197,253,0.20);
        border-radius: 14px;
        background:
          linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.12)),
          rgba(255,255,255,0.04);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.08),
          0 0 24px rgba(37,99,235,0.10);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        cursor: pointer;
        position: relative;
        z-index: 10001;
        transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
      }

      .mobile-menu-toggle span {
        width: 17px;
        height: 1.5px;
        border-radius: 99px;
        background: rgba(255,255,255,0.88);
        transition: transform 0.28s ease, opacity 0.2s ease;
      }

      nav.mobile-menu-open .mobile-menu-toggle {
        border-color: rgba(196,181,253,0.42);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.10),
          0 0 30px rgba(124,58,237,0.18);
      }

      nav.mobile-menu-open .mobile-menu-toggle span:nth-child(1) {
        transform: translateY(6.5px) rotate(45deg);
      }

      nav.mobile-menu-open .mobile-menu-toggle span:nth-child(2) {
        opacity: 0;
      }

      nav.mobile-menu-open .mobile-menu-toggle span:nth-child(3) {
        transform: translateY(-6.5px) rotate(-45deg);
      }

      .mobile-menu-panel {
        display: block;
        position: fixed;
        left: 12px;
        right: 12px;
        top: 78px;
        z-index: 9999;
        padding: 10px;
        border: 1px solid rgba(147,197,253,0.18);
        border-radius: 20px;
        background:
          radial-gradient(circle at 18% 0%, rgba(96,165,250,0.17), transparent 36%),
          radial-gradient(circle at 88% 12%, rgba(168,85,247,0.16), transparent 36%),
          rgba(3,3,8,0.92);
        box-shadow:
          0 28px 90px rgba(0,0,0,0.58),
          inset 0 1px 0 rgba(255,255,255,0.08);
        backdrop-filter: blur(24px) saturate(150%);
        -webkit-backdrop-filter: blur(24px) saturate(150%);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px) scale(0.985);
        transform-origin: top center;
        transition:
          opacity 0.28s ease,
          visibility 0.28s ease,
          transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      }

      nav.mobile-menu-open .mobile-menu-panel {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      .mobile-menu-panel__links {
        display: grid;
        gap: 6px;
      }

      .mobile-menu-panel a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 48px;
        padding: 0 14px;
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 14px;
        background: rgba(255,255,255,0.035);
        color: rgba(255,255,255,0.82);
        font-family: 'Geist', sans-serif;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
      }

      .mobile-menu-panel a:hover,
      .mobile-menu-panel a:focus-visible {
        color: #fff;
        border-color: rgba(147,197,253,0.20);
        background: rgba(255,255,255,0.065);
        transform: translateY(-1px);
        outline: none;
      }

      .mobile-menu-panel a.mobile-menu-panel__cta {
        margin-top: 4px;
        color: #fff;
        background:
          linear-gradient(135deg, rgba(37,99,235,0.88), rgba(124,58,237,0.86)),
          rgba(255,255,255,0.06);
        border-color: rgba(196,181,253,0.30);
        box-shadow:
          0 12px 34px rgba(37,99,235,0.22),
          inset 0 1px 0 rgba(255,255,255,0.18);
      }

      .mobile-menu-backdrop {
        position: fixed;
        inset: 0;
        z-index: 9998;
        background: rgba(0,0,0,0.28);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.28s ease, visibility 0.28s ease;
      }

      body.mobile-menu-lock .mobile-menu-backdrop {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      .hero-reveal-stats {
        grid-template-columns: 1fr !important;
        gap: 10px !important;
      }

      .metric-card {
        min-height: 170px !important;
        padding: 24px !important;
      }

      h1 {
        font-size: clamp(3.2rem, 16vw, 5.6rem) !important;
        line-height: 0.92 !important;
      }

      h2 {
        overflow-wrap: anywhere;
      }

      section {
        scroll-margin-top: 96px;
      }

      .container {
        max-width: 100% !important;
      }

      .contact-grid-refined,
      .why-web-header,
      .service-offer-head {
        gap: 2rem !important;
      }

      .contact-form-panel,
      .contact-info-panel {
        min-width: 0;
      }

      .legal-content {
        overflow-wrap: anywhere;
      }
    }

    @media (max-width: 420px) {
      nav {
        top: 10px !important;
      }

      nav > div {
        max-width: calc(100vw - 16px) !important;
      }

      nav .nav-domain {
        max-width: calc(100vw - 86px);
        padding-left: 11px !important;
        padding-right: 11px !important;
        letter-spacing: 0.10em !important;
        font-size: 10px !important;
      }

      .mobile-menu-panel {
        left: 8px;
        right: 8px;
        top: 74px;
        border-radius: 18px;
      }

      .mobile-menu-panel a {
        min-height: 46px;
        font-size: 11px;
      }

      .metric-card h3 {
        line-height: 1.45;
      }

      .why-web-strip,
      .why-me-strip {
        padding-left: 1.15rem !important;
        padding-right: 1.15rem !important;
      }
    }
  `;

  function injectResponsiveCSS() {
    if (document.getElementById("mobile-responsive-polish")) return;
    const style = document.createElement("style");
    style.id = "mobile-responsive-polish";
    style.textContent = RESPONSIVE_CSS;
    document.head.appendChild(style);
  }

  function cleanHref(href) {
    if (!href) return "#";
    if (href === "#" || href === "index.html") return "/";
    if (href.startsWith("index.html#")) return "/" + href.replace("index.html", "");
    if (href === "ukazky.html") return "/ukazky";
    if (href === "obchodni-podminky.html") return "/obchodni-podminky";
    if (href === "zpracovani-osobnich-udaju.html") return "/zpracovani-osobnich-udaju";
    return href;
  }

  function initMobileMenu() {
    const nav = document.querySelector("nav");
    if (!nav || nav.querySelector(".mobile-menu-toggle")) return;

    const inner = nav.querySelector(":scope > div") || nav.firstElementChild;
    if (!inner) return;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "mobile-menu-toggle";
    toggle.setAttribute("aria-label", "Otevřít menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    const panel = document.createElement("div");
    panel.className = "mobile-menu-panel";
    panel.setAttribute("aria-hidden", "true");

    const links = [
      ["Domů", "/"],
      ["Proces", "/#workflows"],
      ["Služby", "/#nabidka"],
      ["Ukázky", "/ukazky"],
      ["Kontakt", "/#contact"],
      ["Nezávazný dotaz", "/#contact", "mobile-menu-panel__cta"]
    ];

    panel.innerHTML = `
      <div class="mobile-menu-panel__links">
        ${links.map(([label, href, cls]) => `<a href="${cleanHref(href)}" class="${cls || ""}">${label}<span>→</span></a>`).join("")}
      </div>
    `;

    const backdrop = document.createElement("div");
    backdrop.className = "mobile-menu-backdrop";

    inner.appendChild(toggle);
    nav.appendChild(panel);
    document.body.appendChild(backdrop);

    function setOpen(open) {
      nav.classList.toggle("mobile-menu-open", open);
      document.body.classList.toggle("mobile-menu-lock", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Zavřít menu" : "Otevřít menu");
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    }

    toggle.addEventListener("click", () => {
      setOpen(!nav.classList.contains("mobile-menu-open"));
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    backdrop.addEventListener("click", () => setOpen(false));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) setOpen(false);
    });
  }

  function initResponsivePolish() {
    injectResponsiveCSS();
    initMobileMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initResponsivePolish);
  } else {
    initResponsivePolish();
  }
})();
