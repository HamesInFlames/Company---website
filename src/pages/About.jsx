import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './About.css'

const values = [
  {
    icon: 'target',
    title: 'Practical First',
    description: "We focus on what actually helps your business run better — not flashy extras you won't use."
  },
  {
    icon: 'users',
    title: 'Direct Communication',
    description: 'You work with the person building your project. No layers, no handoffs, no confusion.'
  },
  {
    icon: 'shield',
    title: 'Honest Pricing',
    description: 'Clear costs upfront. No surprises, no hidden fees, no inflated packages.'
  },
  {
    icon: 'clipboard',
    title: 'Systems Mindset',
    description: 'We think about how tools connect and how work flows — not just individual pieces.'
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
        <h1>Systems-Focused Help for Local Businesses</h1>
        <p className="about-hero-subtitle">
          We're a small Toronto-based consultancy helping local businesses build websites 
          and systems that reduce chaos and make day-to-day operations simpler.
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
            <span className="section-label">Why We Exist</span>
            <h2>Just Getting Started</h2>
            <p>
              Kim Consultant started because we saw a pattern: small business owners 
              juggling too many tools, doing everything manually, and being the system 
              that holds it all together. That's exhausting.
            </p>
            <p>
              We launched to help with the practical stuff — building websites that 
              work, setting up systems that connect, and cleaning up the messy workflows 
              that slow businesses down. Our first clients, Grodzinski Bakery and 
              Lumière Pâtisserie, trusted us to help, and we delivered.
            </p>
            <p>
              We're new and small, which means you get direct communication and 
              honest pricing — not layers of account managers or inflated agency fees. 
              We're here to help local businesses run smoother, not to sell big promises.
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
          <span className="section-label">What We Believe</span>
          <h2>"Small businesses deserve practical websites and systems that work — 
          without the agency price tag or corporate complexity."</h2>
          <p>
            You shouldn't need a big budget or a technical background to have a 
            website that works and tools that connect properly. We keep it simple 
            and affordable because that's what local businesses actually need.
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

