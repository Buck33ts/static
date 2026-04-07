import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'f', url: '#' },
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: 'in', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="var(--primary-color)" strokeWidth="2.5"/>
                  <path d="M15 20C15 16.134 18.134 13 22 13C25.866 13 29 16.134 29 20C29 23.866 25.866 27 22 27C18.134 27 15 23.866 15 20Z" fill="var(--primary-color)"/>
                  <path d="M11 20C11 13.925 15.925 9 22 9C28.075 9 33 13.925 33 20C33 26.075 28.075 31 22 31C15.925 31 11 26.075 11 20Z" stroke="var(--primary-color)" strokeWidth="2.5"/>
                </svg>
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-main">ASP</span>
                <span className="footer-logo-sub">Therapy</span>
              </div>
            </Link>
          </div>

          {/* Main Content */}
          <div className="footer-main">
            {/* About Section */}
            <div className="footer-section">
              <h3 className="footer-title">About ASP Therapy</h3>
              <p className="footer-description">
                We are dedicated to providing exceptional physical therapy services that help our patients 
                achieve their recovery goals and return to active, pain-free lives.
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5h10M3 10h10M3 15h10" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>123 Wellness Street, Health City, HC 12345</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 3h11c.828 0 1.5.672 1.5 1.5v8c0 .828-.672 1.5-1.5 1.5h-11C1.672 14 1 13.328 1 12.5v-8C1 3.672 1.672 3 2.5 3z" stroke="var(--text-primary)" strokeWidth="1"/>
                    <path d="M4 6.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v3c0 .828-.672 1.5-1.5 1.5S4 10.328 4 9.5v-3z" fill="var(--text-primary)"/>
                    <path d="M7 6.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v3c0 .828-.672 1.5-1.5 1.5S7 10.328 7 9.5v-3z" fill="var(--text-primary)"/>
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="4" width="14" height="8" rx="2" stroke="var(--text-primary)" strokeWidth="2"/>
                    <path d="M3 8h10" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>info@asptherapy.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><Link to="/services" className="footer-link">Sports Injury Rehab</Link></li>
                <li><Link to="/services" className="footer-link">Post-Surgical Recovery</Link></li>
                <li><Link to="/services" className="footer-link">Pain Management</Link></li>
                <li><Link to="/services" className="footer-link">Mobility Therapy</Link></li>
              </ul>
            </div>

            {/* Hours */}
            <div className="footer-section">
              <h3 className="footer-title">Business Hours</h3>
              <div className="footer-hours">
                <div className="hours-item">
                  <span className="hours-day">Monday - Friday</span>
                  <span className="hours-time">8:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">9:00 AM - 2:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                &copy; {currentYear} ASP Therapy. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
                <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
