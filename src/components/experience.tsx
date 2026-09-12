import Image from "next/image";
import { MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
export function Experience() {
  return (
    <section
      id="experience"
      className="section-shell section-space"
      aria-label="Experience"
    >
      <SectionHeading
        label="Experience"
        title="Learning, put into practice."
        description="From early research to software engineering, each experience adds a new perspective."
      />
      <div className="experience-list">
        {experience.map((entry) => (
          <article className="experience-row" key={entry.organization}>
            <div className={`experience-symbol ${entry.logo.tone}`}>
              <Image
                src={entry.logo.src}
                alt={entry.logo.alt}
                className={`experience-logo experience-logo-${entry.logo.format}`}
                sizes="(max-width: 980px) 68px, (max-width: 1150px) 80px, 92px"
              />
            </div>
            <div className="experience-company">
              <h3>{entry.organization}</h3>
              <p>{entry.period}</p>
              {entry.current && (
                <span className="status-badge">Currently training</span>
              )}
            </div>
            <div className="experience-detail">
              <h4>{entry.role}</h4>
              <p>{entry.description}</p>
              {entry.location && (
                <p className="location-line">
                  <MapPin size={14} />
                  {entry.location}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
