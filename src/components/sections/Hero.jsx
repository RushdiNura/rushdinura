import { FiArrowDownRight, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { getProjectImage } from '../../utils/images';
import cvFile from '../../assets/RUSHDI-NURA-CV.pdf';

const featureImage = getProjectImage('hr-report');

export default function Hero() {
  return (
    <section id="home" className="hero-section fieldbook-shell">
      <div className="hero-topline">
        <span>SOFTWARE ENGINEERING</span>
        <span className="topline-divider" aria-hidden="true" />
        <span>FULL-STACK DEVELOPMENT</span>
        <span className="hero-location">AGARO, ETHIOPIA</span>
      </div>

      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-overline">A working portfolio by Rushdi Nura</p>
          <h1 className="hero-title">
            From the first form
            <br />
            to the <em>final report.</em>
          </h1>
          <p className="hero-intro">
            I’m Rushdi, a Software Engineering graduate from Jimma University. I build full-stack web applications—from reporting and recruitment tools to booking platforms—with React, Node.js, Express, and databases.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore selected work <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href={cvFile} download="Rushdi-Nura-CV.pdf">
              <FiDownload aria-hidden="true" /> Download CV
            </a>
          </div>

          <div className="hero-facts" aria-label="Professional background">
            <div>
              <span className="fact-label">EDUCATION</span>
              <span className="fact-value">B.Sc. Software Engineering</span>
            </div>
            <div>
              <span className="fact-label">UNIVERSITY</span>
              <span className="fact-value">Jimma University · 2026</span>
            </div>
          </div>
        </div>

        <a className="hero-proof" href="#projects" aria-label="Explore the HR Reporting System project">
          <div className="hero-proof-heading">
            <span>SELECTED PROJECT</span>
            <span>REPORTING / HR-01</span>
          </div>
          <div className="hero-proof-image-wrap">
            {featureImage ? (
              <img
                className="hero-proof-image"
                src={featureImage}
                alt="Screenshot of the HR Reporting System interface"
                fetchPriority="high"
              />
            ) : (
              <div className="image-fallback">HR Reporting System</div>
            )}
          </div>
          <div className="hero-proof-caption">
            <div>
              <span className="proof-category">REPORTING & OPERATIONS</span>
              <p className="hero-proof-title">HR Reporting System</p>
              <p>Structured reports, role-based access, and useful summaries.</p>
            </div>
            <span className="proof-arrow" aria-hidden="true"><FiArrowUpRight /></span>
          </div>
          <div className="hero-proof-footnote">
            <span>REAL PROJECT / REAL INTERFACE</span>
            <span>OPEN PROJECT INDEX <FiArrowUpRight aria-hidden="true" /></span>
          </div>
        </a>
      </div>

      <div className="hero-bottomline">
        <span>REACT · NODE.JS · DATABASES</span>
        <a href="#about">A little about my approach <FiArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}
