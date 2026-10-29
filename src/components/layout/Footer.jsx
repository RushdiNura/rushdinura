import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const goToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('home')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="fieldbook-shell footer-main">
        <a className="footer-wordmark" href="#home">Rushdi Nura<span>.</span></a>
        <p>Software engineering graduate · Full-stack development</p>
        <div className="footer-actions">
          <a href="https://github.com/RushdiNura" target="_blank" rel="noopener noreferrer">GitHub <FiArrowUpRight aria-hidden="true" /></a>
          <a href="mailto:rushdinurafita@gmail.com">Email <FiArrowUpRight aria-hidden="true" /></a>
          <button type="button" onClick={goToTop} aria-label="Back to top"><FiArrowUp aria-hidden="true" /></button>
        </div>
      </div>
      <div className="fieldbook-shell footer-bottom">
        <span>© {new Date().getFullYear()} Rushdi Nura</span>
        <span>Built with React and Vite</span>
      </div>
    </footer>
  );
}
