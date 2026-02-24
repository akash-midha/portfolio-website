import { useState } from 'react';
import { projects } from '../../data/portfolio';
import './Work.css';

function Work() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (id) => setImgErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="work" className="work">
      <h2 className="section-title">
        <span className="section-title__icon section-title__icon--code" aria-hidden="true">{'</>'}</span>
        Projects <span className="work__highlight">Made</span>
      </h2>
      <div className="work__grid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work__card"
          >
            <div className="work__card-image">
              {project.image && !imgErrors[project.id] ? (
                <img
                  src={project.image}
                  alt=""
                  className="work__card-img"
                  onError={() => handleImgError(project.id)}
                />
              ) : (
                <span className="work__card-placeholder">{project.title.slice(0, 2)}</span>
              )}
            </div>
            <div className="work__card-title">{project.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Work;
