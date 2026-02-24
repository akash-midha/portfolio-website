import { researchPapers } from '../../data/portfolio';
import './Research.css';

function Research() {
  return (
    <section id="research" className="research">
      <h2 className="research__title">
        <span className="research__icon" aria-hidden="true">📄</span>
        Academic Research & Review Papers
      </h2>
      <p className="research__intro">
        Published work in sustainable energy and renewable power.
      </p>
      <div className="research__list">
        {researchPapers.map((paper) => (
          <a
            key={paper.id}
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="research__card"
          >
            <span className="research__card-number">{paper.id}</span>
            <div className="research__card-body">
              <h3 className="research__card-title">{paper.title}</h3>
              <p className="research__card-venue">
                {paper.publisher ? (
                  <>Published in <strong>{paper.venue}</strong>. Publisher: {paper.publisher}</>
                ) : (
                  paper.venue
                )}
              </p>
              <span className="research__card-link">
                Read paper <span className="research__card-arrow">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Research;
