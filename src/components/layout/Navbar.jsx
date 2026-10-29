import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useActiveSection } from '../../hooks/useActiveSection';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' },
];
const SECTION_IDS = ['home', ...LINKS.map((l) => l.id)];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const { activeId, scrolled } = useActiveSection(SECTION_IDS, 110);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  const onKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
      onKeyDown={onKeyDown}
    >
      <nav className="shell site-nav" aria-label="Main">
        {/* <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          Rushdi Nura
        </a> */}
        <a
          className="wordmark"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Rushdi Nura, home"
        >
          <span className="wordmark-mark" aria-hidden="true">
            RN
          </span>
          <span>Rushdi Nura</span>
        </a>
        <ul className="nav-list">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="nav-link"
                aria-current={activeId === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={buttonRef}
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </nav>

      <div className="mobile-nav" id="mobile-nav" hidden={!open}>
        <ul className="shell">
          {LINKS.map((link, index) => (
            <li key={link.id}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={activeId === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
