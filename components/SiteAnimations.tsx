"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const SECTION_REVEALS = [
  ".services-showcase",
  ".focus-section",
  ".references-section",
  ".company-section",
  ".career-section",
  ".contact-section-wrap",
  ".site-footer",
];

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

function revealSection(selector: string) {
  const targets = gsap.utils.toArray<HTMLElement>(selector);
  if (!targets.length) return;

  gsap.from(targets, {
    opacity: 0,
    y: 24,
    duration: 0.65,
    ease: "power2.out",
    scrollTrigger: {
      trigger: targets[0],
      start: "top 90%",
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

      SECTION_REVEALS.forEach(revealSection);
    });

    return () => {
      ctx.revert();
      releaseAnimationPendingState();
    };
  }, []);

  return null;
}
