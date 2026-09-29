import { useEffect, useState } from 'react';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        <span className="logo-ai">AI</span> &amp; <span className="logo-human">Human</span>
      </a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {navLinks.map((l) => (
          <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
