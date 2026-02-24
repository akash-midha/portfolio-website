import { useState } from 'react';
import { education, researchPapers } from '../../data/portfolio';
import './Education.css';

function Education() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (index) => setImgErrors((prev) => ({ ...prev, [index]: true }));

  return (
    <section id="education" className="education">
      <h2 className="section-title">
        <span className="section-title__icon" aria-hidden="true">🎓</span>
        My Education
      </h2>
      <div className="education__list">
        {education.map((item, i) => (
          <article key={i} className="education__card">
            <div className="education__image">
              {item.image && !imgErrors[i] ? (
                <img
                  src={item.image}
                  alt=""
                  className="education__image-logo"
                  onError={() => handleImgError(i)}
                />
              ) : (
                <span className="education__image-text">{item.institution.slice(0, 2)}</span>
              )}
            </div>
            <div className="education__details">
              <h3 className="education__title">{item.title}</h3>
              <p className="education__institution">{item.institution}</p>
              <p className="education__meta">
                {item.duration && item.duration !== '—' && (
                  <>
                    <span className="education__duration">{item.duration}</span>
                    <span className="education__separator"> | </span>
                  </>
                )}
                <span className="education__status">{item.status}</span>
                {item.cgpa && (
                  <>
                    <span className="education__separator"> | </span>
                    <span className="education__cgpa">{item.cgpa}</span>
                  </>
                )}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="education__research">
        <h3 className="education__research-title">
          <span className="education__research-icon" aria-hidden="true">📄</span>
          Academic Research & Review Papers
        </h3>
        <p className="education__research-intro">Published work in sustainable energy and renewable power.</p>
        <div className="education__research-list">
          {researchPapers.map((paper) => (
            <a
              key={paper.id}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="education__research-card"
            >
              <span className="education__research-number">{paper.id}</span>
              <div className="education__research-body">
                <h4 className="education__research-paper-title">{paper.title}</h4>
                <p className="education__research-venue">
                  {paper.publisher ? (
                    <>Published in <strong>{paper.venue}</strong>. Publisher: {paper.publisher}</>
                  ) : (
                    paper.venue
                  )}
                </p>
                <span className="education__research-link">Read paper →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
