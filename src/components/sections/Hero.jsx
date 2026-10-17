import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { getProjectImage } from '../../utils/images';
import cvFile from '../../assets/RUSHDI-NURA-CV.pdf';

export default function Hero() {
  return (
    <section id="home" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="label">Software engineer · Agaro, Ethiopia</p>
        <h1 id="hero-title">
          I build full-stack tools for <em>reports, records and bookings.</em>
        </h1>
        <p className="hero-lede">
          I’m Rushdi Nura, a Software Engineering graduate of Jimma University (2026). I work across React, Node.js and MongoDB,
          and spent 2025 as a software engineering intern at Abajifar Technology in Jimma, on frontend, backend, testing and documentation.
        </p>

        <div className="hero-actions">
          <a className="button" href="#work">
            See the work <FiArrowDown aria-hidden="true" />
          </a>
          <a className="text-link" href={cvFile} download="Rushdi-Nura-CV.pdf">
            <FiDownload aria-hidden="true" /> CV (PDF)
          </a>
          <a className="text-link" href="mailto:rushdinurafita@gmail.com">
            rushdinurafita@gmail.com
          </a>
        </div>

        <dl className="hero-facts">
          <div><dt>Degree</dt><dd>B.Sc. Software Engineering, CGPA 3.42</dd></div>
          <div><dt>Main stack</dt><dd>React, Node.js, Express, MongoDB</dd></div>
          <div><dt>Languages</dt><dd>Amharic, Afaan Oromo, English</dd></div>
        </dl>
      </div>

      <figure className="hero-figure">
        <a href="#real-estate-terra" aria-label="Read the Terra Real Estate case study">
          <img
            src={getProjectImage('terra')}
            alt="Terra Real Estate agent dashboard listing properties with prices, status and edit and delete buttons"
            width="1350"
            height="608"
            fetchPriority="high"
          />
        </a>
        <figcaption>
          <span>Fig. 1</span> Terra Real Estate, agent dashboard. Full-stack MERN project.
        </figcaption>
      </figure>
    </section>
  );
}
