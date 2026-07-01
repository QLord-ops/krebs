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

const HERO_TARGETS = {
  h1: { selector: ".hero-copy h1 span", y: 56 },
  text: { selector: ".hero-copy p:not(.eyebrow)", y: 28 },
  actions: { selector: ".hero-actions a", y: 22 },
  facts: { selector: ".hero-facts div", y: 20 },
} as const;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

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
    trigger?: string;
    delay?: number;
  } = {},
) {
  const {
    y = 32,
    x = 0,
    stagger = 0.08,
    duration = 0.75,
    start = "top 88%",
    trigger = selector,
    delay = 0,
  } = options;

  gsap.from(selector, {
    opacity: 0,
    y,
    x,
    duration,
    stagger,
    delay,
    ease: "power2.out",
    immediateRender: false,
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
    start = "top 88%",
    stagger = 0.05,
    duration = 0.65,
    y = 24,
  } = options;

  gsap.from(`${selector} .reveal-word`, {
    opacity: 0,
    y,
    duration,
    stagger,
    ease: "power2.out",
    immediateRender: false,
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
    duration?: number;
    start?: string;
  } = {},
) {
  const { y = 36, x = 0, duration = 0.8, start = "top 88%" } = options;

  gsap.utils.toArray<HTMLElement>(selector).forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y,
      x,
      duration,
      ease: "power2.out",
      immediateRender: false,
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
  } = {},
) {
  const { y = 28, stagger = 0.07, duration = 0.7, start = "top 88%" } = options;

  ScrollTrigger.batch(selector, {
    start,
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y,
        duration,
        stagger,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
  });
}

function animateStats() {
  gsap.utils.toArray<HTMLElement>(".stats-row > div").forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 24,
      duration: 0.65,
      delay: index * 0.06,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".stats-row",
        start: "top 86%",
        toggleActions: "play none none none",
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
      duration: 1.2,
      delay: index * 0.06,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stats-row",
        start: "top 86%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        value.textContent = `${Math.round(counter.value)}${text.includes("+") ? "+" : ""}`;
      },
    });
  });
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
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(HERO_TARGETS.h1.selector, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
        })
        .to(HERO_TARGETS.text.selector, { opacity: 1, y: 0, duration: 0.75 }, "-=0.45")
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

      revealOnScroll(".services-intro .eyebrow", { y: 16, trigger: ".services-intro" });
      revealWordsOnScroll(".services-intro h2", { trigger: ".services-intro" });
      revealOnScroll(".services-intro p, .services-intro .button", {
        y: 22,
        stagger: 0.08,
        trigger: ".services-intro",
        delay: 0.1,
      });
      revealBlock(".services-media", { y: 32, duration: 0.85 });
      revealBatch(".service-card", { y: 32, stagger: 0.07 });

      revealOnScroll(".focus-copy .eyebrow", { y: 16, trigger: ".focus-copy" });
      revealWordsOnScroll(".focus-copy h2", { trigger: ".focus-copy" });
      revealOnScroll(".focus-copy .focus-lead", { y: 22, trigger: ".focus-copy", delay: 0.1 });
      revealOnScroll(".focus-copy dl div", {
        y: 20,
        stagger: 0.07,
        trigger: ".focus-copy dl",
      });
      revealOnScroll(".focus-copy .button", { y: 18, trigger: ".focus-copy", delay: 0.15 });
      revealBlock(".focus-main-frame", { y: 28, duration: 0.8 });
      revealOnScroll(".focus-thumbs img", {
        y: 20,
        stagger: 0.08,
        duration: 0.65,
        trigger: ".focus-thumbs",
      });
      animateStats();

      revealOnScroll(".references-rail .eyebrow", { y: 16, trigger: ".references-rail" });
      revealOnScroll(".references-rail h2", { y: 24, duration: 0.75, trigger: ".references-rail" });
      revealOnScroll(".filter-row button", {
        y: 14,
        stagger: 0.04,
        duration: 0.55,
        trigger: ".filter-row",
        delay: 0.08,
      });
      revealOnScroll(".references-rail .button", { y: 18, trigger: ".references-rail", delay: 0.12 });
      revealBatch(".project-card", { y: 32, stagger: 0.06 });

      revealOnScroll(".company-copy .eyebrow", { y: 16, trigger: ".company-copy" });
      revealWordsOnScroll(".company-copy h2", { trigger: ".company-copy" });
      revealOnScroll(".company-copy p, .company-copy .button", {
        y: 22,
        stagger: 0.08,
        trigger: ".company-copy",
        delay: 0.1,
      });
      revealBlock(".company-image", { x: -24, y: 0, duration: 0.85 });
      revealOnScroll(".values-intro > *", { y: 20, stagger: 0.07, trigger: ".values-intro" });
      revealWordsOnScroll(".values-intro h3", { trigger: ".values-intro" });
      revealBatch(".value-grid article", { y: 26, stagger: 0.07 });
      revealOnScroll(".values-panel blockquote", { y: 24, duration: 0.75 });

      revealOnScroll(".career-brand", { y: 18, duration: 0.65, trigger: ".career-copy" });
      revealOnScroll(".career-copy .eyebrow", { y: 16, trigger: ".career-copy" });
      revealOnScroll(".career-copy h2", { y: 24, duration: 0.75, trigger: ".career-copy" });
      revealOnScroll(".career-copy > p", { y: 22, trigger: ".career-copy", delay: 0.08 });
      revealOnScroll(".career-proofs > div", {
        y: 22,
        stagger: 0.07,
        trigger: ".career-proofs",
      });
      revealOnScroll(".career-cta", { y: 18, duration: 0.65, trigger: ".career-copy" });
      revealBlock(".career-photo", { y: 28, duration: 0.8 });
      revealBatch(".role-row", { y: 16, stagger: 0.05, duration: 0.6 });

      revealOnScroll(".contact-copy .eyebrow", { y: 16, trigger: ".contact-copy" });
      revealWordsOnScroll(".contact-copy h2", { trigger: ".contact-copy" });
      revealOnScroll(".contact-lead", { y: 20, trigger: ".contact-copy", delay: 0.08 });
      revealBatch(".contact-detail", { y: 20, stagger: 0.07, duration: 0.65 });
      revealBlock(".contact-form-shell", { y: 28, duration: 0.85 });
      revealOnScroll(".contact-map-head > *", {
        y: 18,
        stagger: 0.07,
        trigger: ".contact-map-head",
      });
      revealBlock(".contact-map-stage", { y: 24, duration: 0.8 });
      revealOnScroll(
        ".contact-form-head > *, .form-row, .form-field, .form-fieldset, .form-options, .contact-form-submit",
        {
          y: 18,
          stagger: 0.05,
          duration: 0.6,
          trigger: ".contact-form",
        },
      );

      revealOnScroll(".site-footer > *", {
        y: 14,
        stagger: 0.07,
        duration: 0.6,
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
