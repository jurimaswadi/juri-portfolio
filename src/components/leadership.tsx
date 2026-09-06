import { Badge, BadgeCheck, Users, Sparkles } from "lucide-react";
import { ieeeLeadership, memberships } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
export function Leadership() {
  return (
    <section
      id="leadership"
      className="leadership-section section-space"
      aria-label="Leadership and memberships"
    >
      <div className="section-shell">
        <SectionHeading
          label="Leadership & Memberships"
          title="Growing together. Leading with purpose."
          description="Communities have been as much a part of my education as the classroom."
        />
        <div className="leadership-layout">
          <article className="ieee-card">
            <Badge
              className="background-badge"
              size={225}
              strokeWidth={0.65}
              aria-hidden="true"
            />
            <div className="ieee-title">
              <span className="icon-tile">
                <BadgeCheck size={24} />
              </span>
              <div>
                <h3>IEEE KAU SB</h3>
                <p>Female student branch</p>
              </div>
            </div>
            <div className="leadership-timeline">
              {ieeeLeadership.map((entry) => (
                <div
                  className={`timeline-entry ${entry.current ? "current" : ""}`}
                  key={entry.role}
                >
                  <span className="timeline-dot" />
                  <div>
                    <p className="date-label">{entry.period}</p>
                    <h4>{entry.role}</h4>
                    {entry.current && (
                      <span className="small-chip">Current role</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="ieee-footnote">
              Research, collaboration, and a growing responsibility to the
              community.
            </p>
          </article>
          <div className="membership-list">
            {memberships.map((entry, index) => (
              <article className="membership-row" key={entry.organization}>
                <span className="membership-icon">
                  {index === 4 ? <Sparkles size={19} /> : <Users size={19} />}
                </span>
                <div>
                  <h3>{entry.role}</h3>
                  <p>{entry.organization}</p>
                  <span className="date-label">{entry.period}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
