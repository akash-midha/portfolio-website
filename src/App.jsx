import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { site, navLinks } from './data/portfolio';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (site.siteTitle) document.title = site.siteTitle;
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(({ id }) => id);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop - 120 <= scrollY) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
  };

  return (
    <>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
