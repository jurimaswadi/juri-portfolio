import {
  CircuitBoard,
  Users,
  ChartNoAxesCombined,
  Palette,
  Bot,
  Sparkles,
} from "lucide-react";
import { ieeeLeadership, memberships } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
const membershipIcons = [Users, ChartNoAxesCombined, Palette, Bot, Sparkles];

export function Leadership() {
  return (
    <section
      id="leadership"
      className="leadership-section section-space"
      aria-label="Leadership and memberships"
    >
      <div className="card-holder-background" aria-hidden="true">
        {[0, 1, 2].map((index) => (
          <div className={`event-pass event-pass-${index}`} key={index}>
            <span className="pass-lanyard" />
            <span className="pass-clip" />
            <span className="pass-portrait" />
            <span className="pass-bar" />
            <span className="pass-bar short" />
          </div>
        ))}
      </div>
      <div className="section-shell">
        <SectionHeading
          label="Leadership & Memberships"
          title="Growing together. Leading with purpose."
          description="Communities have been as much a part of my education as the classroom."
        />
        <div className="leadership-layout">
          <article className="ieee-card">
            <div className="ieee-title">
              <span className="icon-tile">
                <CircuitBoard size={24} aria-hidden="true" />
              </span>
              <div>
                <h3>IEEE KAU SB (Female)</h3>
                <p>My student branch leadership journey</p>
              </div>
            </div>
            <ol className="leadership-timeline">
              {ieeeLeadership.map((entry) => (
                <li
                  className={`timeline-entry ${entry.current ? "current" : ""}`}
                  key={entry.role}
                >
                  <span className="timeline-dot" aria-hidden="true" />
                  <h4>{entry.role}</h4>
                  <p className="date-label">{entry.period}</p>
                  {entry.current && (
                    <span className="small-chip">Current role</span>
                  )}
                </li>
              ))}
            </ol>
            <p className="ieee-footnote">
              Research, collaboration, and a growing responsibility to the
              community.
            </p>
          </article>
          <div className="membership-grid">
            {memberships.map((entry, index) => {
              const Icon = membershipIcons[index];
              return (
                <article className="membership-card" key={entry.organization}>
                  <span className="membership-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div className="membership-content">
                    <h3>{entry.organization}</h3>
                    <p className="membership-role">{entry.role}</p>
                    {entry.affiliation && (
                      <p className="membership-affiliation">
                        {entry.affiliation}
                      </p>
                    )}
                    <p className="date-label">{entry.period}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
