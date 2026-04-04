import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Home.css'

const clientProjects = [
  {
    id: 1,
    title: 'Grodzinski Bakery',
    category: 'Bakery & Café',
    description: 'A warm, inviting website for a kosher-friendly artisan bakery featuring fresh breads and pastries.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    color: '#8B7355',
    isClient: true
  },
  {
    id: 2,
    title: 'Lumière Pâtisserie',
    category: 'Luxury French Bakery',
    description: 'An elegant online presence for a premium French pâtisserie with sophisticated branding.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    color: '#D4A5A5',
    isClient: true,
    url: 'https://www.lumierepatisserie.ca/'
  }
]

const demoProjects = [
  {
    id: 3,
    title: 'Pulse Fitness Studio',
    category: 'Demo • Fitness & Gym',
    description: 'A concept design for a modern fitness studio with membership booking integration.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    color: '#FF6B35',
    isClient: false
  },
  {
    id: 4,
    title: 'Brew & Bean Café',
    category: 'Demo • Coffee Shop',
    description: 'A concept café website with warm aesthetics, menu showcase, and loyalty features.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    color: '#6F4E37',
    isClient: false
  },
  {
    id: 5,
    title: 'BuildRight Contractors',
    category: 'Demo • Home Services',
    description: 'A concept contractor website with service categories and quote request system.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    color: '#4A5568',
    isClient: false
  }
]

const services = [
  { icon: 'globe', title: 'Websites & E-Commerce', description: 'Custom websites with product photography, online ordering, and delivery platform integrations — all included.', size: 'large' },
  { icon: 'code', title: 'Custom Applications & Tools', description: 'Internal tools, CRM systems, loyalty apps, and custom software built for your specific workflows.', size: 'small' },
  { icon: 'clipboard', title: 'Social Media & Growth', description: 'Social media management, influencer partnerships, and lead generation to grow your customer base.', size: 'small' }
]

const processSteps = [
  { number: '01', title: 'Understand', description: "We talk through what's working, what's not, and what you actually need." },
  { number: '02', title: 'Plan', description: 'We scope out the work clearly — no vague promises, just practical next steps.' },
  { number: '03', title: 'Build', description: 'We build your site or system with regular check-ins and honest feedback.' },
  { number: '04', title: 'Support', description: "Once it's live, we're here to help maintain and update as needed." }
]

const clientTypes = [
  { icon: 'coffee', label: 'Cafés & Restaurants' },
  { icon: 'shoppingCart', label: 'Retail Stores' },
  { icon: 'activity', label: 'Fitness Studios' },
  { icon: 'home', label: 'Contractors' },
  { icon: 'heart', label: 'Salons & Spas' },
  { icon: 'briefcase', label: 'Professional Services' }
]

