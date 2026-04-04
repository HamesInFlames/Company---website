import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Icon from '../components/Icon'
import './About.css'

const values = [
  {
    icon: 'target',
    title: 'Operations-First Thinking',
    description: "We understand how businesses run before building technology to improve them — not the other way around."
  },
  {
    icon: 'users',
    title: 'Direct Communication',
    description: 'You work with the person building your project. No layers, no handoffs, no confusion.'
  },
  {
    icon: 'shield',
    title: 'Transparent Pricing',
    description: 'Usage-based monthly fees tied to real infrastructure costs. No hidden fees, no inflated packages.'
  },
  {
    icon: 'clipboard',
    title: 'All-Inclusive Delivery',
    description: 'Photography, integrations, deployment, and support are standard in every project — never surprise extras.'
  }
]

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 26 }
  }
}

function Hero() {
  return (
    <section className="about-hero">
      <div className="about-hero-bg"></div>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="section-label">About Kim Consultant</span>
        <h1>Systems-Focused Help for Local Businesses</h1>
        <p className="about-hero-subtitle">
          We're a small Toronto-based consultancy helping local businesses build websites, applications, and digital systems that reduce chaos and make day-to-day operations simpler. Every project includes professional photography.
        </p>
      </motion.div>
    </section>
  )
}

function Story() {
  return (
    <section className="section story-section">
      <div className="container">
        <div className="story-grid">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="section-label">Why We Exist</span>
            <h2>Just Getting Started</h2>
            <p>
              Kim Consultant started because we saw a pattern: small business owners 
              juggling too many tools, doing everything manually, and being the system 
              that holds it all together. That's exhausting.
            </p>
            <p>
              We launched to help with the practical stuff — building websites, custom 
              applications, and digital systems that work, managing social media presence, 
              and including professional photography in every project. Our clients — 
              Grodzinski Bakery (full-scope engagement), Lumière Pâtisserie (live website), 
              and Tova (active projects) — trusted us to help, and we're delivering.
            </p>
            <p>
              We're a team of 2, growing as the business scales. That means you get 
              direct communication and transparent, usage-based pricing — not layers of 
              account managers or inflated agency fees. We're here to help local businesses 
              run smoother, not to sell big promises.
            </p>
          </motion.div>
          <motion.div
            className="story-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Professional workspace with laptop and coffee"
                loading="lazy"
              />
            </div>
            <div className="story-stats">
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="section mission-section">
      <motion.div
        className="container container-narrow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="mission-card">
          <span className="section-label">What We Believe</span>
          <h2>"Small businesses deserve practical websites and systems that work — 
          without the agency price tag or corporate complexity."</h2>
          <p>
            You shouldn't need a big budget or a technical background to have a 
            website that works and tools that connect properly. We keep it simple 
            and affordable because that's what local businesses actually need.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

function Values() {
  return (
    <section className="section values-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Values</span>
          <h2>What Drives Us</h2>
          <p className="section-subtitle">
            The principles that guide our work and relationships with clients.
          </p>
        </div>
        <motion.div
          className="values-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={fadeUp} className="value-card">
              <div className="value-icon">
                <Icon name={value.icon} size={28} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="section approach-section">
      <div className="container">
        <motion.div
          className="approach-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="approach-text">
            <span className="section-label">Our Approach</span>
            <h2>Small Team, Direct Communication</h2>
            <p>
              Being a small consultancy means you work directly with the person building 
              your project. No account managers, no handoffs, no waiting for answers.
            </p>
            <ul className="approach-list">
              <li>
                <Icon name="checkCircle" size={20} />
                <span>You talk to the person doing the work</span>
              </li>
              <li>
                <Icon name="checkCircle" size={20} />
                <span>Flexible timelines that work for your schedule</span>
              </li>
              <li>
                <Icon name="checkCircle" size={20} />
                <span>Transparent pricing — you know exactly what you're paying for</span>
              </li>
              <li>
                <Icon name="checkCircle" size={20} />
                <span>No long-term contracts or forced commitments</span>
              </li>
            </ul>
          </div>
          <div className="approach-visual">
            <div className="approach-image">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Team collaboration and strategy session"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="section cta-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="cta-card">
          <h2>Be Part of Our Story</h2>
          <p>
            We're just getting started and looking for great local businesses to partner with. 
            Could yours be next?
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Let's Chat
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

function About() {
  return (
    <div className="page about-page">
      <Hero />
      <Story />
      <Mission />
      <Values />
      <Approach />
      <CTA />
    </div>
  )
}

export default About
