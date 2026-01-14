import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Contact.css'

const contactInfo = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'jameskim@kimconsultant.net',
    link: 'mailto:jameskim@kimconsultant.net'
  },
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: 'Message on WhatsApp',
    link: null,
    note: 'Business account coming soon'
  },
  {
    icon: 'mapPin',
    label: 'Location',
    value: 'Toronto, Ontario, Canada',
    link: null
  }
]

const projectTypes = [
  'New Website',
  'Website Redesign',
  'eCommerce Store',
  'Custom Software',
  'Digital Strategy',
  'Maintenance Plan',
  'Other'
]

const budgetRanges = [
  '$500 - $1,000',
  '$1,000 - $1,500',
  '$1,500 - $2,000',
  '$2,000+',
  'Not sure yet'
]

function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="contact-hero" ref={ref}>
      <div className="contact-hero-bg"></div>
      <animated.div style={spring} className="container">
        <span className="section-label">Contact</span>
        <h1>Let's Build Something Great</h1>
        <p className="contact-hero-subtitle">
          Ready to transform your digital presence? Book a free consultation 
          and let's discuss your project.
        </p>
      </animated.div>
    </section>
  )
}

function ContactForm() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch(
        'https://script.google.com/a/macros/kimconsultant.net/s/AKfycbw0S3bYRfqghPxZyovjLTLRMyF8QPUCxmvhYYhEdMI7dzZglnBjZg4xK_LteSL8ijmd/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        }
      )
      
      // With no-cors mode, we can't read the response, but the request goes through
      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error sending your message. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <animated.div ref={ref} style={spring} className="form-success">
        <div className="success-icon">
          <Icon name="checkCircle" size={48} />
        </div>
        <h3>Thank You!</h3>
        <p>
          Your message has been received. We'll get back to you within 24 hours 
          to schedule your free consultation.
        </p>
        <button 
          className="btn btn-secondary"
          onClick={() => {
            setSubmitted(false)
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              projectType: '',
              budget: '',
              timeline: '',
              message: ''
            })
          }}
        >
          Send Another Message
        </button>
      </animated.div>
    )
  }

  return (
    <animated.form ref={ref} style={spring} className="contact-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Book Your Free Consultation</h2>
        <p>Fill out the form below and we'll get back to you within 24 hours.</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Smith"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company / Business Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Business Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectType">Project Type *</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Select a project type</option>
            {projectTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget Range</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Select your budget</option>
            {budgetRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="timeline">Preferred Timeline</label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="e.g., Within 3 months, ASAP, Flexible"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">Project Details *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
        </div>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary btn-large submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Icon name="arrowRight" size={18} />
          </>
        )}
      </button>
    </animated.form>
  )
}

function ContactInfo() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(30px)',
    delay: 200,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <animated.div ref={ref} style={spring} className="contact-info">
      <div className="info-section">
        <h3>Get in Touch</h3>
        <p>
          Prefer to reach out directly? Contact us through any of the channels below.
        </p>
        <div className="contact-methods">
          {contactInfo.map(info => (
            <div key={info.label} className="contact-method">
              <div className="method-icon">
                <Icon name={info.icon} size={22} />
              </div>
              <div className="method-content">
                <span className="method-label">{info.label}</span>
                {info.link ? (
                  <a href={info.link} className="method-value">{info.value}</a>
                ) : (
                  <span className="method-value">{info.value}</span>
                )}
                {info.note && (
                  <span className="method-note">{info.note}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-section">
        <h3>What Happens Next?</h3>
        <div className="next-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Discovery Call</h4>
              <p>We'll schedule a 30-minute call to understand your needs and goals.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Custom Proposal</h4>
              <p>You'll receive a detailed proposal with timeline and pricing.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Kick Off</h4>
              <p>Once approved, we begin building your digital solution.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="info-section response-time">
        <div className="response-badge">
          <Icon name="zap" size={18} />
          <span>Fast Response</span>
        </div>
        <p>
          We typically respond to all inquiries within <strong>24 hours</strong> during 
          business days.
        </p>
      </div>
    </animated.div>
  )
}

function Contact() {
  return (
    <div className="page contact-page">
      <Hero />
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact




