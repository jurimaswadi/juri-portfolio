import { ArrowUpRight, CodeXml, ContactRound, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
export function Contact() {
  return (
    <section
      id="contact"
      className="section-shell contact-section"
      aria-label="Contact"
    >
      <div className="contact-panel">
        <p className="section-label">Contact</p>
        <h2>
          Good things start
          <br />
          with a conversation<span>.</span>
        </h2>
        <p>
          Have an idea, an opportunity, or something interesting to share?
          <br className="desktop-break" /> I’d love to connect and learn
          together.
        </p>
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRight size={24} />
        </a>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={17} />
            Email me
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <ContactRound size={17} />
            LinkedIn
            <ArrowUpRight size={13} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <CodeXml size={17} />
            GitHub
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
