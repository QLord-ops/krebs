"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const HEADING_SELECTORS = [
  ".services-intro h2",
  ".focus-copy h2",
  ".company-copy h2",
  ".values-intro h3",
  ".contact-copy h2",
].join(", ");

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

function splitHeadingWords() {
  document.querySelectorAll<HTMLElement>(HEADING_SELECTORS).forEach((heading) => {
    if (heading.dataset.wordsSplit === "true") return;

    const words = (heading.textContent ?? "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    heading.innerHTML = words
      .map((word) => `<span class="reveal-word">${word}</span>`)
      .join('<span class="reveal-space">&nbsp;</span>');
    heading.dataset.wordsSplit = "true";
  });
}

function revealOnScroll(
  selector: string,
  options: {
    y?: number;
    x?: number;
    stagger?: number;
    duration?: number;
    start?: string;
    scale?: number;
    trigger?: string;
    delay?: number;
  } = {},
) {
  const {
    y = 36,
    x = 0,
    stagger = 0.1,
    duration = 0.85,
    start = "top 86%",
    scale = 1,
    trigger = selector,
    delay = 0,
  } = options;

  gsap.from(selector, {
    opacity: 0,
    y,
    x,
    scale,
    duration,
    stagger,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger,
      start,
      toggleActions: "play none none none",
    },
  });
}

function revealWordsOnScroll(
  selector: string,
  options: {
    trigger?: string;
    start?: string;
    stagger?: number;
    duration?: number;
    y?: number;
  } = {},
) {
  const {
    trigger = selector,
    start = "top 86%",
    stagger = 0.06,
    duration = 0.72,
    y = 28,
  } = options;

  gsap.from(`${selector} .reveal-word`, {
    opacity: 0,
    y,
    duration,
    stagger,
    ease: "power3.out",
    scrollTrigger: {
      trigger,
      start,
      toggleActions: "play none none none",
    },
  });
}

function revealBlock(
  selector: string,
  options: {
    y?: number;
    x?: number;
    scale?: number;
    duration?: number;
    start?: string;
  } = {},
) {
  const { y = 48, x = 0, scale = 0.97, duration = 0.95, start = "top 88%" } = options;

  gsap.utils.toArray<HTMLElement>(selector).forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y,
      x,
      scale,
      duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    });
  });
}

function revealBatch(
  selector: string,
  options: {
    y?: number;
    stagger?: number;
    duration?: number;
    start?: string;
    scale?: number;
  } = {},
) {
  const { y = 32, stagger = 0.08, duration = 0.75, start = "top 88%", scale = 1 } = options;

  ScrollTrigger.batch(selector, {
    start,
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y,
        scale,
        duration,
        stagger,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
  });
}

function revealCardContent(
  cardSelector: string,
  contentSelector: string,
  options: { y?: number; stagger?: number; start?: string } = {},
) {
  const { y = 20, stagger = 0.07, start = "top 88%" } = options;

  gsap.utils.toArray<HTMLElement>(cardSelector).forEach((card) => {
    gsap.from(card.querySelectorAll(contentSelector), {
      opacity: 0,
      y,
      duration: 0.65,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start,
        toggleActions: "play none none none",
      },
    });
  });
}

function animateStats() {
  gsap.utils.toArray<HTMLElement>(".stats-row > div").forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 28,
      duration: 0.7,
      delay: index * 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stats-row",
        start: "top 84%",
      },
    });

    const value = item.querySelector("strong");
    if (!value) return;

    const text = value.textContent?.trim() ?? "";
    const match = text.match(/^(\d+)\+?$/);
    if (!match) return;

    const target = Number(match[1]);
    const counter = { value: 0 };

    gsap.to(counter, {
      value: target,
      duration: 1.4,
      delay: index * 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stats-row",
        start: "top 84%",
      },
      onUpdate: () => {
        value.textContent = `${Math.round(counter.value)}${text.includes("+") ? "+" : ""}`;
      },
    });
  });
}

const HERO_TARGETS = {
  h1: { selector: ".hero-copy h1 span", y: 56 },
  text: { selector: ".hero-copy p:not(.eyebrow)", y: 28 },
  actions: { selector: ".hero-actions a", y: 22 },
  facts: { selector: ".hero-facts div", y: 20 },
} as const;

