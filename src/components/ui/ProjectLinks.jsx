import { FiArrowUpRight } from 'react-icons/fi';

function isHttps(value) {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

export default function ProjectLinks({ project }) {
  const repos = (project.repositories || (project.github ? [{ label: 'Source', url: project.github }] : [])).filter((r) => isHttps(r.url));
  const hasDemo = isHttps(project.demo);
  if (!repos.length && !hasDemo) return null;

  return (
    <ul className="project-links" aria-label={`${project.name} links`}>
      {hasDemo && (
        <li>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live demo<span className="visually-hidden"> of {project.name}</span> <FiArrowUpRight aria-hidden="true" />
          </a>
        </li>
      )}
      {repos.map((repo) => (
        <li key={repo.url}>
          <a href={repo.url} target="_blank" rel="noopener noreferrer">
            {repo.label}
            <span className="visually-hidden"> code for {project.name}</span> <FiArrowUpRight aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
