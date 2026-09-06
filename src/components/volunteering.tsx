import {
  HeartHandshake,
  Bot,
  Heart,
  Accessibility,
  Coffee,
  HandHeart,
  Sprout,
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
                <Icon size={24} strokeWidth={1.5} />
              </span>
              <h3 lang="ar" dir="rtl">
                {entry.title}
              </h3>
              <p className="volunteer-location">
                <MapPin size={14} />
                {entry.location}
                <span className="date-label">{entry.date}</span>
              </p>
              {entry.organizer && (
                <p className="organizer-pill">{entry.organizer}</p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
