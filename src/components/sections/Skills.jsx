import { useRef, useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { skillGroups } from '../../data/skills';

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].id);
  const tabRefs = useRef([]);
  const group = skillGroups.find((item) => item.id === activeGroup) || skillGroups[0];

  const handleTabKeyDown = (event, index) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % skillGroups.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + skillGroups.length) % skillGroups.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = skillGroups.length - 1;
    else return;

    event.preventDefault();
    setActiveGroup(skillGroups[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section id="skills" className="skills-section section-band">
      <div className="fieldbook-shell">
        <SectionHeading
          eyebrow="Tools I use"
          title="A practical stack, not a scoreboard."
          description="Grouped by the kind of work each technology helps me do. No percentage bars—just the tools I’ve used in projects, coursework, and development workflows."
        />

        <div className="skills-workbench">
          <div className="skills-tabs" role="tablist" aria-label="Technology groups">
            {skillGroups.map((item, index) => (
              <button
                ref={(element) => { tabRefs.current[index] = element; }}
                type="button"
                key={item.id}
                id={`skill-tab-${item.id}`}
                role="tab"
                aria-selected={activeGroup === item.id}
                aria-controls="skill-panel"
                tabIndex={activeGroup === item.id ? 0 : -1}
                className={`skills-tab${activeGroup === item.id ? ' is-active' : ''}`}
                onClick={() => setActiveGroup(item.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.label}
              </button>
            ))}
          </div>

          <div className="skills-panel" role="tabpanel" id="skill-panel" aria-labelledby={`skill-tab-${group.id}`} tabIndex={0}>
            <div className="skills-panel-heading">
              <p className="skills-eyebrow">{group.label.toUpperCase()}</p>
              <p>{group.note}</p>
            </div>
            <ul className="skills-list">
              {group.items.map((skill, index) => (
                <li key={skill}>
                  <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
