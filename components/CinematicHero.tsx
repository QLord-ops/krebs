"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DESKTOP_VIDEO_SRC = "/videos/bauwerk-story.mp4";
const MOBILE_VIDEO_SRC = "/videos/bauwerk-story-mobile.mp4";
const MOBILE_QUERY = "(max-width: 720px)";

function getActiveVideo(root: HTMLElement | null) {
  if (!root || typeof window === "undefined") return null;

  const mobileVideo = root.querySelector<HTMLVideoElement>(".story-video-mobile");
  const desktopVideo = root.querySelector<HTMLVideoElement>(".story-video-desktop");

  return window.matchMedia(MOBILE_QUERY).matches ? mobileVideo : desktopVideo;
}

function pauseInactiveVideos(section: HTMLElement, active: HTMLVideoElement) {
  section.querySelectorAll<HTMLVideoElement>(".story-video").forEach((element) => {
    if (element === active) return;
    element.pause();
    element.currentTime = 0;
  });
}

const phases = [
  {
    label: "Grundstück",
    eyebrow: "GRUNDSTÜCK",
    title: "Bauen beginnt mit Vertrauen.",
    text: "Wir planen und realisieren hochwertige Bauprojekte mit klaren Prozessen, präziser Ausführung und persönlicher Verantwortung.",
  },
  {
    label: "Planung",
    eyebrow: "PLANUNG",
    title: "Von der ersten Idee zum klaren Plan.",
    text: "Wir strukturieren Anforderungen, Budget, Zeitplan und technische Umsetzung von Anfang an transparent.",
  },
  {
    label: "Fundament",
    eyebrow: "FUNDAMENT",
    title: "Solide Basis. Saubere Ausführung.",
    text: "Jedes Detail wird koordiniert - von der Baustelle bis zur Kommunikation mit allen Beteiligten.",
  },
  {
    label: "Bauphase",
    eyebrow: "BAUPHASE",
    title: "Fortschritt, den man sieht.",
    text: "Klare Abläufe, feste Ansprechpartner und regelmäßige Updates sorgen für Sicherheit im Projekt.",
  },
  {
    label: "Übergabe",
    eyebrow: "ÜBERGABE",
    title: "Ein Ergebnis, das bleibt.",
    text: "Bauwerk Meister steht für Qualität, Zuverlässigkeit und Projekte, die langfristig Wert schaffen.",
  },
];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function AnimatedTitle({
  as: Tag,
  id,
  text,
}: {
  as: "h1" | "h2";
  id?: string;
  text: string;
}) {
  return (
    <Tag id={id} aria-label={text} className="story-title">
      {text.split(" ").map((word, index) => (
        <span className="title-word" style={{ "--word-index": index } as CSSProperties} key={`${word}-${index}`}>
          <span>{word}</span>
        </span>
      ))}
    </Tag>
  );
}

