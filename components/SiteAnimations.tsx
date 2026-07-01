"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const EASE = "power3.out";

const HERO_STEPS: Array<{ selector: string; y: number }> = [
  { selector: ".hero-copy .eyebrow", y: 18 },
  { selector: ".hero-copy h1 span", y: 34 },
  { selector: ".hero-copy p:not(.eyebrow)", y: 22 },
  { selector: ".hero-actions a", y: 18 },
  { selector: ".hero-facts div", y: 18 },
];

// Each entry animates a group of elements together with a subtle stagger,
// driven by one ScrollTrigger on the closest section wrapper.
const REVEAL_GROUPS: Array<{ trigger: string; targets: string }> = [
  {
    trigger: ".services-intro",
    targets: ".services-intro .eyebrow, .services-intro h2, .services-intro p, .services-intro .button",
  },
  { trigger: ".service-list", targets: ".service-card" },
  {
    trigger: ".focus-copy",
    targets:
      ".focus-copy .eyebrow, .focus-copy h2, .focus-copy .focus-lead, .focus-copy dl div, .focus-copy .button",
  },
  { trigger: ".stats-row", targets: ".stats-row > div" },
  {
    trigger: ".references-rail",
    targets:
      ".references-rail .eyebrow, .references-rail h2, .filter-row button, .references-rail .button",
  },
  { trigger: ".project-grid", targets: ".project-card" },
  {
    trigger: ".company-copy",
    targets: ".company-copy .eyebrow, .company-copy h2, .company-copy p, .company-copy .button",
  },
  { trigger: ".company-image", targets: ".company-image" },
  {
    trigger: ".values-panel",
    targets: ".values-intro .eyebrow, .values-intro h3, .value-grid article, .values-panel blockquote",
  },
  {
    trigger: ".career-copy",
    targets:
      ".career-copy .eyebrow, .career-copy h2 span, .career-copy > p, .career-proofs > div, .career-cta",
  },
  { trigger: ".career-board", targets: ".career-photo, .role-row" },
  {
    trigger: ".contact-copy",
    targets: ".contact-copy .eyebrow, .contact-copy h2, .contact-lead, .contact-detail",
  },
  { trigger: ".contact-form", targets: ".contact-form-shell" },
  { trigger: ".contact-map", targets: ".contact-map-head > *, .contact-map-stage" },
  { trigger: ".site-footer", targets: ".site-footer > *" },
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

function prepareHero() {
  HERO_STEPS.forEach(({ selector, y }) => {
    gsap.set(selector, { opacity: 0, y, force3D: true });
  });
  releaseAnimationPendingState();
}

function revealGroup(trigger: string, targets: string) {
  const elements = gsap.utils.toArray<HTMLElement>(targets);
  if (!elements.length) return;

  gsap.set(elements, { opacity: 0, y: 26, force3D: true });

  ScrollTrigger.create({
    trigger,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: EASE,
        stagger: 0.08,
        clearProps: "transform",
      });
    },
  });
}

export function SiteAnimations() {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      releaseAnimationPendingState();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    prepareHero();

    const ctx = gsap.context(() => {
      const hero = gsap.timeline({ defaults: { ease: EASE } });
      hero
        .to(HERO_STEPS[0].selector, { opacity: 1, y: 0, duration: 0.7 })
        .to(
          HERO_STEPS[1].selector,
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.09 },
          "-=0.35",
        )
        .to(HERO_STEPS[2].selector, { opacity: 1, y: 0, duration: 0.7 }, "-=0.45")
        .to(
          HERO_STEPS[3].selector,
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.4",
        )
        .to(
          HERO_STEPS[4].selector,
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.07 },
          "-=0.35",
        );

      REVEAL_GROUPS.forEach(({ trigger, targets }) => revealGroup(trigger, targets));

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      releaseAnimationPendingState();
    };
  }, []);

  return null;
}
