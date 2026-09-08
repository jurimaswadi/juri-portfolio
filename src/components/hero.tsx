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
        <p className="hero-summary">{profile.summary}</p>
      </div>
      <div className="hero-art">
        <LegoAccent />
      </div>
    </section>
  );
}
