import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Portfolio.css'

const demoProjects = [
  {
    id: 1,
    title: 'Grodzinski Bakery',
    category: 'Bakery & Café',
    industry: 'Food & Beverage',
    description: 'A warm, inviting website for a kosher-friendly artisan bakery. Features large photography of fresh breads and pastries, online menu, location information, and catering inquiry forms.',
    longDescription: 'We created a digital presence that captures the warmth and tradition of this beloved Toronto bakery. The design uses earthy tones and warm beige/brown color palette to evoke the feeling of freshly baked goods. Large hero images showcase their artisan breads and pastries.',
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
    description: 'An elegant online presence for a premium French pâtisserie. Features sophisticated serif typography, soft pastel colors, and premium dessert photography.',
    longDescription: 'This luxury French bakery needed a website that matched their premium brand positioning. We designed an elegant experience with refined typography, delicate pastel color schemes, and carefully curated photography that showcases their exquisite pastries.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    color: '#D4A5A5',
    features: ['Elegant Design', 'Product Showcase', 'Online Ordering', 'Gift Cards', 'Newsletter'],
    tools: ['Next.js', 'Shopify', 'Stripe']
  },
  {
    id: 3,
    title: 'Pulse Fitness Studio',
    category: 'Fitness & Gym',
    industry: 'Health & Wellness',
    description: 'A high-energy landing page for a modern fitness studio. Bold headings, dynamic imagery, membership pricing, class schedules, and integrated booking system.',
    longDescription: 'Pulse needed a website that reflected their energetic brand and converted visitors into members. We created a bold, modern design with striking typography, high-contrast visuals, and seamless integration with their booking system.',
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
    description: 'An urban café website with warm, inviting aesthetics. Features menu showcase, loyalty program integration, store locations, and online ordering capabilities.',
    longDescription: 'This local coffee shop wanted a website that captured the cozy, community-focused atmosphere of their physical location. We designed a warm, inviting site with rich brown tones, beautiful product photography, and a loyalty program that keeps customers coming back.',
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
    description: 'A professional contractor website with trustworthy design. Service categories, project gallery, testimonials, and quote request system.',
    longDescription: 'BuildRight needed a website that established trust and credibility while generating leads. We created a clean, professional design that showcases their work through a stunning project gallery and makes it easy for potential clients to request quotes.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    color: '#4A5568',
    features: ['Service Pages', 'Project Gallery', 'Quote Requests', 'Testimonials', 'License Verification'],
    tools: ['React', 'Sanity CMS', 'Calendly']
  }
]

const categories = ['All', 'Food & Beverage', 'Health & Wellness', 'Construction & Trades']

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
        <h1>Demo Websites</h1>
        <p className="portfolio-hero-subtitle">
          Explore sample websites showcasing our design capabilities, attention to detail, 
          and the diverse industries we serve.
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
    <animated.article ref={ref} style={spring} className="portfolio-card">
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
          <span className="portfolio-industry">{project.industry}</span>
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
    ? demoProjects 
    : demoProjects.filter(p => p.industry === activeCategory)

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
          <span className="section-label">Featured Demo</span>
          <h2>Detailed Case Studies</h2>
          <p className="section-subtitle">
            Deep dives into select projects showcasing our process and results.
          </p>
        </div>
        
        {demoProjects.map((project, index) => (
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
          <span className="showcase-category" style={{ color: project.color }}>
            {project.category}
          </span>
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




