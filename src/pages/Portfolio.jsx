import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Portfolio.css'

// Real client projects
const clientProjects = [
  {
    id: 1,
    title: 'Grodzinski Bakery',
    category: 'Bakery & Café',
    industry: 'Food & Beverage',
    isClient: true,
    description: 'A warm, inviting website for a kosher-friendly artisan bakery. Features large photography of fresh breads and pastries, online menu, location information, and catering inquiry forms.',
    longDescription: 'Our first client project! We created a digital presence that captures the warmth and tradition of this beloved Toronto bakery. The design uses earthy tones and warm beige/brown color palette to evoke the feeling of freshly baked goods. Large hero images showcase their artisan breads and pastries.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    color: '#8B7355',
    features: ['Responsive Design', 'Online Menu', 'Location Map', 'Catering Forms', 'Photo Gallery'],
    tools: ['React', 'Custom CMS', 'Cloudinary']
  },
  {
    id: 2,
    title: 'Lumière Pâtisserie',
    category: 'Luxury French Bakery',
    industry: 'Food & Beverage',
    isClient: true,
    description: 'An elegant online presence for a premium French pâtisserie. Features sophisticated serif typography, soft pastel colors, and premium dessert photography.',
    longDescription: 'Our second client trusted us to match their premium brand positioning. We designed an elegant experience with refined typography, delicate pastel color schemes, and carefully curated photography that showcases their exquisite pastries.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    color: '#D4A5A5',
    features: ['Elegant Design', 'Product Showcase', 'Online Ordering', 'Gift Cards', 'Newsletter'],
    tools: ['Next.js', 'Shopify', 'Stripe']
  }
]

// Demo/concept projects to showcase capabilities
const demoProjects = [
  {
    id: 3,
    title: 'Pulse Fitness Studio',
    category: 'Fitness & Gym',
    industry: 'Health & Wellness',
    isClient: false,
    description: 'A concept design for a modern fitness studio. Bold headings, dynamic imagery, membership pricing, and integrated booking system.',
    longDescription: 'This concept demonstrates our ability to create high-energy, conversion-focused websites. Bold, modern design with striking typography, high-contrast visuals, and seamless booking integration.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    color: '#FF6B35',
    features: ['Class Booking', 'Membership Plans', 'Trainer Profiles', 'Schedule Calendar', 'Mobile App Link'],
    tools: ['React', 'Mindbody API', 'Tailwind']
  },
  {
    id: 4,
    title: 'Brew & Bean Café',
    category: 'Coffee Shop',
    industry: 'Food & Beverage',
    isClient: false,
    description: 'A concept café website with warm, inviting aesthetics. Features menu showcase, loyalty program integration, and online ordering.',
    longDescription: 'This concept showcases our ability to create warm, community-focused websites. Rich brown tones, beautiful product photography, and a loyalty program that keeps customers coming back.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    color: '#6F4E37',
    features: ['Online Menu', 'Loyalty Program', 'Multiple Locations', 'Online Ordering', 'Gift Cards'],
    tools: ['WordPress', 'Square', 'Custom Plugin']
  },
  {
    id: 5,
    title: 'BuildRight Contractors',
    category: 'Home Improvement',
    industry: 'Construction & Trades',
    isClient: false,
    description: 'A concept contractor website with trustworthy design. Service categories, project gallery, and quote request system.',
    longDescription: 'This concept demonstrates our ability to establish trust and credibility while generating leads. Clean, professional design that showcases work through a stunning project gallery.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    color: '#4A5568',
    features: ['Service Pages', 'Project Gallery', 'Quote Requests', 'Testimonials', 'License Verification'],
    tools: ['React', 'Sanity CMS', 'Calendly']
  }
]

const allProjects = [...clientProjects, ...demoProjects]

const categories = ['All', 'Client Projects', 'Demo Concepts']

