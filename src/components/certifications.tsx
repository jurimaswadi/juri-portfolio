import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
export function Certifications() {
  return (
    <section
      id="certifications"
      className="section-shell section-space"
      aria-label="Certifications"
    >
      <SectionHeading
        label="Certifications"
        title="A commitment to keep learning."
      />
      <div className="certification-grid">
        {certifications.map((entry, index) => (
          <article
            className={`certificate ${index === 0 ? "featured-certificate" : ""}`}
            key={`${entry.title}-${entry.issued}`}
          >
            <Award size={26} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <p className="certificate-issuer">{entry.issuer}</p>
              <h3>{entry.title}</h3>
              {entry.issued && (
                <p className="date-label">Issued {entry.issued}</p>
              )}
            </div>
            {index === 0 && (
              <ArrowUpRight
                className="certificate-decoration"
                size={72}
                strokeWidth={0.7}
                aria-hidden="true"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
