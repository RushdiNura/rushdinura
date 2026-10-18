import { credentials } from '../../data/credentials';

const ledger = [
  {
    period: '2025',
    title: 'Software Engineering Intern',
    org: 'Abajifar Technology PLC, Jimma',
    text: 'Frontend and backend development, testing, debugging, maintenance and documentation, working with developers to troubleshoot issues.',
  },
  {
    period: '2023–2026',
    title: 'Grand Food Club Leader',
    org: 'Jimma Institute of Technology Student Union',
    text: 'Led the student club that monitors cafeteria food quality, hygiene and service. Collected and analysed student feedback and took the findings to university management.',
  },
  {
    period: '2023–2026',
    title: 'Peace Forum Club, core member',
    org: 'Jimma University',
    text: 'Took part in student-led peacebuilding activities and completed Peace Education Training with the British Council.',
  },
  {
    period: '2021–2026',
    title: 'B.Sc. in Software Engineering',
    org: 'Jimma University, Jimma Institute of Technology · CGPA 3.42',
    text: 'Web development, AI and machine learning, databases, data structures and algorithms, OOP, software architecture, testing and QA, networks and security.',
  },
];

export default function Background() {
  return (
    <section
      id="background"
      className="background"
      aria-labelledby="background-title"
    >
      <div className="shell background-grid">
        <header className="section-heading">
          <p className="label">Background</p>
          <h2 id="background-title">Experience, study and the rest</h2>
          <p className="section-intro">
            Internship, degree, student roles and certificates, as listed on my
            CV.
          </p>
        </header>

        <div>
          <ol className="ledger">
            {ledger.map((item) => (
              <li key={item.title}>
                <p className="ledger-period">{item.period}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p className="ledger-org">{item.org}</p>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="credentials-title">Certificates</h3>
          {/* <ul className="credentials">
            {credentials.map((c) => (
              <li key={c.title}>
                <span>
                  <strong>{c.title}</strong>
                  <span className="credential-issuer">{c.issuer}{c.date ? ` · ${c.date}` : ''}</span>
                </span>
                {c.scan && (
                  <a href={c.scan} target="_blank" rel="noopener noreferrer">
                    View scan<span className="visually-hidden">: {c.title}</span>
                  </a>
                )}
              </li>
            ))}
          </ul> */}
          <ul className="credentials">
            {credentials.map((c) => {
              const scans =
                c.scans ||
                (c.scan ? [{ label: "View scan", src: c.scan }] : []);
              return (
                <li key={c.title}>
                  <span>
                    <strong>{c.title}</strong>
                    <span className="credential-issuer">
                      {c.issuer}
                      {c.date ? ` · ${c.date}` : ""}
                    </span>
                  </span>
                  {scans.length > 0 && (
                    <span className="credential-links">
                      {scans.map((s) => (
                        <a
                          key={s.label}
                          href={s.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {s.label}
                          <span className="visually-hidden">: {c.title}</span>
                        </a>
                      ))}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
