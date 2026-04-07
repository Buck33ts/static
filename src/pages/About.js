import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './About.css';

const About = () => {
  const therapists = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Lead Physical Therapist',
      specialization: 'Sports Medicine & Orthopedic Rehabilitation',
      experience: '15+ years',
      education: 'Doctor of Physical Therapy, University of Southern California',
      bio: 'Dr. Mitchell specializes in sports injury rehabilitation and has worked with professional athletes across multiple sports. Her evidence-based approach combines manual therapy with functional movement patterns to optimize recovery.',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. James Chen',
      title: 'Senior Physical Therapist',
      specialization: 'Post-Surgical Rehabilitation & Pain Management',
      experience: '12+ years',
      education: 'Doctor of Physical Therapy, Stanford University',
      bio: 'Dr. Chen brings extensive experience in post-operative care and chronic pain management. He utilizes advanced manual techniques and therapeutic exercise to help patients achieve optimal outcomes.',
      image: '👨‍⚕️'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Physical Therapist',
      specialization: 'Neurological Rehabilitation & Balance Therapy',
      experience: '8+ years',
      education: 'Master of Physical Therapy, Northwestern University',
      bio: 'Dr. Rodriguez specializes in neurological conditions and vestibular rehabilitation. She is passionate about helping patients improve their balance and functional independence through targeted therapeutic interventions.',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. Michael Thompson',
      title: 'Physical Therapist',
      specialization: 'Geriatric Rehabilitation & Mobility Enhancement',
      experience: '10+ years',
      education: 'Doctor of Physical Therapy, University of Washington',
      bio: 'Dr. Thompson focuses on helping older adults maintain and improve their mobility and independence. His gentle approach and expertise in age-related conditions make him a favorite among our senior patients.',
      image: '👨‍⚕️'
    }
  ];

  const values = [
    {
      icon: '❤️',
      title: 'Patient-Centered Care',
      description: 'We put our patients at the heart of everything we do, creating personalized treatment plans that address your unique needs and goals.'
    },
    {
      icon: '🔬',
      title: 'Evidence-Based Practice',
      description: 'Our treatments are grounded in the latest scientific research and proven methodologies to ensure the best possible outcomes.'
    },
    {
      icon: '🤝',
      title: 'Compassionate Approach',
      description: 'We understand that healing is both physical and emotional, providing support and encouragement throughout your recovery journey.'
    },
    {
      icon: '📈',
      title: 'Continuous Improvement',
      description: 'We stay current with the latest advancements in physical therapy to provide you with the most effective treatments available.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Restore Physical Therapy</h1>
            <p className="about-hero-subtitle">
              Empowering patients to reclaim their lives through expert care, 
              compassionate support, and evidence-based rehabilitation
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-description">
                Founded in 2010, Restore Physical Therapy began with a simple mission: 
                to provide exceptional, personalized care that helps patients recover 
                from injury and reclaim their quality of life.
              </p>
              <p className="story-description">
                Over the past decade, we've grown from a small practice to a comprehensive 
                rehabilitation center, helping thousands of patients achieve their recovery 
                goals through our evidence-based approach and compassionate care.
              </p>
              <p className="story-description">
                Our state-of-the-art facility combines cutting-edge technology with a 
                warm, welcoming environment where patients feel supported and motivated 
                throughout their healing journey.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#f0f9ff"/>
                  <rect x="50" y="50" width="300" height="200" fill="#3b82f6" opacity="0.1" rx="10"/>
                  <circle cx="200" cy="150" r="60" fill="#3b82f6" opacity="0.2"/>
                  <path d="M170 150C170 120 190 100 220 100C250 100 270 120 270 150C270 180 250 200 220 200C190 200 170 180 170 150Z" fill="#3b82f6" opacity="0.3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <Card className="mission-card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
                To provide exceptional physical therapy services that empower patients 
                to achieve optimal health, function, and quality of life through 
                personalized, evidence-based care in a compassionate environment.
              </p>
            </Card>
            <Card className="vision-card">
              <div className="card-icon">🔭</div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To be the leading physical therapy practice in our community, 
                recognized for excellence in patient care, innovation in treatment 
                approaches, and commitment to improving lives through rehabilitation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <Card key={index} hover className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="our-team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Experienced professionals dedicated to your recovery
            </p>
          </div>
          <div className="team-grid">
            {therapists.map((therapist, index) => (
              <Card key={index} hover className="therapist-card">
                <div className="therapist-image">
                  <div className="therapist-avatar">{therapist.image}</div>
                </div>
                <div className="therapist-info">
                  <h3 className="therapist-name">{therapist.name}</h3>
                  <p className="therapist-title">{therapist.title}</p>
                  <div className="therapist-badge">{therapist.experience}</div>
                  <p className="therapist-specialization">{therapist.specialization}</p>
                  <p className="therapist-bio">{therapist.bio}</p>
                  <div className="therapist-education">
                    <strong>Education:</strong> {therapist.education}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">State-of-the-Art Facilities</h2>
            <p className="section-subtitle">
              Modern equipment designed to enhance your recovery experience
            </p>
          </div>
          <div className="facilities-grid">
            <div className="facility-item">
              <div className="facility-icon">🏋️</div>
              <h3 className="facility-title">Advanced Exercise Equipment</h3>
              <p className="facility-description">
                Latest rehabilitation and strength training equipment for comprehensive recovery programs.
              </p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">🏊</div>
              <h3 className="facility-title">Hydrotherapy Pool</h3>
              <p className="facility-description">
                Temperature-controlled pool for aquatic therapy and low-impact rehabilitation exercises.
              </p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">🧘</div>
              <h3 className="facility-title">Private Treatment Rooms</h3>
              <p className="facility-description">
                Quiet, comfortable spaces for one-on-one therapy sessions and personalized care.
              </p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">📊</div>
              <h3 className="facility-title">Motion Analysis Lab</h3>
              <p className="facility-description">
                Advanced technology for precise movement assessment and treatment planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Meet Our Team?</h2>
            <p className="cta-description">
              Schedule a consultation to discuss your needs and learn how we can help you achieve your recovery goals.
            </p>
            <div className="cta-actions">
              <Button to="/contact" variant="primary" size="large">
                Schedule Consultation
              </Button>
              <Button to="/services" variant="secondary" size="large">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
