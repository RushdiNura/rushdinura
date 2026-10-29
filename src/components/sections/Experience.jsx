import SectionHeading from '../ui/SectionHeading';

const experience = [
  {
    period: '2025',
    type: 'INTERNSHIP',
    title: 'Software Engineering Intern',
    organization: 'Abajifar Technology PLC · Jimma',
    description: 'Assisted with frontend and backend development, testing, debugging, application maintenance, and documentation while collaborating with developers to troubleshoot technical issues.',
  },
  {
    period: '2023—2026',
    type: 'STUDENT LEADERSHIP',
    title: 'Grand Food Club Leader',
    organization: 'Jimma University Institute of Technology Student Union',
    description: 'Monitored cafeteria food quality, hygiene, and service standards; collected student feedback, documented concerns, and communicated findings to university management.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="fieldbook-shell">
        <SectionHeading
          eyebrow="Experience & education"
          title="The path so far."
          description="A concise record of the work and study documented in my CV."
        />

        <div className="timeline-layout">
          <div className="timeline-column">
            <p className="timeline-heading">EXPERIENCE</p>
            {experience.map((item, index) => (
              <article className="timeline-entry" key={item.title}>
                <div className="timeline-period">
                  <span>{item.period}</span>
                  <span className="timeline-point" aria-hidden="true" />
                </div>
                <div className="timeline-entry-content">
                  <p className="timeline-type">{item.type}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-organization">{item.organization}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="education-note">
            <p className="timeline-heading">EDUCATION</p>
            <div className="education-date">2021—2026</div>
            <h3>B.Sc. in Software Engineering</h3>
            <p className="timeline-organization">Jimma University · Jimma Institute of Technology</p>
            <p className="education-grade">CGPA <strong>3.42</strong></p>
            <div className="education-rule" />
            <p className="education-caption">Relevant study areas</p>
            <ul className="education-topics">
              <li>Web development</li>
              <li>AI & machine learning</li>
              <li>Databases and data structures</li>
              <li>Object-oriented programming</li>
              <li>Software architecture and testing</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