function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const labelSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    delay: 100,
    config: { mass: 1, tension: 120, friction: 26 }
  })

  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    delay: 250,
    config: { mass: 1, tension: 120, friction: 26 }
  })

  const subtitleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    delay: 400,
    config: { mass: 1, tension: 120, friction: 26 }
  })

  const ctaSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(16px)',
    delay: 550,
    config: { mass: 1, tension: 120, friction: 26 }
  })

  return (
    <section className="hero home-hero" ref={ref}>
      <div className="hero-bg">
        <div className="hero-gradient-orb"></div>
        <div className="hero-grid-pattern"></div>
      </div>
      <div className="hero-content">
        <animated.div style={labelSpring}>
          <span className="hero-label">For Toronto's Small Businesses</span>
        </animated.div>
        <animated.h1 className="hero-title" style={titleSpring}>
          Websites & Systems<br />
          <span className="text-gradient">That Actually Work.</span>
        </animated.h1>
        <animated.p className="hero-subtitle" style={subtitleSpring}>
          We build practical websites, applications, and digital systems that make your business easier to run — with professional photography included in every project.
        </animated.p>
        <animated.div className="hero-cta" style={ctaSpring}>
          <Link to="/contact" className="btn btn-primary btn-large">
            Book Free Consultation
          </Link>
          <Link to="/portfolio" className="btn btn-secondary btn-large">
            View Our Work
          </Link>
        </animated.div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-chevron">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const trail = useTrail(services.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    delay: 100,
    config: { mass: 1, tension: 120, friction: 26 }
  })

  return (
    <section className="section services-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Practical Systems for Real Businesses</h2>
          <p className="section-subtitle">
            Websites, tools, and operational help for Toronto's cafés, bakeries, salons, contractors, and local shops.
          </p>
        </div>
        <div className="bento-grid">
          {trail.map((style, index) => (
            <animated.div
              key={services[index].title}
              style={style}
              className={`bento-card ${services[index].size === 'large' ? 'bento-large' : ''}`}
            >
              <div className="bento-icon">
                <Icon name={services[index].icon} size={28} />
              </div>
              <h3>{services[index].title}</h3>
              <p>{services[index].description}</p>
              <Link to="/services" className="btn btn-ghost">
                Learn More
              </Link>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedWork() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const allProjects = [...clientProjects, ...demoProjects]

  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    config: { mass: 1, tension: 120, friction: 26 }
  })

  const trail = useTrail(allProjects.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.97)',
    delay: 150,
    config: { mass: 1, tension: 120, friction: 26 }
  })

  return (
    <section className="section featured-section" ref={ref}>
      <div className="container container-wide">
        <animated.div style={headerSpring} className="section-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Client Projects & Demos</h2>
          <p className="section-subtitle">
            Real client work alongside concept designs showcasing what we can build for you.
          </p>
        </animated.div>
        <div className="featured-grid">
          {trail.map((style, index) => {
            const project = allProjects[index]
            return (
              <animated.div key={project.id} style={style} className={`project-card ${project.isClient ? 'client-project' : ''}`}>
                {project.isClient && <span className="client-badge">Client Project</span>}
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <Link to="/portfolio" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div
                  className="project-accent"
                  style={{ backgroundColor: project.color }}
                ></div>
              </animated.div>
            )
          })}
        </div>
        <div className="section-cta">
          <Link to="/portfolio" className="btn btn-secondary btn-large">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const trail = useTrail(processSteps.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    config: { mass: 1, tension: 120, friction: 26 }
  })

  return (
    <section className="section process-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">A Simple, Honest Process</h2>
          <p className="section-subtitle">
            No complicated timelines or endless meetings. Just clear steps from start to finish.
          </p>
        </div>
        <div className="process-timeline">
          <div className="process-line"></div>
          {trail.map((style, index) => (
            <animated.div key={processSteps[index].number} style={style} className="process-step">
              <div className="step-number-bg">{processSteps[index].number}</div>
              <div className="step-marker">
                <span>{processSteps[index].number}</span>
              </div>
              <div className="step-content">
                <h3>{processSteps[index].title}</h3>
                <p>{processSteps[index].description}</p>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientTypes() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    config: { mass: 1, tension: 120, friction: 26 }
  })

  return (
    <section className="section clients-section" ref={ref}>
      <div className="container">
        <animated.div style={spring}>
          <div className="section-header">
            <span className="section-label">Who We Help</span>
            <h2 className="section-title">Built for Local Businesses</h2>
            <p className="section-subtitle">
              Serving Toronto's diverse community of entrepreneurs and business owners.
            </p>
          </div>
          <div className="clients-grid">
            {clientTypes.map((client, index) => (
              <div key={index} className="client-type">
                <Icon name={client.icon} size={24} />
                <span>{client.label}</span>
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </section>
  )
}

function PricingPreview() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    config: { mass: 1, tension: 120, friction: 26 }
  })

  return (
    <section className="section pricing-preview-section" ref={ref}>
      <div className="container">
        <animated.div style={spring} className="pricing-preview-card">
          <div className="pricing-preview-content">
            <span className="section-label">Transparent Pricing</span>
            <h2>Solutions for Every Budget</h2>
            <p>
              Simple, transparent pricing based on the size and scope of your project —
              not inflated packages or hourly guessing.
            </p>
            <div className="pricing-preview-tiers">
              <div className="tier-preview">
                <span className="tier-name">Basic</span>
                <span className="tier-price">$500</span>
              </div>
              <div className="tier-preview">
                <span className="tier-name">Standard</span>
                <span className="tier-price">$1,000</span>
              </div>
              <div className="tier-preview">
                <span className="tier-name">Custom</span>
                <span className="tier-price">$2,500</span>
              </div>
              <div className="tier-preview">
                <span className="tier-name">Full Digital</span>
                <span className="tier-price">$4,000</span>
              </div>
            </div>
            <Link to="/pricing" className="btn btn-primary btn-large">
              View Full Pricing
            </Link>
          </div>
          <div className="pricing-preview-visual">
            <div className="price-chart">
              <div className="chart-bar" style={{ height: '30%' }}><span>Basic</span></div>
              <div className="chart-bar" style={{ height: '50%' }}><span>Standard</span></div>
              <div className="chart-bar featured" style={{ height: '75%' }}><span>Custom</span></div>
              <div className="chart-bar" style={{ height: '100%' }}><span>Full</span></div>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  )
}

function CTA() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.98)',
    config: { mass: 1, tension: 120, friction: 26 }
  })

  return (
    <section className="section cta-section" ref={ref}>
      <animated.div style={spring} className="container">
        <div className="cta-card">
          <h2>Not Sure Where to Start?</h2>
          <p>
            Have a conversation about what is not working and figure out if we can help.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-large">
              Book Free Consultation
            </Link>
            <a href="mailto:jameskim@kimconsultant.net" className="btn btn-secondary btn-large">
              <Icon name="mail" size={18} /> Email Me
            </a>
          </div>
        </div>
      </animated.div>
    </section>
  )
}

function Home() {
  return (
    <div className="page home-page">
      <Hero />
      <ServicesPreview />
      <FeaturedWork />
      <Process />
      <ClientTypes />
      <PricingPreview />
      <CTA />
    </div>
  )
}

export default Home
