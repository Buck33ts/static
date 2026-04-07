import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element.getBoundingClientRect();
          const elementTop = offsetTop + window.scrollY;
          const elementBottom = elementTop + offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Apply theme to body
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: 'home', label: 'Home', section: 'home' },
    { path: 'about', label: 'About', section: 'about' },
    { path: 'services', label: 'Services', section: 'services' },
    { path: 'testimonials', label: 'Testimonials', section: 'testimonials' },
    { path: 'contact', label: 'Contact', section: 'contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : 'desktop'}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo">
              <div className="logo-container">
                <div className="logo-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="16" stroke="var(--primary-color)" strokeWidth="2.5"/>
                    <path d="M13 18C13 14 16 10 20 10C24 10 27 14 27 18C27 22 24 26 20 26C16 26 13 22 13 18Z" fill="var(--primary-color)"/>
                    <path d="M9 18C9 12 14 7 20 7C26 7 31 12 31 18C31 24 26 29 20 29C14 29 9 24 9 18Z" stroke="var(--primary-color)" strokeWidth="2.5"/>
                  </svg>
                </div>
                <div className="logo-text">
                  <span className="logo-main">ASP</span>
                  <span className="logo-sub">Therapy</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.section}>
                  <button
                    className={`nav-link ${activeSection === link.section ? 'active' : ''}`}
                    onClick={() => scrollToSection(link.section)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="navbar-controls">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 1v6M12 17v6M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h6M17 12h6M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
              <Link to="/contact" className="navbar-cta">
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <div className="logo-container">
                <div className="logo-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="14" stroke="var(--primary-color)" strokeWidth="2.5"/>
                    <path d="M11 16C11 12 14 8 18 8C22 8 25 12 25 16C25 20 22 24 18 24C14 24 11 20 11 16Z" fill="var(--primary-color)"/>
                    <path d="M7 16C7 10 12 5 18 5C24 5 29 10 29 16C29 22 24 27 18 27C12 27 7 22 7 16Z" stroke="var(--primary-color)" strokeWidth="2.5"/>
                  </svg>
                </div>
                <div className="logo-text">
                  <span className="logo-main">ASP</span>
                  <span className="logo-sub">Therapy</span>
                </div>
              </div>
            </div>
            <button
              className="mobile-close"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.section}>
                <button
                  className={`mobile-nav-link ${activeSection === link.section ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.section)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="mobile-nav-footer">
            <div className="mobile-theme-toggle">
              <button
                className="mobile-theme-button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <span className="mobile-theme-icon">
                  {theme === 'light' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 1v6M12 17v6M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h6M17 12h6M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </span>
                <span className="mobile-theme-text">
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </span>
              </button>
            </div>
            <Link to="/contact" className="mobile-cta" onClick={toggleMenu}>
              Book Appointment
            </Link>
            <div className="mobile-contact">
              <a href="tel:5551234567" className="mobile-phone">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 2h9c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-9C2.672 14 2 13.328 2 12.5v-9C2 2.672 2.672 2 3.5 2z" stroke="currentColor" strokeWidth="1"/>
                  <path d="M5 6.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v3c0 .828-.672 1.5-1.5 1.5S5 10.328 5 9.5v-3z" fill="currentColor"/>
                  <path d="M8 6.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v3c0 .828-.672 1.5-1.5 1.5S8 10.328 8 9.5v-3z" fill="currentColor"/>
                </svg>
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMenu}></div>
      )}

      {/* Floating CTA for Mobile */}
      {isMobile && isScrolled && (
        <div className="floating-cta">
          <Link to="/contact" className="floating-cta-button">
            Book Appointment
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
