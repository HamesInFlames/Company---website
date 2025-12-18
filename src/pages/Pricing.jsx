import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Pricing.css'

const websitePackages = [
  {
    name: 'Landing Essentials',
    subtitle: 'Single-Page Website',
    price: '$1,000',
    priceRange: '$1,000 upfront',
    idealFor: 'Service businesses, events, personal brands',
    description: 'A simple, all-in-one single-page website — perfect for service businesses, events, or personal brands.',
    features: [
      '1-page responsive website (scroll-based layout)',
      'Hero section with headline and primary CTA',
      'About / intro section',
      'Services or features block',
      'Testimonials or social proof section',
      'Contact form + Google Maps embed',
      'Mobile-optimized design',
      'Fast-loading layout with basic on-page SEO',
      'Hosting, SSL, backups & updates (through maintenance)'
    ],
    popular: false,
    maintenanceRequired: '$100/mo required',
    note: 'Note: structural layout or design changes after launch are not included. For bigger changes, you can apply the value of this package toward a full website upgrade.'
  },
  {
    name: 'Starter',
    subtitle: 'Basic',
    price: '$1,500',
    priceRange: '$1,500 – $3,000',
    idealFor: 'Local shops, cafés, solo services',
    description: 'Perfect for local businesses needing a clean, professional online presence.',
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
    name: 'Business',
    subtitle: 'Growth',
    price: '$4,000',
    priceRange: '$4,000 – $7,000',
    idealFor: 'Businesses with 5–10 pages',
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
    name: 'Enterprise',
    subtitle: 'Premium',
    price: '$8,000',
    priceRange: '$8,000 – $15,000',
    idealFor: 'Custom design, CRM, bookings',
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
    popular: false,
    comingSoon: true
  }
]