export function CinematicHero() {
  const rootRef = useRef<HTMLElement>(null);
  const activeStepRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);
  const [activeStep, setActiveStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = rootRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      setReducedMotion(true);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    let metadataHandler: (() => void) | undefined;
    let boundVideo: HTMLVideoElement | null = null;
    let scrollTrigger: ScrollTrigger | null = null;
    let onViewportChange: (() => void) | undefined;

    const ctx = gsap.context(() => {
      const dots = gsap.utils.toArray<HTMLElement>(".phase-dot");
      const phaseLine = section.querySelector<HTMLElement>(".phase-line-fill");
      const pageProgress = section.querySelector<HTMLElement>(".scroll-progress");

      const setupScrollVideo = () => {
        const video = getActiveVideo(section);
        if (!video || !video.duration) return;

        scrollTrigger?.kill();
        boundVideo = video;
        pauseInactiveVideos(section, video);
        video.pause();
        video.currentTime = 0;

        const updateVideoFrame = () => {
          frameRef.current = null;
          if (boundVideo?.duration) {
            boundVideo.currentTime = boundVideo.duration * targetProgressRef.current;
          }
        };

        scrollTrigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(4000, window.innerHeight * 4.8)}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            targetProgressRef.current = self.progress;
            if (frameRef.current === null) {
              frameRef.current = window.requestAnimationFrame(updateVideoFrame);
            }

            if (phaseLine) {
              phaseLine.style.transform = `scaleX(${self.progress})`;
            }
            if (pageProgress) {
              pageProgress.style.transform = `scaleY(${self.progress})`;
            }

            const stepIndex = Math.min(
              phases.length - 1,
              Math.floor(self.progress * phases.length),
            );

            dots.forEach((dot, index) => dot.classList.toggle("is-active", index === stepIndex));

            if (stepIndex !== activeStepRef.current) {
              activeStepRef.current = stepIndex;
              setActiveStep(stepIndex);
            }
          },
        });

        ScrollTrigger.refresh();
      };

      const bindVideo = () => {
        if (metadataHandler && boundVideo) {
          boundVideo.removeEventListener("loadedmetadata", metadataHandler);
          metadataHandler = undefined;
        }

        const video = getActiveVideo(section);
        if (!video) return;

        if (video.readyState >= 1) {
          setupScrollVideo();
          return;
        }

        metadataHandler = setupScrollVideo;
        video.addEventListener("loadedmetadata", metadataHandler, { once: true });
      };

      bindVideo();

      onViewportChange = () => {
        scrollTrigger?.kill();
        scrollTrigger = null;
        targetProgressRef.current = 0;
        activeStepRef.current = 0;
        setActiveStep(0);
        bindVideo();
      };

      mobileQuery.addEventListener("change", onViewportChange);
    }, section);

    return () => {
      if (onViewportChange) {
        mobileQuery.removeEventListener("change", onViewportChange);
      }
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      if (metadataHandler && boundVideo) {
        boundVideo.removeEventListener("loadedmetadata", metadataHandler);
      }
      scrollTrigger?.kill();
      ctx.revert();
    };
  }, []);

  const current = phases[activeStep];

  return (
    <section ref={rootRef} id="top" className="cinematic-hero" aria-labelledby="hero-title">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="story-stage" aria-hidden="true">
        <div className="visual-fallback" />
        <video
          src={DESKTOP_VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          className="story-video story-video-desktop absolute inset-0 h-full w-full object-cover"
        />
        <video
          src={MOBILE_VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          className="story-video story-video-mobile absolute inset-0 h-full w-full object-cover"
        />
        <div className="video-shade" />
        <div className="video-gradient" />
        <div className="blueprint-layer" />
        <div className="steel-layer" />
      </div>

      <div className="story-content">
        <div className="story-copy-wrap">
          {reducedMotion ? (
            <div className="reduced-story-list">
              {phases.map((phase, index) => (
                <div className="story-copy story-copy-static" key={phase.title}>
                  <p className="phase-kicker">{phase.eyebrow}</p>
                  {index === 0 ? (
                    <h1 id="hero-title">{phase.title}</h1>
                  ) : (
                    <h2>{phase.title}</h2>
                  )}
                  <p>{phase.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="story-copy" key={current.title}>
              <p className="phase-kicker">{current.eyebrow}</p>
              {activeStep === 0 ? (
                <AnimatedTitle as="h1" id="hero-title" text={current.title} />
              ) : (
                <AnimatedTitle as="h2" text={current.title} />
              )}
              <p className="story-subline">{current.text}</p>
              {activeStep === 0 && (
                <div className="hero-actions">
                  <a className="button-primary" href="#kontakt">
                    <span className="button-label">Projekt anfragen</span>
                    <span className="button-icon" aria-hidden="true">↗</span>
                  </a>
                  <a className="button-secondary button-quiet" href="#leistungen">
                    <span className="button-label">Leistungen</span>
                    <span className="button-icon" aria-hidden="true">↓</span>
                  </a>
                </div>
              )}
            </div>
          )}

          {!reducedMotion && (
            <div className="seo-story-copy" aria-hidden="true">
              {phases.slice(1).map((phase) => (
                <div key={phase.title}>
                  <h2>{phase.title}</h2>
                  <p>{phase.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
