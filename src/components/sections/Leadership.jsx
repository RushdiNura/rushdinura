import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

export default function Leadership() {
  return (
    <section id="leadership" className="leadership-section section-band">
      <div className="fieldbook-shell leadership-layout">
        <div>
          <SectionHeading
            eyebrow="Outside the editor"
            title="Work is also about people."
            description="Alongside my degree, I took part in student leadership and peace-education activities at Jimma University."
          />
        </div>
        <div className="leadership-records">
          <article className="leadership-record">
            <span className="record-number">01</span>
            <div>
              <p className="record-kicker">2023—2026</p>
              <h3>Grand Food Club Leader</h3>
              <p>Worked with students and university management on cafeteria food quality, hygiene, service issues, and feedback.</p>
            </div>
            <span className="record-mark" aria-hidden="true">↗</span>
          </article>
          <article className="leadership-record">
            <span className="record-number">02</span>
            <div>
              <p className="record-kicker">UNIVERSITY ACTIVITIES</p>
              <h3>Peace Forum Club · Core Member</h3>
              <p>Participated in student-led peacebuilding activities and completed Peace Education Training through the British Council.</p>
            </div>
            <a className="record-mark record-link" href="#certificates" aria-label="View certificates"><FiArrowUpRight aria-hidden="true" /></a>
          </article>
        </div>
      </div>
    </section>
  );
}
