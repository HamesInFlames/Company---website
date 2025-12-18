import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './About.css'

const values = [
  {
    icon: 'target',
    title: 'Results-Driven',
    description: 'Every solution is designed with measurable outcomes in mind. Your success is our success.'
  },
  {
    icon: 'users',
    title: 'Client-Focused',
    description: 'We listen first, then build. Your vision and needs guide every decision we make.'
  },
  {
    icon: 'shield',
    title: 'Transparency',
    description: 'Clear communication, honest pricing, and no hidden surprises. You always know where we stand.'
  },
  {
    icon: 'zap',
    title: 'Innovation',
    description: 'Staying ahead of technology trends to bring you the most effective, modern solutions.'
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
    <section className="about-hero" ref={ref}>
      <div className="about-hero-bg"></div>
      <animated.div style={spring} className="container">
        <span className="section-label">About Kim Consultant</span>
        <h1>A Fresh Approach to Digital for Local Businesses</h1>
        <p className="about-hero-subtitle">
          We're a new Toronto-based consultancy passionate about helping local businesses 
          build beautiful, effective digital experiences that drive real results.
        </p>
      </animated.div>
    </section>
  )
}

function Story() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const leftSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(-30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const rightSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(30px)',
    delay: 200,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section story-section" ref={ref}>
      <div className="container">
        <div className="story-grid">
          <animated.div style={leftSpring} className="story-content">
            <span className="section-label">Our Story</span>
            <h2>Just Getting Started</h2>
            <p>
              Kim Consultant was born from a simple observation: too many amazing local 
              businesses are held back by outdated or non-existent digital presences. 
              We're here to change that.
            </p>
            <p>
              We recently launched with a focus on what we do best—creating stunning, 
              functional websites and digital solutions for Toronto's local businesses. 
              Our first clients, Grodzinski Bakery and Lumière Pâtisserie, trusted us 
              with their digital transformation, and we're proud of the results.
            </p>
            <p>
              We may be new, but we bring fresh perspectives, modern techniques, and 
              genuine passion to every project. We're not trying to be everything to 
              everyone—we're focused on being the best partner for local businesses 
              ready to level up their digital game.
            </p>
          </animated.div>
          <animated.div style={rightSpring} className="story-image">
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Professional workspace with laptop and coffee" 
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
          </animated.div>
        </div>
      </div>
    </section>
  )
}

function Mission() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section mission-section" ref={ref}>
      <animated.div style={spring} className="container container-narrow">
        <div className="mission-card">
          <span className="section-label">Our Mission</span>
          <h2>"To give Toronto's local businesses the same quality digital presence 
          that big brands enjoy—at prices that make sense."</h2>
          <p>
            We believe stunning websites and smart digital tools shouldn't be reserved 
            for corporations with massive budgets. Every local bakery, café, and shop 
            deserves to shine online.
          </p>
        </div>
      </animated.div>
    </section>
  )
}

function Values() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const trail = useTrail(values.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section values-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Values</span>
          <h2>What Drives Us</h2>
          <p className="section-subtitle">
            The principles that guide our work and relationships with clients.
          </p>
        </div>
        <div className="values-grid">
          {trail.map((style, index) => (
            <animated.div key={values[index].title} style={style} className="value-card">
              <div className="value-icon">
                <Icon name={values[index].icon} size={28} />
              </div>
              <h3>{values[index].title}</h3>
              <p>{values[index].description}</p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section approach-section" ref={ref}>
      <div className="container">
        <animated.div style={spring} className="approach-content">
          <div className="approach-text">
            <span className="section-label">Our Approach</span>
            <h2>Small Team, Big Dedication</h2>
            <p>
              Being a new consultancy means you get our full attention. No passing you off 
              to junior staff or automated systems—when you work with us, you work directly 
              with the people building your project.
            </p>
            <ul className="approach-list">
              <li>
                <Icon name="checkCircle" size={20} />
                <span>Direct communication with your project lead</span>
              </li>
              <li>
                <Icon name="checkCircle" size={20} />
                <span>Flexible timelines that work for your business</span>
              </li>
              <li>
                <Icon name="checkCircle" size={20} />
                <span>Honest pricing with no hidden fees</span>
              </li>
              <li>
                <Icon name="checkCircle" size={20} />
                <span>We're invested in your success—your growth is our growth</span>
              </li>
            </ul>
          </div>
          <div className="approach-visual">
            <div className="approach-image">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Team collaboration and strategy session" 
              />
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
          <h2>Be Part of Our Story</h2>
          <p>
            We're just getting started and looking for great local businesses to partner with. 
            Could yours be next?
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Let's Chat
          </Link>
        </div>
      </animated.div>
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

