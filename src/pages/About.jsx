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

const milestones = [
  { year: '2019', title: 'Founded', description: 'Started helping Toronto businesses with their digital needs.' },
  { year: '2020', title: 'Growth', description: 'Expanded services to include custom software development.' },
  { year: '2022', title: 'Milestone', description: 'Helped 50+ local businesses transform digitally.' },
  { year: '2024', title: 'Evolution', description: 'Launched comprehensive digital strategy consulting.' }
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
        <h1>Building Digital Success for Toronto Businesses</h1>
        <p className="about-hero-subtitle">
          A technology partner dedicated to helping local businesses thrive 
          in the digital landscape through websites, software, and strategic consulting.
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
            <h2>From Vision to Digital Reality</h2>
            <p>
              Kim Consultant was founded with a simple mission: to bridge the gap between 
              Toronto's small and medium businesses and the digital tools they need to succeed.
            </p>
            <p>
              Having witnessed countless local businesses struggle with outdated websites, 
              inefficient processes, and missed digital opportunities, we set out to provide 
              accessible, high-quality technology solutions tailored specifically for the 
              needs and budgets of local entrepreneurs.
            </p>
            <p>
              Today, we partner with bakeries, cafés, fitness studios, contractors, and 
              countless other local businesses to create digital experiences that drive 
              real results—more customers, streamlined operations, and sustainable growth.
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
                <span className="stat-number">50+</span>
                <span className="stat-label">Clients Served</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
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
          <h2>"To empower Toronto's local businesses with digital tools that drive growth, 
          efficiency, and lasting success."</h2>
          <p>
            We believe that every business—regardless of size—deserves access to 
            powerful technology solutions. Our mission is to make that a reality.
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
            <h2>Partnership, Not Just Service</h2>
            <p>
              We don't just build websites and walk away. We become your technology partner, 
              invested in your long-term success. From initial consultation to ongoing support, 
              we're with you every step of the way.
            </p>
            <ul className="approach-list">
              <li>
                <Icon name="checkCircle" size={20} />
                <span>Personalized solutions for your unique needs</span>
              </li>
              <li>
                <Icon name="checkCircle" size={20} />
                <span>Ongoing support and optimization</span>
              </li>
              <li>
                <Icon name="checkCircle" size={20} />
                <span>Clear communication and regular updates</span>
              </li>
              <li>
                <Icon name="checkCircle" size={20} />
                <span>Scalable solutions that grow with you</span>
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

function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const trail = useTrail(milestones.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(-30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return (
    <section className="section timeline-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Journey</span>
          <h2>Growing Together</h2>
        </div>
        <div className="timeline">
          {trail.map((style, index) => (
            <animated.div key={milestones[index].year} style={style} className="timeline-item">
              <div className="timeline-year">{milestones[index].year}</div>
              <div className="timeline-content">
                <h3>{milestones[index].title}</h3>
                <p>{milestones[index].description}</p>
              </div>
            </animated.div>
          ))}
        </div>
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
          <h2>Let's Work Together</h2>
          <p>
            Ready to transform your business? Let's start a conversation about your digital goals.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
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
      <Timeline />
      <CTA />
    </div>
  )
}

export default About

