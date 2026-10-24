import { FiPlus } from 'react-icons/fi';
import ProjectLinks from '../ui/ProjectLinks';
import { projects } from '../../data/projects';
import { getProjectImage } from '../../utils/images';

const caseStudies = projects.filter((p) => p.caseStudy);
const others = projects.filter((p) => !p.caseStudy);

function CaseStudy({ project, index }) {
  const image = getProjectImage(project.image);
  return (
    <article className="case" id={project.id} aria-labelledby={`${project.id}-title`}>
      <figure className="case-figure">
        <img src={image} alt={`${project.name} interface`} width="1350" height="608" loading="lazy" decoding="async" />
        <figcaption>
          <span>Fig. {index + 2}</span> {project.name}
        </figcaption>
      </figure>

      <div className="case-body">
        <p className="label">
          {project.category}
          {project.role ? ` · ${project.role}` : ''}
        </p>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p className="case-summary">{project.summary}</p>

        <div className="case-columns">
          <div>
            <h4 className="label">What it does</h4>
            <ul className="plain-list">
              {project.built.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="label">Decisions worth noting</h4>
            <ul className="plain-list">
              {project.decisions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        {project.open && (
          <p className="case-open"><strong>Open items.</strong> {project.open}</p>
        )}

        <p className="tech-line"><span className="visually-hidden">Technologies: </span>{project.tech.join(' · ')}</p>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="shell">
        <header className="section-heading">
          <p className="label">Work</p>
          <h2 id="work-title">Five projects in detail, seven more below</h2>
          <p className="section-intro">
            Live demo and source links are on each project. For the first five I’ve written down what the app does, the engineering choices I’d point to, and what is still unfinished.
          </p>
        </header>

        <div className="cases">
          {caseStudies.map((project, index) => <CaseStudy key={project.id} project={project} index={index} />)}
        </div>

        <div className="more">
          <h3>More projects</h3>
          <ul className="more-list">
            {others.map((project) => (
              <li key={project.id}>
                <details>
                  <summary>
                    <span className="more-name">{project.name}</span>
                    <span className="more-category">{project.category}</span>
                    <FiPlus className="more-icon" aria-hidden="true" />
                  </summary>
                  <div className="more-detail">
                    <img src={getProjectImage(project.image)} alt={`${project.name} interface`} width="1350" height="608" loading="lazy" decoding="async" />
                    <div>
                      <p>{project.summary}</p>
                      <p className="tech-line">{project.tech.join(' · ')}</p>
                      <ProjectLinks project={project} />
                    </div>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
