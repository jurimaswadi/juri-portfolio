import { GraduationCap, Sprout, Microscope } from "lucide-react";
import { SectionHeading } from "./section-heading";
export function About() {
  return (
    <section
      id="about"
      className="section-shell section-space"
      aria-label="About"
    >
      <div className="about-panel">
        <div>
          <SectionHeading
            label="About me"
            title="Curiosity is where it starts."
          />
          <p>
            I’m a junior Information Technology student at King Abdulaziz
            University, actively involved in academic and extracurricular
            projects. I enjoy understanding how things work, then turning that
            understanding into something useful.
          </p>
          <p>
            My interests span data analysis, artificial intelligence, cloud
            engineering, and data engineering. I’m always looking for
            opportunities to expand my knowledge and build hands-on experience.
          </p>
          <p>
            Leadership has taught me to listen, collaborate, communicate
            clearly, and guide a team. My gifted-school years and the Mawhiba
            program shaped my approach to research, including{" "}
            <strong>two research projects</strong> that sparked an enduring
            interest in scientific inquiry.
          </p>
        </div>
        <aside className="academic-profile" aria-label="Academic profile">
          <GraduationCap size={30} strokeWidth={1.4} />
          <p className="section-label">My academic foundation</p>
          <h3>King Abdulaziz University</h3>
          <p>Bachelor’s student in Information Technology</p>
          <span className="academic-standing">Junior standing</span>
          <div className="academic-details">
            <p>
              <Sprout size={18} /> First honor / A+ student
            </p>
            <p>
              <Microscope size={18} /> Gifted school & Mawhiba program
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
