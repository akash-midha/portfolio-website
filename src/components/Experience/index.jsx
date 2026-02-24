import { experience } from '../../data/portfolio';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">
        <span className="section-title__icon" aria-hidden="true">💼</span>
        Experience
      </h2>
      <div className="experience__timeline">
        {experience.map((item, i) => (
          <div
            key={i}
            className={`experience__item experience__item--${item.side}`}
          >
            <div className="experience__card">
              <h3 className="experience__title">{item.title}</h3>
              <p className="experience__role">{item.role}{item.location ? ` · ${item.location}` : ''}</p>
              <p className="experience__duration">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#home" className="experience__back">← Back To Home</a>
    </section>
  );
}

export default Experience;
