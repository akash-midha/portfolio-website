import { useState } from 'react';
import { site, navLinks } from '../../data/portfolio';
import './Header.css';

function Header({ activeSection, onNavClick }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="header">
      <a href="#home" className="header__logo" onClick={(e) => onNavClick(e, 'home')}>
        {!logoError ? (
          <img
            src={site.logoImage}
            className="header__logo-img"
            alt={`${site.name} logo`}
            onError={() => setLogoError(true)}
          />
        ) : (
          <span className="header__logo-fallback">AM</span>
        )}
        <h3 className="site-name">{site.name}</h3>
      </a>
      <nav className="header__nav">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`header__link ${activeSection === id ? 'header__link--active' : ''}`}
            onClick={(e) => onNavClick(e, id)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
