import { useRef, useState } from 'react';
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import { getProjectImage } from '../../utils/images';

const featuredProjects = projects.filter((project) => project.featured);
const padNumber = (value) => String(value).padStart(2, '0');

function isSafeExternalUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return false;

  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

function ProjectLinks({ project }) {
  const repositoryLinks = project.repositories || (project.github ? [{ label: 'Source code', url: project.github }] : []);
  const validRepositoryLinks = repositoryLinks.filter((repository) => isSafeExternalUrl(repository.url));

  return (
    <div className="project-actions" role="group" aria-label="Project links">
      {validRepositoryLinks.map((repo) => (
        <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer">
          <FiGithub aria-hidden="true" /> {repo.label === 'Source code' ? 'Source code' : repo.label}
          <FiArrowUpRight className="external-arrow" aria-hidden="true" />
        </a>
      ))}
      {isSafeExternalUrl(project.demo) && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          <FiExternalLink aria-hidden="true" /> Live demo
          <FiArrowUpRight className="external-arrow" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedId, setSelectedId] = useState(featuredProjects[0]?.id || projects[0]?.id);
  const tabRefs = useRef([]);
  const visibleProjects = showAll ? projects : featuredProjects;
  const selectedProject = visibleProjects.find((project) => project.id === selectedId) || visibleProjects[0];
  const selectedImage = getProjectImage(selectedProject?.image);
  const selectedIndex = visibleProjects.findIndex((project) => project.id === selectedProject?.id);

  const handleProjectKeyDown = (event, index) => {
    const columns = window.matchMedia('(max-width: 820px)').matches ? 2 : 1;
    const length = visibleProjects.length;
    let nextIndex;

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + length) % length;
    else if (event.key === 'ArrowDown') {
      nextIndex = index + columns;
      if (nextIndex >= length) nextIndex = index % columns;
    } else if (event.key === 'ArrowUp') {
      nextIndex = index - columns;
      if (nextIndex < 0) {
        nextIndex = length - 1;
        while (nextIndex % columns !== index % columns) nextIndex -= 1;
      }
    } else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = length - 1;
    else return;

    event.preventDefault();
    const nextProject = visibleProjects[nextIndex];
    if (!nextProject) return;
    setSelectedId(nextProject.id);
    tabRefs.current[nextIndex]?.focus();
  };

  const toggleProjectSet = () => {
    if (showAll && !featuredProjects.some((project) => project.id === selectedId)) {
      setSelectedId(featuredProjects[0]?.id || projects[0]?.id);
    }
    setShowAll((value) => !value);
  };

  return (
    <section id="projects" className="projects-section section-band">
      <div className="fieldbook-shell">
        <div className="section-head-row">
          <SectionHeading
            eyebrow="Selected work / 2023—2026"
            title="Built to do a job."
            description="A working index of web applications—each with a clear purpose, a real interface, and engineering decisions worth looking at."
          />
          <a className="quiet-link all-repositories" href="https://github.com/RushdiNura" target="_blank" rel="noopener noreferrer">
            All repositories <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="project-explorer">
          <div className="project-index">
            <div className="project-index-heading">
              <span>INDEX</span>
              <span>{visibleProjects.length} PROJECTS</span>
            </div>
            <div className="project-index-list" role="tablist" aria-label={showAll ? 'All projects' : 'Featured projects'} aria-orientation="vertical" id="project-index-list">
              {visibleProjects.map((project, index) => (
                <button
                  ref={(element) => { tabRefs.current[index] = element; }}
                  type="button"
                  key={project.id}
                  id={`project-tab-${project.id}`}
                  className={`project-index-item${selectedProject?.id === project.id ? ' is-selected' : ''}`}
                  onClick={() => setSelectedId(project.id)}
                  onKeyDown={(event) => handleProjectKeyDown(event, index)}
                  role="tab"
                  aria-selected={selectedProject?.id === project.id}
                  aria-controls="project-detail-panel"
                  tabIndex={selectedProject?.id === project.id ? 0 : -1}
                >
                  <span className="project-index-number">{padNumber(index + 1)}</span>
                  <span className="project-index-name-wrap">
                    <span className="project-index-name">{project.name}</span>
                    <span className="project-index-category">{project.category}</span>
                  </span>
                  <FiArrowUpRight className="project-index-arrow" aria-hidden="true" />
                </button>
              ))}
            </div>
            <button
              className="project-index-toggle"
              type="button"
              onClick={toggleProjectSet}
              aria-expanded={showAll}
              aria-controls="project-index-list"
            >
              {showAll ? 'Show featured projects' : `Browse all ${projects.length} projects`}
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>

          {selectedProject && (
            <article
              id="project-detail-panel"
              className="project-feature"
              role="tabpanel"
              aria-labelledby={`project-tab-${selectedProject.id}`}
              tabIndex={0}
            >
              <div className="project-feature-topline">
                <span>{padNumber(selectedIndex + 1)} / {padNumber(visibleProjects.length)}</span>
                <span>{selectedProject.category}</span>
              </div>
              <div className="project-image-frame">
                {selectedImage ? (
                  <img
                    key={selectedProject.id}
                    className="project-feature-image"
                    src={selectedImage}
                    alt={`${selectedProject.name} application screenshot`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="image-fallback">Screenshot unavailable</div>
                )}
              </div>
              <div className="project-feature-copy">
                <p className="project-tagline">{selectedProject.tagline}</p>
                <h3>{selectedProject.name}</h3>
                <p className="project-description">{selectedProject.description}</p>
                {selectedProject.detail && (
                  <p className="project-detail"><span>IN PRACTICE</span>{selectedProject.detail}</p>
                )}
                {selectedProject.highlights && (
                  <ul className="project-highlights" aria-label="Key features and decisions">
                    {selectedProject.highlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                <div className="project-tech" aria-label="Technologies used">
                  {selectedProject.tech.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <ProjectLinks project={selectedProject} />
              </div>
            </article>
          )}
        </div>
        <p className="project-disclaimer">Live demos and repositories may change availability.</p>
      </div>
    </section>
  );
}
