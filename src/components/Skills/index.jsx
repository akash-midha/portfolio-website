import { skillsByCategory } from '../../data/portfolio';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__main-title">
        <span className="skills__main-icon" aria-hidden="true">💻</span>
        Skills & Abilities
      </h2>
      <div className="skills__divisions">
        {skillsByCategory.map((division) => (
          <div key={division.title} className="skills__division">
            <h3 className="skills__division-title">{division.title}</h3>
            <ul className="skills__list">
              {division.items.map((item) => (
                <li key={item} className="skills__item">
                  <span className="skills__label">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
