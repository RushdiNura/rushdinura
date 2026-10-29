import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { useActiveSection } from '../../hooks/useActiveSection';

const LINKS = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'experience', label: 'Background' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'certificates', label: 'Certificates' },
];

const SECTION_IDS = ['home', 'projects', 'about', 'skills', 'experience', 'leadership', 'certificates', 'contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const { activeId, scrolled } = useActiveSection(SECTION_IDS, 110);

  const closeMenu = () => setOpen(false);
  const navigateFromMobileMenu = (sectionId) => {
    setOpen(false);
    window.requestAnimationFrame(() => {
      const heading = document.getElementById(sectionId)?.querySelector('h1, h2');
      if (!heading) return;
      if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    });
  };
  const handleHeaderKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      closeMenu();
      menuButtonRef.current?.focus();
    }
  };

  useEffect(() => {
    if (open) firstMobileLinkRef.current?.focus();
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} onKeyDown={handleHeaderKeyDown}>
      <nav className="site-nav fieldbook-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Rushdi Nura — home">
          <span className="wordmark-stamp" aria-hidden="true">RN</span>
          <span>Rushdi <strong>Nura</strong></span>
        </a>

        <div className="desktop-nav">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link${activeId === link.id ? ' is-active' : ''}`}
              aria-current={activeId === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-contact" href="#contact">
          Contact <FiArrowUpRight aria-hidden="true" />
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </nav>

      <div className="mobile-nav-panel" id="mobile-navigation" hidden={!open}>
          <nav className="mobile-nav fieldbook-shell" aria-label="Mobile navigation">
            {LINKS.map((link, index) => (
              <a
                key={link.id}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                href={`#${link.id}`}
                onClick={() => navigateFromMobileMenu(link.id)}
                aria-current={activeId === link.id ? 'location' : undefined}
              >
                <span className="mobile-nav-number">0{index + 1}</span>
                <span>{link.label}</span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
            <a href="#contact" onClick={() => navigateFromMobileMenu('contact')}>
              <span className="mobile-nav-number">{String(LINKS.length + 1).padStart(2, '0')}</span>
              <span>Contact</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </nav>
      </div>
    </header>
  );
}
