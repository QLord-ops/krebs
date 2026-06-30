"use client";

import { useLayoutEffect } from "react";

const MOBILE_QUERY = "(max-width: 720px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const REVEAL_SELECTORS = [
  ".reveal-card",
  ".reveal-block",
  ".trust-bar span",
  ".quality-card",
  ".comparison-copy",
  ".cta-copy",
  ".contact-copy",
  ".cta-panel > div",
  ".process-step",
].join(", ");

function setRevealIndex(element: HTMLElement) {
  const parent = element.parentElement;
  if (!parent) return;

  if (parent.classList.contains("trust-bar") || parent.classList.contains("cta-panel")) {
    const siblings = Array.from(parent.children);
    element.style.setProperty("--reveal-index", String(siblings.indexOf(element)));
    return;
  }

  const staggerClass = ["reveal-card", "quality-card", "process-step"].find((name) =>
    element.classList.contains(name),
  );

  if (!staggerClass) return;

  const siblings = Array.from(parent.querySelectorAll<HTMLElement>(`:scope > .${staggerClass}`));
  const index = siblings.indexOf(element);
  if (index >= 0) {
    element.style.setProperty("--reveal-index", String(index));
  }
}

function revealAll(elements: NodeListOf<Element>) {
  elements.forEach((element) => element.classList.add("is-revealed"));
}

export function MobileScrollReveal() {
  useLayoutEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS);

    const setup = () => {
      if (!mobileQuery.matches) {
        revealAll(elements);
        return undefined;
      }

      if (reducedMotionQuery.matches) {
        revealAll(elements);
        return undefined;
      }

      elements.forEach((element) => {
        element.classList.remove("is-revealed");
        setRevealIndex(element);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          });
        },
        { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    };

    let cleanup = setup();

    const onViewportChange = () => {
      cleanup?.();
      cleanup = setup();
    };

    mobileQuery.addEventListener("change", onViewportChange);
    reducedMotionQuery.addEventListener("change", onViewportChange);

    return () => {
      cleanup?.();
      mobileQuery.removeEventListener("change", onViewportChange);
      reducedMotionQuery.removeEventListener("change", onViewportChange);
    };
  }, []);

  return null;
}
