import {
  HeartHandshake,
  Bot,
  Heart,
  Accessibility,
  Coffee,
  HandHeart,
  Sprout,
  PartyPopper,
  MapPin,
} from "lucide-react";
import { volunteering } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
const icons = [
  HeartHandshake,
  Bot,
  Heart,
  Accessibility,
  Coffee,
  HandHeart,
  Sprout,
  PartyPopper,
];
export function Volunteering() {
  return (
    <section
      id="volunteering"
      className="section-shell section-space"
      aria-label="Volunteering"
    >
      <SectionHeading
        label="Volunteering"
        title="Time given. Connections made."
        description="Showing up for my community, across events, causes, and small moments of care."
      />
      <div className="volunteer-grid">
        {volunteering.map((entry, index) => {
          const Icon = icons[index];
          return (
            <article
              className={`volunteer-card volunteer-${index}`}
              key={entry.title}
            >
              <span className="volunteer-icon">
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3>{entry.title}</h3>
              <div className="volunteer-meta">
                <p className="volunteer-location">
                  {entry.location && (
                    <span>
                      <MapPin size={14} aria-hidden="true" />
                      {entry.location}
                    </span>
                  )}
                  <span className="date-label">{entry.date}</span>
                </p>
                {(entry.organizer || entry.hours) && (
                  <div className="volunteer-tags">
                    {entry.organizer && (
                      <p className="organizer-pill">{entry.organizer}</p>
                    )}
                    {entry.hours && (
                      <p className="volunteer-hours">
                        {entry.hours} volunteer hours
                      </p>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