function releaseAnimationPendingState() {
  document.documentElement.classList.remove("animations-pending");
}

function prepareHeroForAnimation() {
  gsap.set(HERO_TARGETS.h1.selector, { opacity: 0, y: HERO_TARGETS.h1.y });
  gsap.set(HERO_TARGETS.text.selector, { opacity: 0, y: HERO_TARGETS.text.y });
  gsap.set(HERO_TARGETS.actions.selector, { opacity: 0, y: HERO_TARGETS.actions.y });
  gsap.set(HERO_TARGETS.facts.selector, { opacity: 0, y: HERO_TARGETS.facts.y });
  releaseAnimationPendingState();
}

export function SiteAnimations() {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      releaseAnimationPendingState();
      return;
    }

    prepareHeroForAnimation();

    gsap.registerPlugin(ScrollTrigger);
    splitHeadingWords();

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTimeline
        .to(HERO_TARGETS.h1.selector, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
        })
        .to(
          HERO_TARGETS.text.selector,
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.45",
        )
        .to(
          HERO_TARGETS.actions.selector,
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
          "-=0.45",
        )
        .to(
          HERO_TARGETS.facts.selector,
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.08 },
          "-=0.25",
        );

      gsap.to(".hero-video", {
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      revealBlock(".services-showcase", { y: 36, scale: 0.99, start: "top 90%" });
      revealOnScroll(".services-intro .eyebrow", { y: 18, trigger: ".services-intro" });
      revealWordsOnScroll(".services-intro h2", { trigger: ".services-intro" });
      revealOnScroll(".services-intro p, .services-intro .button", {
        y: 24,
        stagger: 0.1,
        trigger: ".services-intro",
        delay: 0.15,
      });
      revealBlock(".services-media", { y: 44, scale: 0.96, duration: 1.05 });
      revealBatch(".service-card", { y: 40, stagger: 0.08, scale: 0.98 });
      revealCardContent(".service-card", ".service-index, .service-body > *", {
        y: 22,
        stagger: 0.06,
      });

      revealBlock(".focus-section", { y: 40, scale: 0.99, start: "top 92%" });
      revealOnScroll(".focus-copy .eyebrow", { y: 18, trigger: ".focus-copy" });
      revealWordsOnScroll(".focus-copy h2", { trigger: ".focus-copy" });
      revealOnScroll(".focus-copy .focus-lead", { y: 24, trigger: ".focus-copy", delay: 0.12 });
      revealOnScroll(".focus-copy dl div", {
        y: 22,
        stagger: 0.08,
        trigger: ".focus-copy dl",
      });
      revealOnScroll(".focus-copy .button", { y: 20, trigger: ".focus-copy", delay: 0.2 });
      revealBlock(".focus-media", { x: 36, y: 0, scale: 0.98, duration: 1.05 });
      revealOnScroll(".focus-main-frame", { y: 36, scale: 0.97, duration: 0.95 });
      revealOnScroll(".focus-thumbs img", {
        y: 24,
        stagger: 0.1,
        duration: 0.7,
        trigger: ".focus-thumbs",
      });
      animateStats();

      revealBlock(".references-layout", { y: 36, scale: 0.99 });
      revealOnScroll(".references-rail .eyebrow", { y: 18, trigger: ".references-rail" });
      revealOnScroll(".references-rail h2", { y: 28, duration: 0.85, trigger: ".references-rail" });
      revealOnScroll(".filter-row button", {
        y: 16,
        stagger: 0.05,
        duration: 0.6,
        trigger: ".filter-row",
        delay: 0.1,
      });
      revealOnScroll(".references-rail .button", { y: 20, trigger: ".references-rail", delay: 0.18 });
      revealBatch(".project-card", { y: 44, stagger: 0.07, scale: 0.98 });
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.from(card.querySelector("img"), {
          scale: 1.1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
        gsap.from(card.querySelectorAll("div > span, div > h3, div > a"), {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 86%",
            toggleActions: "play none none none",
          },
        });
      });

      revealBlock(".company-section", { y: 40, scale: 0.99, start: "top 92%" });
      revealOnScroll(".company-copy .eyebrow", { y: 18, trigger: ".company-copy" });
      revealWordsOnScroll(".company-copy h2", { trigger: ".company-copy" });
      revealOnScroll(".company-copy p, .company-copy .button", {
        y: 24,
        stagger: 0.1,
        trigger: ".company-copy",
        delay: 0.12,
      });
      revealBlock(".company-image", { x: -32, y: 0, scale: 0.97, duration: 1.05 });
      revealBlock(".values-panel", { y: 44, scale: 0.98, duration: 1 });
      revealOnScroll(".values-intro > *", { y: 22, stagger: 0.08, trigger: ".values-intro" });
      revealWordsOnScroll(".values-intro h3", { trigger: ".values-intro" });
      revealBatch(".value-grid article", { y: 32, stagger: 0.08, scale: 0.98 });
      revealCardContent(".value-grid article", "div, h3, p", { y: 18, stagger: 0.06 });
      revealOnScroll(".values-panel blockquote", { y: 28, duration: 0.85 });

      revealBlock(".career-shell", { y: 40, scale: 0.99, start: "top 92%" });
      revealOnScroll(".career-brand", { y: 20, duration: 0.7, trigger: ".career-copy" });
      revealOnScroll(".career-copy .eyebrow", { y: 18, trigger: ".career-copy" });
      revealOnScroll(".career-copy h2", { y: 28, duration: 0.85, trigger: ".career-copy" });
      revealOnScroll(".career-copy > p", { y: 24, trigger: ".career-copy", delay: 0.1 });
      revealOnScroll(".career-proofs > div", {
        y: 24,
        stagger: 0.08,
        trigger: ".career-proofs",
      });
      revealCardContent(".career-proofs > div", "strong, span", { y: 14, stagger: 0.05 });
      revealOnScroll(".career-cta", { y: 20, duration: 0.7, trigger: ".career-copy" });
      revealBlock(".career-board", { x: 40, y: 0, scale: 0.98, duration: 1.05 });
      revealBlock(".career-photo", { y: 36, scale: 0.98, duration: 0.95 });
      revealBlock(".role-grid", { y: 28, scale: 0.99, duration: 0.85 });
      revealBatch(".role-row", { y: 18, stagger: 0.05, duration: 0.65 });
      revealCardContent(".role-row", "strong, small, em", { y: 12, stagger: 0.04 });

      revealBlock(".contact-section-wrap", { y: 36, scale: 0.99, start: "top 92%" });
      revealBlock(".contact-section", { y: 28, scale: 0.99, start: "top 90%" });
      revealOnScroll(".contact-copy .eyebrow", { y: 18, trigger: ".contact-copy" });
      revealWordsOnScroll(".contact-copy h2", { trigger: ".contact-copy" });
      revealOnScroll(".contact-lead", { y: 22, trigger: ".contact-copy", delay: 0.1 });
      revealBlock(".contact-details", { y: 24, scale: 0.99, duration: 0.8 });
      revealBatch(".contact-detail", { y: 22, stagger: 0.08, duration: 0.7 });
      revealCardContent(".contact-detail", ".contact-detail-label, a, span:not(.contact-detail-label)", {
        y: 14,
        stagger: 0.05,
      });
      revealBlock(".contact-form-shell", { y: 40, scale: 0.97, duration: 1.05 });
      revealOnScroll(".contact-map-head > *", {
        y: 20,
        stagger: 0.08,
        trigger: ".contact-map-head",
      });
      revealBlock(".contact-map-stage", { y: 32, scale: 0.98, duration: 1 });
      revealOnScroll(".contact-form-head > *, .form-row, .form-field, .form-fieldset, .form-options, .contact-form-submit", {
        y: 20,
        stagger: 0.06,
        duration: 0.65,
        trigger: ".contact-form",
      });

      revealOnScroll(".site-footer > *", {
        y: 16,
        stagger: 0.08,
        duration: 0.65,
        trigger: ".site-footer",
        start: "top 95%",
      });
    });

    return () => {
      ctx.revert();
      releaseAnimationPendingState();
    };
  }, []);

  return null;
}
