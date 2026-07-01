"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const HERO_TARGETS = {
  h1: { selector: ".hero-copy h1 span", y: 20 },
  text: { selector: ".hero-copy p:not(.eyebrow)", y: 12 },
  actions: { selector: ".hero-actions a", y: 10 },
  facts: { selector: ".hero-facts div", y: 10 },
} as const;

const SECTIONS = [
  ".services-showcase",
  ".focus-section",
  ".references-section",
  ".company-section",
  ".career-section",
  ".contact-section-wrap",
];

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

function softReveal(selector: string) {
  const targets = gsap.utils.toArray<HTMLElement>(selector);
  if (!targets.length) return;

  gsap.from(targets, {
    opacity: 0,
    y: 10,
    duration: 0.55,
    ease: "power1.out",
    scrollTrigger: {
      trigger: targets[0],
      start: "top 92%",
      toggleActions: "play none none none",
    },
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

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power1.out" } })
        .to(HERO_TARGETS.h1.selector, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.06,
        })
        .to(HERO_TARGETS.text.selector, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
        .to(
          HERO_TARGETS.actions.selector,
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.05 },
          "-=0.3",
        )
        .to(
          HERO_TARGETS.facts.selector,
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.04 },
          "-=0.25",
        );

      SECTIONS.forEach(softReveal);
    });

    return () => {
      ctx.revert();
      releaseAnimationPendingState();
    };
  }, []);

  return null;
}