function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="portfolio-hero" ref={ref}>
      <div className="portfolio-hero-bg"></div>
      <animated.div style={spring} className="container">
        <span className="section-label">Portfolio</span>
        <h1>Our Work</h1>
        <p className="portfolio-hero-subtitle">
          Client projects and concept designs showcasing our capabilities and the quality 
          you can expect when working with us.
        </p>
      </animated.div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.95)',
    delay: index * 100,
    config: { mass: 1, tension: 100, friction: 26 }
  })

  return (
    <animated.article ref={ref} style={spring} className={`portfolio-card ${project.isClient ? 'client-project' : ''}`}>
      {project.isClient && <span className="client-badge">Client Project</span>}
      <div className="portfolio-card-image">
        <img src={project.thumbnail} alt={project.title} loading="lazy" />
        <div className="portfolio-card-overlay">
          <Link to={`/portfolio#${project.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
        <div 
          className="portfolio-card-accent" 
          style={{ backgroundColor: project.color }}
        />
      </div>
      <div className="portfolio-card-content">
        <div className="portfolio-card-meta">
          <span className="portfolio-category">{project.category}</span>
          <span className="portfolio-industry">{project.isClient ? 'Client' : 'Demo'}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="portfolio-card-features">
          {project.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="feature-tag">{feature}</span>
          ))}
        </div>
      </div>
    </animated.article>
  )
}

function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : activeCategory === 'Client Projects'
      ? clientProjects
      : demoProjects

  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section portfolio-grid-section" ref={ref}>
      <div className="container container-wide">
        <animated.div style={headerSpring} className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </animated.div>
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectShowcase() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section showcase-section" ref={ref}>
      <div className="container container-wide">
        <div className="section-header">
          <span className="section-label">Case Studies</span>
          <h2>Project Deep Dives</h2>
          <p className="section-subtitle">
            Detailed looks at our work—both client projects and concept designs.
          </p>
        </div>
        
        {allProjects.map((project, index) => (
          <ShowcaseItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ShowcaseItem({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const isReversed = index % 2 === 1

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <animated.div 
      ref={ref}
      style={spring}
      id={project.id}
      className={`showcase-item ${isReversed ? 'reversed' : ''}`}
    >
      <div className="showcase-image">
        <div className="device-mockup-container">
          <div className="laptop-mockup">
            <div className="laptop-screen">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="laptop-base"></div>
          </div>
          <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src={project.thumbnail} alt={`${project.title} mobile`} />
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-content">
        <div className="showcase-header">
          <div className="showcase-badges">
            <span className="showcase-category" style={{ color: project.color }}>
              {project.category}
            </span>
            {project.isClient && <span className="showcase-client-badge">Client Project</span>}
          </div>
          <h3>{project.title}</h3>
        </div>
        <p className="showcase-description">{project.longDescription}</p>
        <div className="showcase-details">
          <div className="detail-group">
            <h4>Key Features</h4>
            <ul className="feature-list">
              {project.features.map((feature, i) => (
                <li key={i}>
                  <Icon name="check" size={14} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="detail-group">
            <h4>Built With</h4>
            <div className="tools-list">
              {project.tools.map((tool, i) => (
                <span key={i} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="showcase-cta">
          <button className="btn btn-primary" disabled>
            <Icon name="externalLink" size={16} />
            View Live Demo
          </button>
          <span className="demo-note">Demo sites are for illustration purposes</span>
        </div>
      </div>
    </animated.div>
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
    <section className="section portfolio-cta-section" ref={ref}>
      <animated.div style={spring} className="container">
        <div className="portfolio-cta-card">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let's create something amazing together. Book a free consultation to discuss 
            your website or digital project.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-large">
              Get Started
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

function Portfolio() {
  return (
    <div className="page portfolio-page">
      <Hero />
      <ProjectGrid />
      <ProjectShowcase />
      <CTA />
    </div>
  )
}

export default Portfolio




