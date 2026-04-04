import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Icon from '../components/Icon'
import './Services.css'

const serviceCategories = [
  {
    id: 'websites-ecommerce',
    icon: 'globe',
    title: 'Websites & E-Commerce',
    description: 'Custom-built websites with professional photography included. From simple business sites to full e-commerce platforms with payment processing and delivery integrations.',
    services: [
      { name: 'Custom Business Websites', description: 'Modern, mobile-first websites built with React and deployed on Railway cloud infrastructure.' },
      { name: 'E-Commerce & Online Ordering', description: 'Full product catalogs with payment processing, shopping carts, and checkout flows.' },
      { name: 'Delivery Platform Integration', description: 'Connect your site with Uber Eats and other delivery platforms for seamless ordering.' },
      { name: 'Professional Product Photography', description: 'Every project includes professional photography of your products, space, and brand — no extra charge.' },
      { name: 'Usage-Based Hosting & Maintenance', description: 'Transparent monthly fees tied to actual infrastructure usage — no inflated flat rates.' }
    ]
  },
  {
    id: 'applications',
    icon: 'code',
    title: 'Custom Applications & Internal Tools',
    description: 'When off-the-shelf tools don\'t fit, we build exactly what your business needs — quoted per project based on scope.',
    services: [
      { name: 'Internal Dashboards & Admin Tools', description: 'Simple interfaces for your team to manage day-to-day operations.' },
      { name: 'Ordering & POS-Style Systems', description: 'Custom order flows and point-of-sale setups tailored to your business.' },
      { name: 'CRM & Loyalty Programs', description: 'Customer relationship management and loyalty apps to drive repeat business.' },
      { name: 'Inventory & Tracking Systems', description: 'Keep tabs on stock, orders, and anything else you need to monitor.' },
      { name: 'API Integrations', description: 'Connect your existing tools so they work together seamlessly.' }
    ]
  },
  {
    id: 'social-growth',
    icon: 'users',
    title: 'Social Media Management & Growth',
    description: 'Full social media management with influencer partnerships and lead generation services to grow your customer base.',
    services: [
      { name: 'Social Media Management', description: 'Content creation, posting schedules, community management, and analytics across all platforms.' },
      { name: 'Influencer Partnerships', description: 'We source and manage influencers to join your brand team and drive engagement.' },
      { name: 'Lead Generation Services', description: 'Landing pages, ad funnels, and conversion optimization to find new customers.' },
      { name: 'Content Strategy & Creation', description: 'Consistent, on-brand content that builds authority and trust with your audience.' }
    ]
  },
  {
    id: 'support',
    icon: 'tool',
    title: 'Support Updates & Optimization',
    description: 'Ongoing help to keep your website running smoothly — no fluff, just practical maintenance.',
    services: [
      { name: 'Website Updates & Content Changes', description: 'Text, images, and small tweaks handled without the hassle.' },
      { name: 'Performance Improvements', description: 'Faster load times and smoother experience for your visitors.' },
      { name: 'SEO Setup', description: 'Basic search optimization so people can find you — not an ongoing campaign.' },
      { name: 'Analytics Setup & Reporting', description: 'See what\'s happening on your site with simple, useful data.' },
      { name: 'Ongoing Support Plans', description: 'Monthly maintenance so you\'re not stuck figuring things out alone.' }
    ]
  }
]

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 140, damping: 18 }
  }
}

function Hero() {
  return (
    <section className="services-hero">
      <div className="services-hero-bg"></div>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="section-label">Services</span>
        <h1>Systems That Reduce the Chaos</h1>
        <p className="services-hero-subtitle">
          We build websites, applications, and digital systems that help small businesses run smoother. Every project includes professional photography and transparent, usage-based pricing.
        </p>
      </motion.div>
    </section>
  )
}

function ServiceCategory({ category, index }) {
  const isReversed = index % 2 === 1

  return (
    <section 
      className={`section service-category-section ${isReversed ? 'reversed' : ''}`} 
      id={category.id}
    >
      <div className="container">
        <div className="service-category">
          <div className="service-category-header">
            <motion.div
              className="service-category-header-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="category-icon">
                <Icon name={category.icon} size={36} />
              </div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </motion.div>
          </div>
          <motion.div
            className="service-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {category.services.map((service) => (
              <motion.div key={service.name} variants={fadeUp} className="service-item">
                <div className="service-item-indicator">
                  <Icon name="check" size={16} />
                </div>
                <div className="service-item-content">
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
  return (
    <section className="section services-cta-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="services-cta-card">
          <div className="cta-content">
            <h2>Not Sure Where to Start?</h2>
            <p>
              Let's have a conversation about what's not working and figure out 
              if I can help. No pressure, no sales pitch.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-large">
              Book a Free Consultation
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
