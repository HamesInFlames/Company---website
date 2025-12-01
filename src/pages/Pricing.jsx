import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Pricing.css'

const websitePackages = [
  {
    name: 'Essential',
    subtitle: 'Starter',
    price: '$1,500',
    priceRange: '$1,500 – $3,000',
    description: 'Perfect for new businesses needing a professional online presence.',
    features: [
      '3–5 page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Design templates',
      'Contact form',
      '30-day support included'
    ],
    popular: false
  },
  {
    name: 'Intermediate',
    subtitle: 'Business',
    price: '$4,000',
    priceRange: '$4,000 – $7,000',
    description: 'For growing businesses that need more functionality and customization.',
    features: [
      '5–10 page website',
      'Light custom design',
      'Blog integration',
      'Newsletter signup',
      'Google Analytics setup',
      'Social media integration',
      '60-day support included'
    ],
    popular: true
  },
  {
    name: 'Advanced',
    subtitle: 'Premium',
    price: '$8,000',
    priceRange: '$8,000 – $15,000',
    description: 'Comprehensive solutions for established businesses with complex needs.',
    features: [
      '10–20 page website',
      'Advanced custom design',
      'Booking or ordering system',
      'CRM integration',
      'SEO content optimization',
      'Performance optimization',
      'Advanced analytics',
      '90-day support included'
    ],
    popular: false
  }
]

const maintenancePlans = [
  {
    name: 'Lite',
    level: 'Level 1',
    price: '$50',
    priceRange: '$50 – $75/mo',
    description: 'Basic hosting and security for hands-off clients.',
    features: [
      'Secure hosting',
      'Daily backups',
      'Security monitoring',
      'SSL certificate',
      'Pay-per-edit ($80–100/hr)'
    ],
    hourlyRate: '$80–100/hr'
  },
  {
    name: 'Standard',
    level: 'Level 2',
    price: '$150',
    priceRange: '$150 – $250/mo',
    description: 'Regular updates and support for active businesses.',
    features: [
      'Everything in Lite',
      '2–3 hours of updates/mo',
      'Content updates',
      'Plugin/software updates',
      'Lower per-edit rate ($60/hr)',
      'Email support'
    ],
    hourlyRate: '$60/hr'
  },
  {
    name: 'Premium',
    level: 'Level 3',
    price: '$300',
    priceRange: '$300 – $500/mo',
    description: 'Full-service partnership for maximum growth.',
    features: [
      'Everything in Standard',
      'Unlimited minor edits',
      'Priority support',
      'Quarterly strategy call',
      '2 major upgrades yearly',
      'Performance reports',
      'Dedicated account manager'
    ],
    hourlyRate: 'Included'
  }
]

function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="pricing-hero" ref={ref}>
      <div className="pricing-hero-bg"></div>
      <animated.div style={spring} className="container">
        <span className="section-label">Pricing</span>
        <h1>Transparent, Flexible Pricing</h1>
        <p className="pricing-hero-subtitle">
          Solutions sized like your favorite coffee – from starter to premium. 
          Choose what fits your business.
        </p>
      </animated.div>
    </section>
  )
}

function WebsitePackages() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const trail = useTrail(websitePackages.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    delay: 200,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section packages-section" ref={ref}>
      <div className="container">
        <animated.div style={headerSpring} className="section-header">
          <span className="section-label">Website Packages</span>
          <h2>Upfront Development Cost</h2>
          <p className="section-subtitle">
            One-time investment to build your perfect website.
          </p>
        </animated.div>
        <div className="pricing-grid">
          {trail.map((style, index) => {
            const pkg = websitePackages[index]
            return (
              <animated.div 
                key={pkg.name} 
                style={style} 
                className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
              >
                {pkg.popular && <span className="popular-badge">Most Popular</span>}
                <div className="pricing-header">
                  <div className="pricing-size">
                    <span className="size-icon">{pkg.name.charAt(0)}</span>
                    <div className="pricing-size-info">
                      <h3>{pkg.name}</h3>
                      <span className="subtitle">{pkg.subtitle}</span>
                    </div>
                  </div>
                  <div className="pricing-amount">
                    <span className="price">{pkg.price}</span>
                    <span className="price-range">{pkg.priceRange}</span>
                  </div>
                </div>
                <p className="pricing-description">{pkg.description}</p>
                <ul className="pricing-features">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <Icon name="check" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
                >
                  Get Started
                </Link>
              </animated.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MaintenancePlans() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const trail = useTrail(maintenancePlans.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    delay: 200,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section maintenance-section" ref={ref}>
      <div className="container">
        <animated.div style={headerSpring} className="section-header">
          <span className="section-label">Maintenance Plans</span>
          <h2>Monthly Support & Updates</h2>
          <p className="section-subtitle">
            Like a gym membership for your website – choose your level of support.
          </p>
        </animated.div>
        <div className="pricing-grid">
          {trail.map((style, index) => {
            const plan = maintenancePlans[index]
            return (
              <animated.div key={plan.name} style={style} className="pricing-card maintenance-card">
                <div className="pricing-header">
                  <div className="pricing-level">
                    <span className="level-badge">{plan.level}</span>
                    <h3>{plan.name}</h3>
                  </div>
                  <div className="pricing-amount">
                    <span className="price">{plan.price}</span>
                    <span className="price-range">{plan.priceRange}</span>
                  </div>
                </div>
                <p className="pricing-description">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Icon name="check" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="hourly-rate">
                  <span className="rate-label">Additional Hours:</span>
                  <span className="rate-value">{plan.hourlyRate}</span>
                </div>
                <Link to="/contact" className="btn btn-secondary pricing-cta">
                  Choose Plan
                </Link>
              </animated.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CustomQuote() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section custom-quote-section" ref={ref}>
      <div className="container">
        <animated.div style={spring} className="custom-quote-card">
          <div className="quote-content">
            <Icon name="package" size={40} />
            <h2>Need Something Custom?</h2>
            <p>
              Every business is unique. If our packages don't fit your needs exactly, 
              let's create a custom solution tailored specifically for you.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Request Custom Quote
            </Link>
          </div>
          <div className="quote-examples">
            <h4>Custom projects include:</h4>
            <ul>
              <li>Enterprise websites (20+ pages)</li>
              <li>Custom web applications</li>
              <li>Complex integrations</li>
              <li>Multi-location businesses</li>
              <li>Ongoing retainer partnerships</li>
            </ul>
          </div>
        </animated.div>
      </div>
    </section>
  )
}

function FAQ() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const faqs = [
    {
      question: 'What\'s included in the support period?',
      answer: 'The initial support period covers bug fixes, minor text/image updates, and technical assistance. Major feature additions or design changes are billed separately.'
    },
    {
      question: 'Do I need a maintenance plan?',
      answer: 'While not required, a maintenance plan ensures your site stays secure, updated, and performing well. Without one, you\'ll be billed hourly for any updates or support.'
    },
    {
      question: 'Can I upgrade my package later?',
      answer: 'Absolutely! You can always add features or upgrade your maintenance plan as your business grows. We\'ll provide a custom quote for any additions.'
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'We typically require 50% upfront to begin work, with the remaining 50% due upon project completion. Monthly maintenance is billed at the start of each month.'
    }
  ]

  return (
    <section className="section faq-section" ref={ref}>
      <div className="container container-narrow">
        <animated.div style={spring}>
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <div className="page pricing-page">
      <Hero />
      <WebsitePackages />
      <MaintenancePlans />
      <CustomQuote />
      <FAQ />
    </div>
  )
}

export default Pricing

