import React from 'react';
import Card from './Card';
import Button from './Button';
import './Testimonials.css';

const Testimonials = ({ showAll = false, limit = 3 }) => {
  const allTestimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marathon Runner',
      condition: 'Knee Injury Recovery',
      content: 'The team at Restore PT helped me recover from a knee injury and get back to running. Their expertise and personalized care made all the difference. I\'m now training for my next marathon!',
      rating: 5,
      treatmentDuration: '3 months',
      therapist: 'Dr. Sarah Mitchell'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      condition: 'Post-Surgery Rehabilitation',
      content: 'After my back surgery, I thought I would never be pain-free again. The physical therapy here changed my life. The comprehensive approach and constant support were incredible.',
      rating: 5,
      treatmentDuration: '4 months',
      therapist: 'Dr. James Chen'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Yoga Instructor',
      condition: 'Shoulder Injury',
      content: 'The personalized approach and attention to detail at Restore PT is unmatched. They helped me recover from a shoulder injury quickly and safely. Highly recommend!',
      rating: 5,
      treatmentDuration: '2 months',
      therapist: 'Dr. Emily Rodriguez'
    },
    {
      name: 'David Thompson',
      role: 'Construction Worker',
      condition: 'Chronic Back Pain',
      content: 'I\'ve struggled with back pain for years. After just a few weeks at Restore PT, I felt significant improvement. The exercises and manual therapy techniques really work.',
      rating: 5,
      treatmentDuration: '6 months',
      therapist: 'Dr. Michael Thompson'
    },
    {
      name: 'Lisa Anderson',
      role: 'Teacher',
      condition: 'Post-Surgery Recovery',
      content: 'The staff is incredibly knowledgeable and caring. They took the time to understand my specific needs and created a treatment plan that worked perfectly for me.',
      rating: 5,
      treatmentDuration: '3 months',
      therapist: 'Dr. Sarah Mitchell'
    },
    {
      name: 'Robert Martinez',
      role: 'Retired Veteran',
      condition: 'Mobility Issues',
      content: 'At 72, I thought my mobility issues were permanent. The geriatric therapy program helped me regain independence and improve my quality of life tremendously.',
      rating: 5,
      treatmentDuration: '4 months',
      therapist: 'Dr. Michael Thompson'
    },
    {
      name: 'Jennifer White',
      role: 'Nurse',
      condition: 'Sports Injury',
      content: 'As a healthcare professional, I was impressed with the evidence-based approach at Restore PT. They helped me recover from a running injury and get back to work quickly.',
      rating: 5,
      treatmentDuration: '6 weeks',
      therapist: 'Dr. Emily Rodriguez'
    },
    {
      name: 'Thomas Brown',
      role: 'Accountant',
      condition: 'Neck Pain',
      content: 'The neck pain I had from sitting at a desk all day is gone. The ergonomic advice and targeted exercises made a huge difference in my daily comfort.',
      rating: 5,
      treatmentDuration: '2 months',
      therapist: 'Dr. James Chen'
    },
    {
      name: 'Amanda Foster',
      role: 'Dancer',
      condition: 'Ankle Sprain',
      content: 'The aquatic therapy was amazing for my ankle sprain recovery. The combination of water exercises and land-based therapy helped me get back to dancing faster than expected.',
      rating: 5,
      treatmentDuration: '8 weeks',
      therapist: 'Dr. Sarah Mitchell'
    }
  ];

  const testimonials = showAll ? allTestimonials : allTestimonials.slice(0, limit);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>⭐</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Patient Success Stories</h2>
          <p className="section-subtitle">
            Real experiences from patients who have transformed their lives through our care
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="testimonial-condition">
                  {testimonial.condition}
                </div>
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="testimonial-details">
                <div className="detail-item">
                  <span className="detail-label">Therapist:</span>
                  <span className="detail-value">{testimonial.therapist}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{testimonial.treatmentDuration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {!showAll && allTestimonials.length > limit && (
          <div className="testimonials-cta">
            <Button to="/about" variant="outline" size="large">
              Read More Success Stories
            </Button>
          </div>
        )}
        
        {showAll && (
          <div className="testimonials-summary">
            <Card className="summary-card">
              <h3 className="summary-title">Our Impact</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Success Stories</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4.9/5</div>
                  <div className="stat-label">Average Rating</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Would Recommend</div>
                </div>
              </div>
              <div className="summary-cta">
                <Button to="/contact" variant="primary" size="medium">
                  Become Our Next Success Story
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
