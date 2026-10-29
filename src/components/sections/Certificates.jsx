import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { getCertificateImages } from '../../utils/images';

const INITIAL_COUNT = 6;

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const certificates = getCertificateImages();
  const visibleCertificates = showAll ? certificates : certificates.slice(0, INITIAL_COUNT);

  return (
    <section id="certificates" className="certificates-section">
      <div className="fieldbook-shell">
        <div className="section-head-row">
          <SectionHeading
            eyebrow="Certificates & learning"
            title="A record of continued learning."
            description="Certificates, recognition and training from Jimma University and other programmes."
          />
          {certificates.length > INITIAL_COUNT && (
            <button className="quiet-link certificate-toggle" type="button" onClick={() => setShowAll((value) => !value)}>
              {showAll ? 'Show fewer' : 'View all certificates'} <FiArrowUpRight aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="certificate-grid">
          {visibleCertificates.map((certificate, index) => (
            <figure className="certificate-item" key={certificate.src}>
              <div className="certificate-image-wrap">
                <img src={certificate.src} alt={`${certificate.title} certificate`} loading="lazy" />
                <span className="certificate-index">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <figcaption>{certificate.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
