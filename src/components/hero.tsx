import { ArrowUpRight, ArrowDownRight, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { LegoAccent } from "./lego-accent";
export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero section-shell"
    >
      <div className="hero-copy">
        <p className="hero-eyebrow">
          <span /> A curious mind, a builder at heart
        </p>
        <h1 id="hero-title">
          Juri{" "}
          <span>
            Maswadi<span className="name-period">.</span>
          </span>
        </h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-summary">
          {profile.summary} Currently training at <strong>Ting</strong> as a
          Software Engineering Intern and Full Stack Software Engineer trainee.
          Eager to keep learning and growing in tech.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#experience">
            View experience <ArrowUpRight size={18} />
          </a>
          <a className="text-link" href="#leadership">
            Explore leadership <ArrowDownRight size={18} />
          </a>
        </div>
      </div>
      <div className="hero-art">
        <LegoAccent />
        <div className="intern-note">
          <span className="note-icon">
            <Code2 size={20} />
          </span>
          <div>
            <span className="note-label">Learning by building</span>
            <p>Software Engineering Intern at Ting</p>
          </div>
        </div>
      </div>
      <div className="hero-highlights" aria-label="Academic highlights">
        <span>A+ student</span>
        <span>First honor student</span>
        <span>Mawhiba alumna</span>
        <span>IT @ KAU</span>
      </div>
    </section>
  );
}
