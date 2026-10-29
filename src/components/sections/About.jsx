import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="fieldbook-shell about-layout">
        <div className="about-intro">
          <SectionHeading eyebrow="A note about the work" title="Useful software starts with understanding the work." />
          <p className="about-lede">
            I’m a Software Engineering graduate from Jimma University. Most of my project work sits where people, information, and processes meet: reporting, recruitment, booking, and managing records.
          </p>
          <p className="about-body">
            I work across the interface, application logic, and database rather than treating them as separate pieces. Building these projects has given me practical experience with React, Node.js, Express, REST APIs, authentication, and data modeling.
          </p>
          <a className="quiet-link" href="#experience">Read my background <FiArrowUpRight aria-hidden="true" /></a>
        </div>

        <aside className="about-note" aria-label="Education note">
          <div className="note-index">FIELD NOTE / 001</div>
          <div className="note-mark" aria-hidden="true">RN<span>.</span></div>
          <p className="note-quote">Reporting, recruitment, and booking — practical workflows connected across the stack.</p>
          <div className="note-rule" />
          <dl className="note-facts">
            <div><dt>Degree</dt><dd>B.Sc. Software Engineering</dd></div>
            <div><dt>Institution</dt><dd>Jimma University</dd></div>
            <div><dt>Based in</dt><dd>Agaro, Ethiopia</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
