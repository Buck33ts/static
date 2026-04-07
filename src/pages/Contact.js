import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Clinic',
      details: ['123 Wellness Street', 'Health City, HC 12345', 'United States'],
      action: 'Get Directions'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['Main: (555) 123-4567', 'Fax: (555) 123-4568', 'Emergency: (555) 911-HELP'],
      action: 'Call Now'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@asptherapy.com', 'appointments@asptherapy.com', 'billing@asptherapy.com'],
      action: 'Send Email'
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      action: 'Book Appointment'
    }
  ];

  const services = [
    'Sports Injury Rehabilitation',
    'Post-Surgical Recovery',
    'Pain Management',
    'Mobility Therapy',
    'Neurological Rehabilitation',
    'Geriatric Physical Therapy',
    'Aquatic Therapy',
    'Other'
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Get in Touch</h1>
            <p className="contact-hero-subtitle">
              We're here to help you start your recovery journey. Contact us to schedule an appointment or learn more about our services.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Support</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15min</div>
                <div className="stat-label">Response Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How to Reach Us</h2>
            <p className="section-subtitle">
              Multiple ways to connect with our expert team
            </p>
          </div>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <Card key={index} hover className="contact-info-card">
                <div className="contact-info-header">
                  <div className="contact-info-icon">{info.icon}</div>
                  <h3 className="contact-info-title">{info.title}</h3>
                </div>
                <div className="contact-info-details">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="contact-info-detail">{detail}</p>
                  ))}
                </div>
                <Button variant="outline" size="small" className="contact-info-action">
                  {info.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <div className="form-header">
              <h2 className="form-title">Schedule Your Consultation</h2>
              <p className="form-subtitle">
                Take the first step towards recovery. Fill out the form below and we'll contact you within 24 hours.
              </p>
            </div>
            
            <div className="form-wrapper">
              <Card className="form-card">
                {formStatus === 'success' && (
                  <div className="form-success-message">
                    <div className="success-icon">✓</div>
                    <div className="success-content">
                      <h3>Thank You!</h3>
                      <p>We've received your inquiry and will contact you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="(555) 123-4567"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service" className="form-label">Service Interest *</label>
                      <select
                        id="service"
                        name="service"
                        className="form-select"
                        required
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Tell us about your needs</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      rows="4"
                      placeholder="Please describe your condition, symptoms, or specific needs..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <Button type="submit" variant="primary" size="large" fullWidth>
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <div className="map-header">
              <h2 className="map-title">Find Our Clinic</h2>
              <p className="map-subtitle">
                Conveniently located in the heart of Health City
              </p>
            </div>
            <div className="map-wrapper">
              <Card className="map-card">
                <div className="map-placeholder">
                  <svg width="100%" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="400" fill="#f8fafc"/>
                    <rect x="50" y="50" width="500" height="300" fill="#e2e8f0" rx="16"/>
                    <circle cx="300" cy="200" r="80" fill="#0d9488" opacity="0.2"/>
                    <path d="M250 200C250 160 290 120 330 120C370 120 410 160 410 200C410 240 370 280 330 280C290 280 250 240 250 200Z" fill="#0d9488" opacity="0.3"/>
                    <circle cx="300" cy="200" r="20" fill="#0d9488"/>
                    <path d="M300 200L320 180M300 200L280 180" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M300 200L320 220M300 200L280 220" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div className="map-overlay-content">
                    <div className="map-location">
                      <h3>ASP Therapy Clinic</h3>
                      <p>123 Wellness Street, Health City, HC 12345</p>
                      <Button variant="primary" size="small">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers to common questions about our services
            </p>
          </div>
          <div className="faq-grid">
            <Card className="faq-card">
              <div className="faq-header">
                <div className="faq-icon">📋</div>
                <h3 className="faq-question">Do I need a doctor's referral?</h3>
              </div>
              <p className="faq-answer">
                In most states, you can directly access physical therapy without a referral. However, some insurance plans may require a referral for coverage. We can help you navigate this process.
              </p>
            </Card>
            <Card className="faq-card">
              <div className="faq-header">
                <div className="faq-icon">💳</div>
                <h3 className="faq-question">What should I bring to my first appointment?</h3>
              </div>
              <p className="faq-answer">
                Please bring your photo ID, insurance card, list of medications, and any relevant medical records. Wear comfortable clothing that allows for easy movement.
              </p>
            </Card>
            <Card className="faq-card">
              <div className="faq-header">
                <div className="faq-icon">⏱️</div>
                <h3 className="faq-question">How long are typical sessions?</h3>
              </div>
              <p className="faq-answer">
                Initial evaluations are typically 60-90 minutes, while follow-up sessions are 45-60 minutes. The exact duration depends on your specific treatment plan and needs.
              </p>
            </Card>
            <Card className="faq-card">
              <div className="faq-header">
                <div className="faq-icon">🏥</div>
                <h3 className="faq-question">Do you accept my insurance?</h3>
              </div>
              <p className="faq-answer">
                We accept most major insurance plans including Medicare, Blue Cross Blue Shield, Aetna, and many others. Contact our office to verify your specific coverage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-section">
        <div className="container">
          <Card className="emergency-card">
            <div className="emergency-content">
              <div className="emergency-icon">🚨</div>
              <div className="emergency-text">
                <h3 className="emergency-title">Emergency Contact</h3>
                <p className="emergency-description">
                  For urgent medical emergencies, please call 911 or visit the nearest emergency room.
                </p>
                <div className="emergency-phone">
                  <strong>After Hours Emergency:</strong> (555) 911-HELP
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
