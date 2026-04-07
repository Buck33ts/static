import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const services = [
    'Sports Injury Rehabilitation',
    'Post-Surgical Recovery',
    'Pain Management',
    'Mobility Therapy'
  ];

  const serviceData = [
    {
      icon: '🏃',
      title: 'Sports Injury Rehab',
      description: 'Expert treatment for sports-related injuries to get you back in the game.'
    },
    {
      icon: '💪',
      title: 'Post-Surgical Recovery',
      description: 'Specialized rehabilitation programs to restore strength and mobility after surgery.'
    },
    {
      icon: '🌿',
      title: 'Pain Management',
      description: 'Evidence-based approaches to manage chronic pain and improve your quality of life.'
    },
    {
      icon: '🚶',
      title: 'Mobility Therapy',
      description: 'Customized treatment plans to enhance movement, flexibility, and independence.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Patients Helped', icon: '👥' },
    { number: '15+', label: 'Years Experience', icon: '📅' },
    { number: '98%', label: 'Success Rate', icon: '⭐' },
    { number: '4.9', label: 'Average Rating', icon: '🏆' }
  ];

  const statsSection = (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormStatus('success');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title fade-in">
                Your Journey to <span className="gradient-text">Complete Recovery</span>
              </h1>
              <p className="hero-subtitle fade-in">
                At ASP Therapy, we understand that healing is both physical and emotional. 
                Our compassionate team is dedicated to guiding you through every step of your recovery 
                with personalized care that addresses not just your symptoms, but your whole well-being.
              </p>
              <div className="hero-actions fade-in">
                <Button to="/contact" size="large" variant="primary">
                  Book an Appointment
                </Button>
                <Button to="/about" size="large" variant="outline">
                  Our Services
                </Button>
              </div>
            </div>
            <div className="hero-image fade-in">
              <div className="hero-image-placeholder">
                <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="500" height="400" fill="#ffffff"/>
                  <rect x="50" y="50" width="400" height="300" fill="#f8fafc" rx="20"/>
                  <circle cx="250" cy="200" r="100" fill="#e2e8f0" opacity="0.5"/>
                  <path d="M200 200C200 150 230 110 270 110C310 110 350 150 350 200C350 250 310 290 270 290C230 290 200 250 200 200Z" fill="#cbd5e1" opacity="0.6"/>
                  <circle cx="250" cy="200" r="40" fill="#94a3b8"/>
                  {/* Professional medical icon */}
                  <path d="M250 160L250 240M220 180L280 180M220 220L280 220" stroke="#0d9488" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M180 160L320 160M180 240L320 240" stroke="#0d9488" strokeWidth="3" strokeLinecap="round"/>
                  {/* Heart pulse animation */}
                  <circle cx="250" cy="200" r="60" fill="none" stroke="#0d9488" strokeWidth="2" stroke-dasharray="5 5" opacity="0.3"/>
                  <path d="M230 170C210 170 190 230 230 230 230C230 230 270 210 270 210 270C270 270 310 230 310 230 310C310 310 350 270 350 270 350C350 350 370 310 270 370 270C370 270 370 310 350 230 350 350 270 350 310 350 230 350 350 270" stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.7"/>
                </svg>
                <div className="hero-overlay">
                  <div className="hero-overlay-text">
                    <h3>Your Path to Healing</h3>
                    <p>Every step forward is progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="intro-title">Welcome to ASP Therapy</h2>
            <p className="intro-text">
              At ASP Therapy, we believe that everyone deserves to live life without pain or limitation. 
              Our team of experienced physical therapists is dedicated to providing personalized, evidence-based care 
              that addresses your unique needs and goals.
            </p>
            <p className="intro-text">
              Whether you're recovering from an injury, managing a chronic condition, or looking to improve your overall wellness, 
              we're here to support you every step of the way with compassionate care that treats you as a whole person.
            </p>
            <div className="intro-cta">
              <Button to="/about" variant="primary" size="large">
                Learn About Our Approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Hierarchy Section */}
      <section className="team-hierarchy">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our dedicated professionals working together to provide you with the best care
            </p>
          </div>
          
          {/* Team Structure */}
          <div className="team-structure">
            {/* Head Level */}
            <div className="team-level">
              <div className="team-member head">
                <div className="member-avatar">
                  <img src="/images/team/paige.jpg" alt="Dr. John Smith" className="member-photo" />
                </div>
                <div className="member-info">
                  <h3 className="member-name">Dr. Analyn S. Potot</h3>
                  <p className="member-title">Head Physical Therapist</p>
                  <p className="member-description">15+ years experience in sports medicine and rehabilitation</p>
                </div>
              </div>
            </div>

            {/* Assistant Level */}
            <div className="team-level">
              <h4 className="level-title">Senior Therapists</h4>
              <div className="team-grid">
                <div className="team-member assistant">
                  <div className="member-avatar">
                    <img src="/images/team/paige.jpg" alt="Sarah Johnson" className="member-photo" />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">Sarah Johnson</h3>
                    <p className="member-title">Senior Physical Therapist</p>
                    <p className="member-description">Specialist in post-surgical recovery</p>
                  </div>
                </div>
                <div className="team-member assistant">
                  <div className="member-avatar">
                    <img src="/images/team/paige.jpg" alt="Michael Chen" className="member-photo" />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">Michael Chen</h3>
                    <p className="member-title">Senior Physical Therapist</p>
                    <p className="member-description">Expert in sports injury rehabilitation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secretary Level */}
            <div className="team-level">
              <h4 className="level-title">Administrative Staff</h4>
              <div className="team-grid">
                <div className="team-member secretary">
                  <div className="member-avatar">
                    <img src="/images/team/paige.jpg" alt="Emily Davis" className="member-photo" />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">Emily Davis</h3>
                    <p className="member-title">Office Manager</p>
                    <p className="member-description">Patient scheduling and coordination</p>
                  </div>
                </div>
                <div className="team-member secretary">
                  <div className="member-avatar">
                    <img src="/images/team/paige.jpg" alt="Robert Wilson" className="member-photo" />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">Robert Wilson</h3>
                    <p className="member-title">Patient Coordinator</p>
                    <p className="member-description">Insurance and billing specialist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Utility Level */}
            <div className="team-level">
              <h4 className="level-title">Support Staff</h4>
              <div className="team-grid">
                <div className="team-member utility">
                  <div className="member-avatar">
                    <img src="/images/team/paige.jpg" alt="Lisa Martinez" className="member-photo" />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">Lisa Martinez</h3>
                    <p className="member-title">Physical Therapy Assistant</p>
                    <p className="member-description">Treatment support and patient care</p>
                  </div>
                </div>
                <div className="team-member utility">
                  <div className="member-avatar">
                    <img src="/images/team/paige.jpg" alt="James Brown" className="member-photo" />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">James Brown</h3>
                    <p className="member-title">Physical Therapy Assistant</p>
                    <p className="member-description">Therapeutic exercise specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive physical therapy services designed to help you achieve optimal health
            </p>
          </div>
          <div className="services-grid">
            {serviceData.map((service, index) => (
              <Card key={index} hover className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More
                </Link>
              </Card>
            ))}
          </div>
          <div className="services-cta">
            <Button to="/services" variant="secondary" size="large">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <Testimonials limit={3} />

      {/* CTA Section */}
      <section id="testimonials" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Recovery Journey?</h2>
            <p className="cta-description">
              Take the first step towards a pain-free, active life. Schedule your consultation today.
            </p>
            <div className="cta-actions">
              <Button to="/contact" variant="primary" size="large">
                Book Appointment
              </Button>
              <Button to="/about" variant="secondary" size="large">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
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
    </div>
  );
};

export default Home;
