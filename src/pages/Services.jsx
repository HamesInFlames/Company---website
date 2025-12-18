import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Services.css'

const serviceCategories = [
  {
    id: 'web-development',
    icon: 'globe',
    title: 'Website Design & Development',
    description: 'Beautiful, functional websites that represent your brand and convert visitors into customers.',
    services: [
      { name: 'Modern Responsive Websites', description: 'Mobile-first designs that look stunning on every device.' },
      { name: 'eCommerce Stores', description: 'Online stores with secure checkout and inventory management.' },
      { name: 'Branding & UI Kits', description: 'Cohesive visual identity systems for your digital presence.' },
      { name: 'Booking & Scheduling Systems', description: 'Appointment booking integrated directly into your site.' },
      { name: 'Custom Component Development', description: 'Unique interactive elements built for your needs.' },
      { name: 'Landing Pages & Funnels', description: 'High-converting pages for campaigns and promotions.' }
    ]
  },
  {
    id: 'consulting',
    icon: 'compass',
    title: 'Business Consulting & Digital Strategy',
    description: 'Strategic guidance to help you navigate the digital landscape and make informed technology decisions.',
    services: [
      { name: 'Technology Audits', description: 'Comprehensive review of your current digital infrastructure.' },
      { name: 'Competitor Analysis', description: 'Understanding your market and identifying opportunities.' },
      { name: 'Workflow Optimization', description: 'Streamlining processes for maximum efficiency.' },
      { name: 'Tool Recommendations', description: 'Expert guidance on software and platform selection.' },
      { name: 'Digital Transformation Advisory', description: 'Roadmaps for modernizing your business operations.' }
    ]
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Custom Software Solutions',
    description: 'Tailored applications and systems built specifically for your unique business requirements.',
    services: [
      { name: 'Internal Tools & Dashboards', description: 'Custom applications for your team\'s specific workflows.' },
      { name: 'POS & Ordering Systems', description: 'Point of sale and order management solutions.' },
      { name: 'CRM Setup & Automation', description: 'Customer relationship management configuration.' },
      { name: 'Inventory & Logistics Systems', description: 'Stock tracking and supply chain management.' },
      { name: 'API Integrations', description: 'Connecting your tools and platforms seamlessly.' }
    ]
  },
  {
    id: 'growth',
    icon: 'trendingUp',
    title: 'Growth & Optimization Services',
    description: 'Continuous improvement strategies to help your digital presence perform at its best.',
    services: [
      { name: 'SEO Setup', description: 'Search engine optimization to boost your visibility.' },
      { name: 'Performance Optimization', description: 'Speed improvements for better user experience.' },
      { name: 'Content Updates', description: 'Regular content refreshes to keep your site current.' },
      { name: 'A/B Testing', description: 'Data-driven experiments to improve conversions.' },
      { name: 'Analytics & Reporting', description: 'Insights and metrics to track your success.' }
    ]
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
    <section className="services-hero" ref={ref}>
      <div className="services-hero-bg"></div>
      <animated.div style={spring} className="container">
        <span className="section-label">Our Services</span>
        <h1>Comprehensive Digital Solutions</h1>
        <p className="services-hero-subtitle">
          From websites to custom software, we provide everything your business needs 
          to thrive in the digital age.
        </p>
      </animated.div>
    </section>
  )
}

function ServiceCategory({ category, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  // Only use opacity for sticky header (transform conflicts with position:sticky)
  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 120, friction: 20 }
  })

  const trail = useTrail(category.services.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(15px)',
    delay: inView ? 100 : 0,
    config: { mass: 1, tension: 140, friction: 18 }
  })

  const isReversed = index % 2 === 1

  return (
    <section 
      className={`section service-category-section ${isReversed ? 'reversed' : ''}`} 
      id={category.id}
      ref={ref}
    >
      <div className="container">
        <div className="service-category">
          <div className="service-category-header">
            <animated.div style={headerSpring} className="service-category-header-content">
              <div className="category-icon">
                <Icon name={category.icon} size={36} />
              </div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </animated.div>
          </div>
          <div className="service-list">
            {trail.map((style, i) => (
              <animated.div key={category.services[i].name} style={style} className="service-item">
                <div className="service-item-indicator">
                  <Icon name="check" size={16} />
                </div>
                <div className="service-item-content">
                  <h4>{category.services[i].name}</h4>
                  <p>{category.services[i].description}</p>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickNav() {
  return (
    <nav className="services-nav">
      <div className="container">
        <div className="services-nav-inner">
          {serviceCategories.map(cat => (
            <a key={cat.id} href={`#${cat.id}`} className="nav-chip">
              <Icon name={cat.icon} size={18} />
              <span>{cat.title.split(' ')[0]}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
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
    <section className="section services-cta-section" ref={ref}>
      <animated.div style={spring} className="container">
        <div className="services-cta-card">
          <div className="cta-content">
            <h2>Not Sure Which Service You Need?</h2>
            <p>
              Book a free consultation and we'll help you identify the best solutions 
              for your business goals.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-large">
              Book Free Consultation
            </Link>
            <Link to="/pricing" className="btn btn-secondary btn-large">
              View Pricing
            </Link>
          </div>
        </div>
      </animated.div>
    </section>
  )
}

function Services() {
  return (
    <div className="page services-page">
      <Hero />
      <QuickNav />
      {serviceCategories.map((category, index) => (
        <ServiceCategory key={category.id} category={category} index={index} />
      ))}
      <CTA />
    </div>
  )
}

export default Services




