import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { RubiksCube } from "./rubiks-cube";
export function Skills() {
  return (
    <section
      id="skills"
      className="skills-section section-space"
      aria-label="Skills"
    >
      <div className="section-shell">
        <SectionHeading
          label="Skills & Curiosity"
          title="Different sides of the same curious mind."
          description="A foundation in technology, a love of problem solving, and plenty still to discover."
        />
        <div className="skills-layout">
          <div className="cube-panel">
            <RubiksCube />
            <p className="cube-caption">
              There’s always another way to look at a problem.
            </p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.note}</p>
                <ul className="skill-chips">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
