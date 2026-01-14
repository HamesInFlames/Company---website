import { Link } from 'react-router-dom'
import { useSpring, animated, useTrail } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Icon from '../components/Icon'
import './Services.css'

const serviceCategories = [
  {
    id: 'websites-systems',
    icon: 'globe',
    title: 'Websites & Business Systems',
    description: 'Functional websites and systems that work for your business — built for clarity, flow, and everyday use.',
    services: [
      { name: 'Modern Responsive Websites', description: 'Clean, mobile-friendly sites that work on any device.' },
      { name: 'Business-Focused Landing Pages', description: 'Simple pages that explain what you do and how to reach you.' },
      { name: 'Booking & Inquiry Systems', description: 'Let customers schedule appointments or send inquiries directly.' },
      { name: 'eCommerce & Ordering Setups', description: 'Online stores and ordering flows that actually make sense.' },
      { name: 'Custom Components When Needed', description: 'Special features built only when your business genuinely requires them.' }
    ]
  },
  {
    id: 'operations',
    icon: 'clipboard',
    title: 'Operational Setup & Consulting',
    description: 'Practical help cleaning up how your business runs — less chaos, more clarity.',
    services: [
      { name: 'Technology & Tool Audits', description: 'A clear look at what you\'re using and what\'s actually helping.' },
      { name: 'Workflow Cleanup', description: 'Simplifying how tasks move through your business.' },
      { name: 'Practical System Planning', description: 'Mapping out what needs to happen before jumping into tools.' },
      { name: 'Tool Recommendations', description: 'Honest suggestions only when switching or adding makes sense.' }
    ]
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Custom Software & Internal Tools',
    description: 'When off-the-shelf tools don\'t fit, I build what you actually need — nothing more, nothing less.',
    services: [
      { name: 'Internal Dashboards & Admin Tools', description: 'Simple interfaces for your team to manage day-to-day work.' },
      { name: 'Ordering & POS-Style Systems', description: 'Custom order flows and point-of-sale setups for your operations.' },
      { name: 'CRM Setup & Light Automation', description: 'Organize customer info and automate repetitive follow-ups.' },
      { name: 'Inventory & Tracking Systems', description: 'Keep tabs on stock, orders, or anything else you need to track.' },
      { name: 'API Integrations', description: 'Connect your tools so they talk to each other when it matters.' }
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

const comingSoonServices = {
  id: 'coming-soon',
  icon: 'zap',
  title: 'Coming Soon: Social Media & Client Lead Systems',
  description: 'This is being developed carefully and will launch when ready. Not a promise — a preview of what\'s next.',
  services: [
    { name: 'Social Media Coordination', description: 'Helping align your website and social presence — not daily posting or content farming.' },
    { name: 'Website & Social Alignment', description: 'Making sure your online presence feels consistent across platforms.' },
    { name: 'Simple Lead Capture Systems', description: 'Forms, inbox routing, and basic automation to organize incoming inquiries.' },
    { name: 'Inquiry Routing & Organization', description: 'Structure for handling leads so nothing falls through the cracks.' }
  ],
  note: 'This is not full-service social media management, ad buying, or guaranteed lead generation. It\'s about building structure — not making promises.'
}

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
        <span className="section-label">Services</span>
        <h1>Systems That Reduce the Chaos</h1>
        <p className="services-hero-subtitle">
          I build websites, tools, and systems that help small businesses run smoother — 
          not flashy marketing or abstract strategy. Just practical structure that works.
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

function ComingSoonSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 80, friction: 26 }
  })

  const trail = useTrail(comingSoonServices.services.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(15px)',
    delay: inView ? 200 : 0,
    config: { mass: 1, tension: 140, friction: 18 }
  })

  return (
    <section className="section coming-soon-section" id={comingSoonServices.id} ref={ref}>
      <div className="container">
        <animated.div style={spring} className="coming-soon-card">
          <div className="coming-soon-header">
            <span className="coming-soon-badge">Coming Soon</span>
            <div className="category-icon">
              <Icon name={comingSoonServices.icon} size={32} />
            </div>
            <h2>{comingSoonServices.title.replace('Coming Soon: ', '')}</h2>
            <p className="coming-soon-desc">{comingSoonServices.description}</p>
          </div>
          <div className="coming-soon-services">
            {trail.map((style, i) => (
              <animated.div key={comingSoonServices.services[i].name} style={style} className="coming-soon-item">
                <Icon name="clock" size={16} />
                <div>
                  <h4>{comingSoonServices.services[i].name}</h4>
                  <p>{comingSoonServices.services[i].description}</p>
                </div>
              </animated.div>
            ))}
          </div>
          <p className="coming-soon-note">{comingSoonServices.note}</p>
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
    <section className="section services-cta-section" ref={ref}>
      <animated.div style={spring} className="container">
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
      <ComingSoonSection />
      <CTA />
    </div>
  )
}

export default Services




