import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏃',
      title: 'Sports Injury Rehabilitation',
      category: 'Sports Medicine',
      description: 'Comprehensive rehabilitation programs for athletes and sports enthusiasts. We specialize in treating sprains, strains, tendonitis, and overuse injuries with sport-specific protocols.',
      features: [
        'Sport-specific training protocols',
        'Injury prevention programs',
        'Return-to-sport assessment',
        'Performance optimization'
      ],
      duration: '4-12 weeks',
      price: 'Starting at $150/session'
    },
    {
      icon: '🏥',
      title: 'Post-Surgical Rehabilitation',
      category: 'Orthopedic Recovery',
      description: 'Specialized therapy programs designed to help you regain strength and mobility after surgical procedures including joint replacements, ACL reconstruction, and spinal surgery.',
      features: [
        'Pre-operative conditioning',
        'Post-operative protocols',
        'Scar tissue management',
        'Functional restoration'
      ],
      duration: '8-24 weeks',
      price: 'Starting at $175/session'
    },
    {
      icon: '💊',
      title: 'Chronic Pain Management',
      category: 'Pain Management',
      description: 'Evidence-based approaches to manage chronic pain conditions including arthritis, fibromyalgia, and persistent back pain through targeted therapeutic interventions.',
      features: [
        'Manual therapy techniques',
        'Therapeutic exercise programs',
        'Pain neuroscience education',
        'Lifestyle modification guidance'
      ],
      duration: '6-16 weeks',
      price: 'Starting at $125/session'
    },
    {
      icon: '🚶',
      title: 'Mobility & Balance Therapy',
      category: 'Functional Movement',
      description: 'Customized treatment plans to enhance movement patterns, improve balance, and increase independence for patients of all ages with mobility challenges.',
      features: [
        'Balance assessment and training',
        'Gait analysis and correction',
        'Fall prevention programs',
        'Mobility enhancement techniques'
      ],
      duration: '4-12 weeks',
      price: 'Starting at $125/session'
    },
    {
      icon: '🧠',
      title: 'Neurological Rehabilitation',
      category: 'Neurology',
      description: 'Specialized care for patients with neurological conditions including stroke, Parkinson\'s disease, multiple sclerosis, and traumatic brain injuries.',
      features: [
        'Neuro-rehabilitation techniques',
        'Functional task training',
        'Cognitive-motor integration',
        'Adaptive equipment training'
      ],
      duration: '12-48 weeks',
      price: 'Starting at $175/session'
    },
    {
      icon: '👵',
      title: 'Geriatric Physical Therapy',
      category: 'Senior Care',
      description: 'Gentle yet effective therapy programs designed for older adults to maintain independence, manage age-related conditions, and improve quality of life.',
      features: [
        'Age-appropriate exercises',
        'Fall risk reduction',
        'Joint mobility preservation',
        'Functional independence training'
      ],
      duration: 'Ongoing',
      price: 'Starting at $100/session'
    },
    {
      icon: '🏊',
      title: 'Aquatic Therapy',
      category: 'Hydrotherapy',
      description: 'Low-impact rehabilitation exercises performed in our temperature-controlled pool, ideal for patients with arthritis, joint pain, or weight-bearing restrictions.',
      features: [
        'Warm water therapy pool',
        'Low-impact conditioning',
        'Buoyancy-assisted exercises',
        'Resistance training in water'
      ],
      duration: '6-12 weeks',
      price: 'Starting at $150/session'
    },
    {
      icon: '🏋️',
      title: 'Strength & Conditioning',
      category: 'Performance',
      description: 'Advanced strength training programs designed to improve athletic performance, prevent injuries, and enhance overall physical conditioning.',
      features: [
        'Personalized strength programs',
        'Sport-specific conditioning',
        'Injury prevention screening',
        'Performance testing'
      ],
      duration: '8-16 weeks',
      price: 'Starting at $125/session'
    },
    {
      icon: '🤸',
      title: 'Pediatric Physical Therapy',
      category: 'Children\'s Health',
      description: 'Specialized therapy for children with developmental delays, congenital conditions, or injuries, using age-appropriate and engaging treatment approaches.',
      features: [
        'Developmental assessment',
        'Play-based therapy',
        'Parent education programs',
        'School readiness preparation'
      ],
      duration: 'Variable',
      price: 'Starting at $125/session'
    },
    {
      icon: '💼',
      title: 'Workplace Injury Rehabilitation',
      category: 'Occupational Health',
      description: 'Comprehensive rehabilitation for work-related injuries, focusing on safe return to work and prevention of future injuries through ergonomic education.',
      features: [
        'Work-specific functional training',
        'Ergonomic assessment',
        'Return-to-work planning',
        'Injury prevention education'
      ],
      duration: '4-16 weeks',
      price: 'Starting at $150/session'
    },
    {
      icon: '🎯',
      title: 'Manual Therapy',
      category: 'Hands-on Treatment',
      description: 'Advanced hands-on techniques including joint mobilization, soft tissue massage, and manual traction to reduce pain and improve mobility.',
      features: [
        'Joint mobilization',
        'Soft tissue manipulation',
        'Manual traction',
        'Myofascial release'
      ],
      duration: '4-8 weeks',
      price: 'Starting at $150/session'
    },
    {
      icon: '📊',
      title: 'Movement Analysis & Correction',
      category: 'Assessment',
      description: 'Comprehensive movement analysis using advanced technology to identify and correct dysfunctional movement patterns that may cause pain or limit performance.',
      features: [
        '3D motion analysis',
        'Movement pattern assessment',
        'Corrective exercise prescription',
        'Performance optimization'
      ],
      duration: '2-6 weeks',
      price: 'Starting at $200/session'
    }
  ];

  const categories = [
    'All Services',
    'Sports Medicine',
    'Orthopedic Recovery',
    'Pain Management',
    'Functional Movement',
    'Neurology',
    'Senior Care',
    'Hydrotherapy',
    'Performance',
    'Children\'s Health',
    'Occupational Health',
    'Hands-on Treatment',
    'Assessment'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Services');

  const filteredServices = selectedCategory === 'All Services' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-subtitle">
              Comprehensive physical therapy solutions tailored to your unique needs and recovery goals
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="service-categories">
        <div className="container">
          <div className="categories-filter">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {filteredServices.map((service, index) => (
              <Card key={index} hover className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-category">{service.category}</div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4 className="features-title">What's Included:</h4>
                  <ul className="features-list">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <span className="feature-bullet">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-details">
                  <div className="service-detail">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{service.duration}</span>
                  </div>
                  <div className="service-detail">
                    <span className="detail-label">Price:</span>
                    <span className="detail-value">{service.price}</span>
                  </div>
                </div>

                <div className="service-actions">
                  <Button variant="primary" size="small" fullWidth>
                    Book Consultation
                  </Button>
                  <Button variant="outline" size="small" fullWidth>
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="treatment-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Treatment Process</h2>
            <p className="section-subtitle">
              A systematic approach to ensure optimal recovery outcomes
            </p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Initial Assessment</h3>
              <p className="step-description">
                Comprehensive evaluation of your condition, medical history, and functional limitations to create a personalized treatment plan.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Personalized Plan</h3>
              <p className="step-description">
                Development of a customized treatment program tailored to your specific goals, lifestyle, and recovery timeline.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Active Treatment</h3>
              <p className="step-description">
                Regular therapy sessions combining manual techniques, therapeutic exercises, and education to promote healing and function.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Progress Monitoring</h3>
              <p className="step-description">
                Ongoing assessment of your progress with adjustments to your treatment plan to ensure optimal outcomes.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3 className="step-title">Maintenance & Prevention</h3>
              <p className="step-description">
                Education and home exercise programs to maintain your gains and prevent future injuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="insurance-payment">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Insurance & Payment Options</h2>
            <p className="section-subtitle">
              Flexible payment solutions to make your care accessible
            </p>
          </div>
          <div className="insurance-grid">
            <Card className="insurance-card">
              <div className="insurance-icon">🏥</div>
              <h3 className="insurance-title">Insurance Accepted</h3>
              <p className="insurance-description">
                We work with most major insurance providers including Medicare, Blue Cross Blue Shield, Aetna, and many more.
              </p>
              <Button variant="outline" size="small">
                Verify Coverage
              </Button>
            </Card>
            <Card className="insurance-card">
              <div className="insurance-icon">💳</div>
              <h3 className="insurance-title">Self-Pay Options</h3>
              <p className="insurance-description">
                Competitive self-pay rates with package discounts available for multiple sessions and treatment programs.
              </p>
              <Button variant="outline" size="small">
                View Pricing
              </Button>
            </Card>
            <Card className="insurance-card">
              <div className="insurance-icon">🤝</div>
              <h3 className="insurance-title">Payment Plans</h3>
              <p className="insurance-description">
                Flexible payment plans available to help manage the cost of your treatment over time.
              </p>
              <Button variant="outline" size="small">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Recovery?</h2>
            <p className="cta-description">
              Contact us today to schedule your initial consultation and take the first step toward better health.
            </p>
            <div className="cta-actions">
              <Button to="/contact" variant="primary" size="large">
                Schedule Appointment
              </Button>
              <Button to="/about" variant="secondary" size="large">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
