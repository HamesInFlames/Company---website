import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Pricing.css'

const websiteBuildTiers = [
  {
    name: 'Small Build',
    price: '$500',
    description: 'Best for simple websites with a few pages and basic content.',
    idealFor: 'Great for businesses that just need to get online cleanly and clearly.',
    popular: false
  },
  {
    name: 'Standard Build',
    price: '$1,000',
    description: 'Ideal for most small businesses.',
    idealFor: 'More pages, more content, better structure, and room to grow.',
    popular: true
  },
  {
    name: 'Extended Build',
    price: '$1,500',
    description: 'For larger sites with more sections, custom layouts, and added functionality.',
    idealFor: 'Perfect when you need more than the basics.',
    popular: false
  },
  {
    name: 'Large System',
    price: '$2,000',
    description: 'For advanced builds such as ordering systems, dashboards, integrations, or content-heavy platforms.',
    idealFor: 'Pricing is confirmed once scope is clear.',
    popular: false,
    isCustom: true
  }
]

const maintenancePlans = [
  {
    name: 'Basic Maintenance',
    price: '$75',
    tagline: 'Light support when you need it',
    description: 'Best for businesses that want light support.',
    features: [
      'Small text and image updates',
      'Basic content changes',
      'Minor fixes',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Advanced Maintenance',
    price: '$150',
    tagline: 'Priority help for active sites',
    description: 'For businesses that update often or want priority help.',
    features: [
      'Frequent content updates',
      'Layout adjustments',
      'New sections or pages (within reason)',
      'Performance checks',
      'Priority support'
    ],
    popular: true
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
        <h1>Website Pricing</h1>
        <p className="pricing-hero-subtitle">
          I keep website pricing simple and based on the actual size and scope of what's built — not inflated packages or hourly guessing.
        </p>
      </animated.div>
    </section>
  )
}

function WebsiteBuildTiers() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const trail = useTrail(websiteBuildTiers.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    delay: 200,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section packages-section" ref={ref}>
      <div className="container">
        <animated.div style={headerSpring} className="section-header">
          <span className="section-label">🧱 Website Build Tiers</span>
          <h2>One-Time Build Cost</h2>
          <p className="section-subtitle">
            Pay once for your website. No hidden fees. No surprises.
          </p>
        </animated.div>
        <div className="pricing-grid pricing-grid-4">
          {trail.map((style, index) => {
            const tier = websiteBuildTiers[index]
            return (
              <animated.div 
                key={tier.name} 
                style={style}
                className={`pricing-card build-card ${tier.popular ? 'popular' : ''} ${tier.isCustom ? 'custom-tier' : ''}`}
              >
                {tier.popular && <span className="popular-badge">Most Popular</span>}
                <div className="pricing-card-top">
                  <h3>{tier.name}</h3>
                  <div className="pricing-amount">
                    <span className="price">{tier.price}</span>
                  </div>
                </div>
                <div className="tier-description">
                  <p className="tier-main-desc">{tier.description}</p>
                  <p className="tier-ideal-for">{tier.idealFor}</p>
                </div>
                <Link 
                  to="/contact" 
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
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

function OperatingFees() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section operating-fees-section" ref={ref}>
      <div className="container">
        <animated.div style={spring} className="operating-fees-card">
          <div className="operating-fees-header">
            <span className="section-label">⚡ Important</span>
            <h2>Operating & Platform Fees</h2>
            <p className="operating-intro">
              In addition to the build cost, there is a monthly operating fee that covers services required to keep your website running.
            </p>
          </div>
          
          <div className="operating-fees-content">
            <div className="fees-disclaimer">
              <Icon name="info" size={20} />
              <p>These fees do not go to me — they go directly toward:</p>
            </div>
            
            <ul className="operating-list">
              <li>
                <Icon name="server" size={18} />
                <span>Website hosting</span>
              </li>
              <li>
                <Icon name="globe" size={18} />
                <span>Domain registration</span>
              </li>
              <li>
                <Icon name="layers" size={18} />
                <span>Platform & infrastructure services</span>
              </li>
              <li>
                <Icon name="zap" size={18} />
                <span>Performance and uptime reliability</span>
              </li>
            </ul>

            <div className="operating-cost-box">
              <span className="cost-label">Typical operating cost:</span>
              <span className="cost-amount">$15–$40 per month</span>
              <span className="cost-note">(depending on the site)</span>
            </div>

            <div className="operating-benefits">
              <p>This keeps your website:</p>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <Icon name="zap" size={16} />
                  <span>Fast</span>
                </div>
                <div className="benefit-item">
                  <Icon name="shield" size={16} />
                  <span>Secure</span>
                </div>
                <div className="benefit-item">
                  <Icon name="clock" size={16} />
                  <span>Online 24/7</span>
                </div>
              </div>
            </div>

            <p className="transparency-note">
              I'll always be transparent about these costs before anything goes live.
            </p>
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
          <span className="section-label">🔧 Optional Maintenance & Support</span>
          <h2>Monthly Support Plans</h2>
          <p className="section-subtitle">
            Maintenance is optional, but recommended if you want help keeping things updated without stress.
          </p>
        </animated.div>
        <div className="pricing-grid pricing-grid-2">
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
                    <span className="price-suffix">/ month</span>
                  </div>
                </div>
                <p className="plan-description">{plan.description}</p>
                <div className="includes-label">Includes:</div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Icon name="check" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
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

function FairPricing() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const benefits = [
    {
      icon: '✓',
      text: 'You only pay for the size and complexity you actually need'
    },
    {
      icon: '✓',
      text: 'No forced upgrades'
    },
    {
      icon: '✓',
      text: 'No long-term contracts'
    },
    {
      icon: '✓',
      text: 'Hosting and platform costs are separated and transparent'
    }
  ]

  return (
    <section className="section fair-pricing-section" ref={ref}>
      <div className="container">
        <animated.div style={spring} className="fair-pricing-card">
          <div className="fair-pricing-content">
            <span className="section-label">💡 Philosophy</span>
            <h2>How This Keeps Things Fair</h2>
            <ul className="fair-pricing-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <span className="check-icon">{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
            <p className="fair-pricing-conclusion">
              If you want something simple, we keep it simple — and affordable.
            </p>
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
      question: 'What are the operating fees for?',
      answer: 'The operating fees cover essential services like hosting, domain registration, and platform infrastructure that keep your website running smoothly. These costs go directly to service providers, not to me.'
    },
    {
      question: 'Do I need a maintenance plan?',
      answer: 'Maintenance is optional. If you\'re comfortable making your own updates or don\'t need frequent changes, you can skip it. But if you want help keeping things fresh without the hassle, a maintenance plan gives you peace of mind.'
    },
    {
      question: 'What if my project is bigger than the tiers shown?',
      answer: 'For larger projects like ordering systems, dashboards, or complex integrations, we\'ll discuss your needs and I\'ll provide a custom quote once the scope is clear. The Large System tier starts at $2,000.'
    },
    {
      question: 'Are there any long-term contracts?',
      answer: 'No. There are no long-term contracts or commitments. You pay for the build, and then you can choose whether to add maintenance support on a month-to-month basis.'
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
      <WebsiteBuildTiers />
      <OperatingFees />
      <MaintenancePlans />
      <FairPricing />
      <FAQ />
    </div>
  )
}

export default Pricing
