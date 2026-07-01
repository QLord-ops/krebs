"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const filters = ["Alle", "Kanalbau", "Straßenbau", "Erdbau", "Pflasterbau", "Außenanlagen"] as const;

type Filter = (typeof filters)[number];

export type Project = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

export function ReferencesSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("Alle");

  const visible = useMemo(() => {
    if (active === "Alle") return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <div className="references-layout">
      <div className="references-rail">
        <p className="eyebrow">Referenzen</p>
        <h2>
          <span>Dokumentierte Baustellen</span>
          <span>nach Leistungsbereich</span>
        </h2>
        <div className="filter-row" role="tablist" aria-label="Leistungsbereiche filtern">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              className={active === filter ? "is-active" : undefined}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <a className="button button-outline-red" href="#kontakt">
          Mehr Referenzen ansehen
        </a>
      </div>

      <div className="project-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.title}>
            <Image
              src={project.image}
              alt={project.alt}
              width={900}
              height={620}
              sizes="(max-width: 720px) 100vw, (max-width: 1040px) 50vw, 33vw"
            />
            <div>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <a href="#kontakt">Projekt ansehen</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
