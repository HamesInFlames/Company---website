import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Home.css'

// Demo websites data
const demoProjects = [
  {
    id: 1,
    title: 'Grodzinski Bakery',
    category: 'Bakery & Café',
    description: 'A warm, inviting website for a kosher-friendly artisan bakery featuring fresh breads and pastries.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    color: '#8B7355'
  },
  {
    id: 2,
    title: 'Lumière Pâtisserie',
    category: 'Luxury French Bakery',
    description: 'An elegant online presence for a premium French pâtisserie with sophisticated branding.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    color: '#D4A5A5'
  },
  {
    id: 3,
    title: 'Pulse Fitness Studio',
    category: 'Fitness & Gym',
    description: 'A high-energy landing page for a modern fitness studio with membership booking integration.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    color: '#FF6B35'
  },
  {
    id: 4,
    title: 'Brew & Bean Café',
    category: 'Coffee Shop',
    description: 'An urban café website with warm aesthetics, menu showcase, and loyalty program integration.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    color: '#6F4E37'
  },
  {
    id: 5,
    title: 'BuildRight Contractors',
    category: 'Home Improvement',
    description: 'A professional contractor website with service categories, gallery, and quote request system.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    color: '#4A5568'
  }
]

const services = [
  { icon: 'globe', title: 'Web Development', description: 'Modern, responsive websites that convert visitors into customers.' },
  { icon: 'code', title: 'Custom Software', description: 'Tailored applications and tools built for your specific needs.' },
  { icon: 'compass', title: 'Digital Strategy', description: 'Technology audits and roadmaps to grow your business.' }
]

const processSteps = [
  { number: '01', title: 'Discover', description: 'Understanding your business, goals, and digital needs through consultation.' },
  { number: '02', title: 'Plan', description: 'Creating a strategic roadmap with timelines, deliverables, and milestones.' },
  { number: '03', title: 'Build', description: 'Developing your solution with regular updates and collaborative feedback.' },
  { number: '04', title: 'Support', description: 'Ongoing maintenance, optimization, and growth partnership.' }
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
  
  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    delay: 200,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const subtitleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    delay: 400,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const ctaSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    delay: 600,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="hero" ref={ref}>
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>
      <div className="hero-content">
        <animated.div style={titleSpring}>
          <span className="hero-label">Toronto Tech Consultancy</span>
          <h1 className="hero-title">
            Websites. Software.<br />
            <span className="text-gradient">Digital Strategy.</span>
          </h1>
        </animated.div>
        <animated.p className="hero-subtitle" style={subtitleSpring}>
          Helping local businesses identify digital needs, create powerful solutions, 
          and grow through technology.
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
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const trail = useTrail(services.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section services-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Building Digital Excellence</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions tailored for Toronto's small and medium businesses.
          </p>
        </div>
        <div className="services-grid">
          {trail.map((style, index) => (
            <animated.div key={services[index].title} style={style} className="service-card">
              <div className="service-icon">
                <Icon name={services[index].icon} size={32} />
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

  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const trail = useTrail(demoProjects.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.95)',
    delay: 200,
    config: { mass: 1, tension: 100, friction: 26 }
  })

  return (
    <section className="section featured-section" ref={ref}>
      <div className="container container-wide">
        <animated.div style={headerSpring} className="section-header">
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">Demo Websites</h2>
          <p className="section-subtitle">
            Explore sample websites showcasing our design capabilities and attention to detail.
          </p>
        </animated.div>
        <div className="featured-grid">
          {trail.map((style, index) => {
            const project = demoProjects[index]
            return (
              <animated.div key={project.id} style={style} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <Link to="/portfolio" className="btn btn-primary">
                      View Demo <Icon name="externalLink" size={16} />
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
    transform: inView ? 'translateX(0px)' : 'translateX(-30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section process-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">How I Work</span>
          <h2 className="section-title">A Clear Path to Success</h2>
          <p className="section-subtitle">
            A proven process that ensures transparency, collaboration, and outstanding results.
          </p>
        </div>
        <div className="process-timeline">
          {trail.map((style, index) => (
            <animated.div key={processSteps[index].number} style={style} className="process-step">
              <div className="step-number">{processSteps[index].number}</div>
              <div className="step-content">
                <h3>{processSteps[index].title}</h3>
                <p>{processSteps[index].description}</p>
              </div>
              {index < processSteps.length - 1 && <div className="step-connector"></div>}
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
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section clients-section" ref={ref}>
      <div className="container">
        <animated.div style={spring}>
          <div className="section-header">
            <span className="section-label">Who I Help</span>
            <h2 className="section-title">Built for Local Businesses</h2>
            <p className="section-subtitle">
              Serving Toronto's diverse community of entrepreneurs and business owners.
            </p>
          </div>
          <div className="clients-grid">
            {clientTypes.map((client, index) => (
              <div key={index} className="client-type">
                <Icon name={client.icon} size={28} />
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
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section pricing-preview-section" ref={ref}>
      <div className="container">
        <animated.div style={spring} className="pricing-preview-card">
          <div className="pricing-preview-content">
            <span className="section-label">Transparent Pricing</span>
            <h2>Solutions for Every Budget</h2>
            <p>
              From starter websites to comprehensive digital systems, find a package 
              that fits your business needs and budget.
            </p>
            <div className="pricing-preview-tiers">
              <div className="tier-preview">
                <span className="tier-name">Small</span>
                <span className="tier-price">$1,500+</span>
              </div>
              <div className="tier-preview">
                <span className="tier-name">Medium</span>
                <span className="tier-price">$4,000+</span>
              </div>
              <div className="tier-preview">
                <span className="tier-name">Large</span>
                <span className="tier-price">$8,000+</span>
              </div>
            </div>
            <Link to="/pricing" className="btn btn-primary btn-large">
              View Full Pricing
            </Link>
          </div>
          <div className="pricing-preview-visual">
            <div className="price-chart">
              <div className="chart-bar" style={{ height: '40%' }}></div>
              <div className="chart-bar" style={{ height: '65%' }}></div>
              <div className="chart-bar" style={{ height: '100%' }}></div>
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
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section cta-section" ref={ref}>
      <animated.div style={spring} className="container">
        <div className="cta-card">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss your digital goals and create a solution that drives real results.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-large">
              Book Free Consultation
            </Link>
            <a href="tel:+14165551234" className="btn btn-secondary btn-large">
              <Icon name="phone" size={18} /> Call Now
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
      <Services />
      <FeaturedWork />
      <Process />
      <ClientTypes />
      <PricingPreview />
      <CTA />
    </div>
  )
}

export default Home



