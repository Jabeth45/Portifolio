import SkillIcon from "./SkillIcon.jsx";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section className="section container" id="about" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="eyebrow">01 / ABOUT</p>
        <h2 id="skills-title">Skills</h2>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li className="skill" key={skill.name}>
                  <SkillIcon name={skill.icon} />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