const maintenancePlans = [
  {
    name: 'Essential',
    price: '$50',
    priceRange: '$50 – $75',
    tagline: 'Keep it running',
    features: [
      'Secure hosting & SSL',
      'Daily backups',
      'Security monitoring',
      'Pay-per-edit support'
    ],
    hourlyRate: '$80–100/hr',
    popular: false
  },
  {
    name: 'Enhanced',
    price: '$150',
    priceRange: '$150 – $250',
    tagline: 'Stay ahead',
    features: [
      'Everything in Essential',
      '2–3 hours of updates/mo',
      'Content & plugin updates',
      'Strategy guidance',
      'Email support'
    ],
    hourlyRate: '$60/hr',
    popular: true
  },
  {
    name: 'Premium',
    price: '$300',
    priceRange: '$300 – $500',
    tagline: 'Full partnership',
    features: [
      'Everything in Enhanced',
      'Unlimited minor edits',
      'Priority support',
      'Quarterly strategy calls',
      'Performance reports',
      'Dedicated manager'
    ],
    hourlyRate: 'Included',
    popular: false
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
        <h1>Choose a Package that Fits Your Business</h1>
        <p className="pricing-hero-subtitle">
          Like your favorite coffee shop or gym, I offer clear tiers so you know exactly what you're getting.
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

  // Filter out Enterprise (coming soon) from main grid
  const activePackages = websitePackages.filter(pkg => !pkg.comingSoon)
  const enterprisePackage = websitePackages.find(pkg => pkg.comingSoon)

  const trail = useTrail(activePackages.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    delay: 200,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const enterpriseSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    delay: 400,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const renderCard = (pkg) => (
    <div key={pkg.name} className={`pricing-card ${pkg.popular ? 'popular' : ''} ${pkg.comingSoon ? 'coming-soon' : ''}`}>
      {pkg.popular && <span className="popular-badge">Most Popular</span>}
      {pkg.comingSoon && <span className="coming-soon-badge">COMING SOON</span>}
      <div className="pricing-card-top">
        <div className="pricing-tier">
          <h3>{pkg.name}</h3>
          <span className="tier-label">{pkg.subtitle}</span>
        </div>
        <div className="pricing-amount">
          <span className="price">{pkg.price}</span>
          {!pkg.comingSoon && <span className="price-suffix">starting</span>}
        </div>
        <span className="price-range">{pkg.priceRange}</span>
      </div>
      <div className="ideal-for">
        <span className="ideal-label">Best for</span>
        <span className="ideal-value">{pkg.idealFor}</span>
      </div>
      <ul className="pricing-features">
        {pkg.features.map((feature, i) => (
          <li key={i}>
            <Icon name="check" size={14} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {pkg.maintenanceRequired && (
        <div className="maintenance-note">
          <strong>{pkg.maintenanceRequired}</strong>
        </div>
      )}
      {pkg.note && (
        <div className="package-note">
          <small>{pkg.note}</small>
        </div>
      )}
      {pkg.comingSoon ? (
        <button 
          className="btn btn-secondary pricing-cta"
          disabled
        >
          Coming Soon
        </button>
      ) : (
        <Link 
          to="/contact" 
          className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
        >
          Get Started
        </Link>
      )}
    </div>
  )

  return (
    <section className="section packages-section" ref={ref}>
      <div className="container">
        <animated.div style={headerSpring} className="section-header">
          <span className="section-label">🧱 Website Design Tiers</span>
          <h2>Upfront Cost</h2>
          <p className="section-subtitle">
            One-time investment to build your perfect website.
          </p>
        </animated.div>
        <div className="pricing-grid">
          {trail.map((style, index) => {
            const pkg = activePackages[index]
            return (
              <animated.div key={pkg.name} style={style}>
                {renderCard(pkg)}
              </animated.div>
            )
          })}
        </div>
        {enterprisePackage && (
          <animated.div style={enterpriseSpring} className="enterprise-section">
            <div className="enterprise-card-wrapper">
              {renderCard(enterprisePackage)}
            </div>
          </animated.div>
        )}
        <animated.div style={enterpriseSpring} className="pricing-help-section">
          <div className="pricing-help-grid">
            <div className="pricing-help-card">
              <span className="help-icon">💡</span>
              <h4>Need more flexibility?</h4>
              <p>Apply your Landing Package value toward a full website later.</p>
            </div>
            <div className="pricing-help-card">
              <span className="help-icon">📞</span>
              <h4>Not sure what to choose?</h4>
              <p>Book a free consultation and we'll help you decide.</p>
              <Link to="/contact" className="btn btn-secondary btn-small" style={{ marginTop: 'var(--space-sm)' }}>
                Book Consultation
              </Link>
            </div>
          </div>
        </animated.div>
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
          <span className="section-label">🔧 Maintenance Tiers</span>
          <h2>Monthly Plans</h2>
          <p className="section-subtitle">
            Ongoing support to keep your website running smoothly.
          </p>
        </animated.div>
        <div className="pricing-grid">
          {trail.map((style, index) => {
            const plan = maintenancePlans[index]
            return (
              <animated.div 
                key={plan.name} 
                style={style} 
                className={`pricing-card maintenance-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <span className="popular-badge">Recommended</span>}
                <div className="pricing-card-top">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                  <div className="pricing-amount">
                    <span className="price">{plan.price}</span>
                    <span className="price-suffix">/mo</span>
                  </div>
                  <span className="price-range">{plan.priceRange}/mo</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Icon name="check" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                  <div className="hourly-rate-inline">
                    <span className="rate-label">Extra hours:</span>
                    <span className="rate-value">{plan.hourlyRate}</span>
                  </div>
                  <Link 
                    to="/contact" 
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
                  >
                    Get Started
                  </Link>
                </div>
              </animated.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PricingTips() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section tips-section" ref={ref}>
      <div className="container">
        <animated.div style={spring} className="tips-card">
          <div className="tips-grid">
            <div className="tip-item">
              <span className="tip-icon">💡</span>
              <p><strong>Need less up front?</strong> Go with a lower plan and pay-as-you-need.</p>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🎯</span>
              <p><strong>Want full support?</strong> Choose a higher tier with fewer surprises.</p>
            </div>
          </div>
        </animated.div>
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
      <PricingTips />
      <CustomQuote />
      <FAQ />
    </div>
  )
}

export default Pricing

