import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Icon from '../components/Icon'
import './Portfolio.css'

const clientProjects = [
  {
    id: 1,
    title: 'Grodzinski Bakery',
    category: 'Bakery & Café',
    industry: 'Food & Beverage',
    isClient: true,
    description: 'A warm, inviting website for a kosher-friendly artisan bakery. Features large photography of fresh breads and pastries, online menu, location information, and catering inquiry forms.',
    longDescription: 'Our first full-scope consulting engagement. We are building a comprehensive digital presence for this beloved Toronto bakery, including website design, professional photography, and operational systems integration.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    color: '#8B7355',
    features: ['Responsive Design', 'Online Menu', 'Location Map', 'Catering Forms', 'Photo Gallery'],
    tools: ['React', 'Vite', 'Railway'],
    url: null
  },
  {
    id: 2,
    title: 'Lumière Pâtisserie',
    category: 'Luxury French Bakery',
    industry: 'Food & Beverage',
    isClient: true,
    description: 'An elegant online presence for a premium French pâtisserie. Features sophisticated serif typography, soft pastel colors, and premium dessert photography.',
    longDescription: 'Our client trusted us to build their complete digital storefront. We designed and built a custom React application with a dynamic product catalog, professional photography of every product, automated image optimization pipeline, and a contact form powered by Resend API. The site is deployed on Railway with usage-based hosting.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    color: '#D4A5A5',
    features: ['Dynamic Product Catalog', 'CSV Content Management', 'Contact Form', 'Allergen System', 'Image Optimization', 'Mobile-First Design'],
    tools: ['React 19', 'Vite 7', 'Express', 'Railway', 'Resend API'],
    url: 'https://www.lumierepatisserie.ca/'
  }
]

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
    tools: ['React', 'Mindbody API', 'Tailwind'],
    url: null
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
    tools: ['WordPress', 'Square', 'Custom Plugin'],
    url: null
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
    tools: ['React', 'Sanity CMS', 'Calendly'],
    url: null
  }
]

const allProjects = [...clientProjects, ...demoProjects]
const categories = ['All', 'Client Projects', 'Demo Concepts']

function Hero() {
  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero-bg"></div>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 26 }}
      >
        <span className="section-label">Portfolio</span>
        <h1>Recent Work</h1>
        <p className="portfolio-hero-subtitle">
          Real client projects alongside concept designs — examples of the kind of
          websites and systems we build.
        </p>
      </motion.div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`portfolio-card ${project.isClient ? 'client-project' : ''}`}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 26,
        delay: index * 0.08
      }}
    >
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
    </motion.article>
  )
}

function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : activeCategory === 'Client Projects'
      ? clientProjects
      : demoProjects

  return (
    <section className="section portfolio-grid-section">
      <div className="container container-wide">
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 26 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>
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
  return (
    <section className="section showcase-section">
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
  const isReversed = index % 2 === 1

  return (
    <motion.div
      id={project.id}
      className={`showcase-item ${isReversed ? 'reversed' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 26 }}
    >
      <div className="showcase-image">
        <div className="device-mockup-container">
          <div className="laptop-mockup">
            <div className="laptop-screen">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="laptop-base"></div>
          </div>
          <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src={project.thumbnail} alt={`${project.title} mobile`} loading="lazy" />
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
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Icon name="externalLink" size={16} />
              View Live Site
            </a>
          ) : (
            <>
              <button className="btn btn-primary" disabled>
                <Icon name="externalLink" size={16} />
                View Live Demo
              </button>
              <span className="demo-note">{project.isClient ? 'Coming soon' : 'Demo sites are for illustration purposes'}</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function CTA() {
  return (
    <section className="section portfolio-cta-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 26 }}
      >
        <div className="portfolio-cta-card">
          <h2>Need Something Similar?</h2>
          <p>
            Let's talk about what you need. Book a free consultation to discuss
            your website or system project.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-large">
              Get in Touch
            </Link>
            <Link to="/pricing" className="btn btn-secondary btn-large">
              View Pricing
            </Link>
          </div>
        </div>
      </motion.div>
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
