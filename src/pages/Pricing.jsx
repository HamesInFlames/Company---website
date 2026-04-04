import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import Icon from '../components/Icon'
import './Pricing.css'

const websiteBuildTiers = [
  {
    name: 'Basic Website',
    price: '$500 – $1,000',
    description: 'Simple 1–5 page business website with mobile responsive design.',
    idealFor: 'Great for businesses that just need a clean online presence. Includes photography and deployment.',
    popular: false
  },
  {
    name: 'Standard Website',
    price: '$1,000 – $2,500',
    description: 'Business website with 5–15 pages, forms, CMS, and SEO setup.',
    idealFor: 'Ideal for most small businesses that need more structure and features. Includes photography and deployment.',
    popular: true
  },
  {
    name: 'Full Digital Storefront',
    price: '$4,000 – $4,500',
    description: 'Complete e-commerce platform with product catalog, payment processing, and delivery integrations.',
    idealFor: 'For businesses that want to sell online with professional photography, Uber Eats integration, and everything included.',
    popular: false
  },
  {
    name: 'Custom Application',
    price: '$5,000+',
    description: 'Custom software, internal tools, CRM systems, or complex integrations.',
    idealFor: 'Quoted per project once scope is clear.',
    popular: false,
    isCustom: true
  }
]

const maintenancePlans = [
  {
    name: 'Basic Support',
    price: '$50+',
    tagline: 'Usage-based minimum',
    description: 'Base management fee covering monitoring, uptime, SSL, and minor updates.',
    features: [
      'Uptime monitoring',
      'SSL management',
      'Minor text and image updates',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Active Support',
    price: '$100+',
    tagline: 'For active, growing sites',
    description: 'Higher management fee for sites that need frequent updates, performance checks, and priority help.',
    features: [
      'Everything in Basic',
      'Frequent content updates',
      'Layout adjustments',
      'Performance optimization',
      'Priority support'
    ],
    popular: true
  }
]

const comparisons = [
  { item: 'Custom website', market: '$5,000–$10,000', ours: 'Included' },
  { item: 'Product photography', market: '$1,500–$3,000', ours: 'Included' },
  { item: 'E-commerce system', market: '$2,000–$5,000', ours: 'Included' },
  { item: 'Delivery integration', market: '$1,000–$3,000', ours: 'Included' },
  { item: 'Deployment & infrastructure', market: '$500–$1,000', ours: 'Included' }
]

const faqs = [
  {
    question: "What's included in every project?",
    answer: "Every website project includes professional photography of your products and business, full deployment to cloud infrastructure, mobile-responsive design, and ongoing usage-based hosting. You don't pay extra for photos or deployment — it's all part of the package."
  },
  {
    question: 'How does usage-based pricing work?',
    answer: "Your monthly fee is tied to your actual Railway infrastructure costs with a transparent markup plus a base management fee. A simple brochure site might cost $70/month total, while a full e-commerce platform might be $200/month. You see exactly what you're paying for."
  },
  {
    question: 'What are the operating fees for?',
    answer: "The operating fees cover essential services like hosting, domain registration, and platform infrastructure that keep your website running smoothly. These are based on your actual Railway infrastructure usage with a transparent cost-plus formula."
  },
  {
    question: 'Do I need a maintenance plan?',
    answer: "Maintenance is optional. If you're comfortable making your own updates or don't need frequent changes, you can skip it. But if you want help keeping things fresh without the hassle, a support plan gives you peace of mind."
  },
  {
    question: 'What if my project is bigger than the tiers shown?',
    answer: "For larger projects like custom applications, CRM systems, or complex integrations, we'll discuss your needs and provide a custom quote once the scope is clear. Custom Application projects start at $5,000."
  },
  {
    question: 'Are there any long-term contracts?',
    answer: 'No. There are no long-term contracts or commitments. You pay for the build, and then you can choose whether to add support on a month-to-month basis.'
  }
]

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 26 }
  }
}

function Hero() {
  return (
    <section className="pricing-hero">
      <div className="pricing-hero-bg"></div>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 26 }}
      >
        <span className="section-label">Pricing</span>
        <h1>Website Pricing</h1>
        <p className="pricing-hero-subtitle">
          Simple, transparent pricing based on scope — not inflated packages. Every project includes professional photography and deployment.
        </p>
      </motion.div>
    </section>
  )
}

function WebsiteBuildTiers() {
  return (
    <section className="section packages-section">
      <div className="container container-wide">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 26 }}
        >
          <span className="section-label">Website Build Tiers</span>
          <h2>One-Time Build Cost</h2>
          <p className="section-subtitle">
            Pay once for your website. No hidden fees. No surprises.
          </p>
        </motion.div>
        <motion.div
          className="pricing-grid pricing-grid-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {websiteBuildTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              className={`pricing-card build-card ${tier.popular ? 'popular' : ''} ${tier.isCustom ? 'custom-tier' : ''}`}
            >
              {tier.popular && <span className="popular-badge">Most Popular</span>}
              <div className="pricing-card-top">
                <h3>{tier.name}</h3>
                <div className="pricing-amount">
                  <span className="price">{tier.price}</span>
                </div>
              </div>
              <div className="tier-description">
                <p className="tier-main-desc">{tier.description}</p>
                <p className="tier-ideal-for">{tier.idealFor}</p>
              </div>
              <Link
                to="/contact"
                className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function OperatingFees() {
  return (
    <section className="section operating-fees-section">
      <div className="container">
        <motion.div
          className="operating-fees-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 26 }}
        >
          <div className="operating-fees-header">
            <span className="section-label">Important</span>
            <h2>Operating & Platform Fees</h2>
            <p className="operating-intro">
              Monthly fees are calculated using a transparent cost-plus formula tied to your actual Railway infrastructure usage. Bigger site, more traffic = slightly higher cost. You see exactly what you pay for.
            </p>
          </div>

          <div className="operating-fees-content">
            <div className="fees-disclaimer">
              <Icon name="info" size={20} />
              <p>These fees do not go to me — they go directly toward:</p>
            </div>

            <ul className="operating-list">
              <li>
                <Icon name="server" size={18} />
                <span>Website hosting</span>
              </li>
              <li>
                <Icon name="globe" size={18} />
                <span>Domain registration</span>
              </li>
              <li>
                <Icon name="layers" size={18} />
                <span>Platform & infrastructure services</span>
              </li>
              <li>
                <Icon name="zap" size={18} />
                <span>Performance and uptime reliability</span>
              </li>
            </ul>

            <div className="operating-cost-box">
              <span className="cost-label">Typical operating cost:</span>
              <span className="cost-amount">$5–$40 per month</span>
              <span className="cost-note">(depending on the site)</span>
            </div>

            <div className="operating-benefits">
              <p>This keeps your website:</p>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <Icon name="zap" size={16} />
                  <span>Fast</span>
                </div>
                <div className="benefit-item">
                  <Icon name="shield" size={16} />
                  <span>Secure</span>
                </div>
                <div className="benefit-item">
                  <Icon name="clock" size={16} />
                  <span>Online 24/7</span>
                </div>
              </div>
            </div>

            <p className="transparency-note">
              I'll always be transparent about these costs before anything goes live.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MaintenancePlans() {
  return (
    <section className="section maintenance-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 26 }}
        >
          <span className="section-label">Optional Maintenance & Support</span>
          <h2>Monthly Support Plans</h2>
          <p className="section-subtitle">
            Maintenance is optional, but recommended if you want help keeping things updated without stress.
          </p>
        </motion.div>
        <motion.div
          className="pricing-grid pricing-grid-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {maintenancePlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`pricing-card maintenance-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <span className="popular-badge">Recommended</span>}
              <div className="pricing-card-top">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
                <div className="pricing-amount">
                  <span className="price">{plan.price}</span>
                  <span className="price-suffix">/ month</span>
                </div>
              </div>
              <p className="plan-description">{plan.description}</p>
              <div className="includes-label">Includes:</div>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Icon name="check" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ValueComparison() {
  return (
    <section className="section value-comparison-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 26 }}
        >
          <div className="section-header">
            <span className="section-label">Value Comparison</span>
            <h2>What You Get vs. Market Rates</h2>
            <p className="section-subtitle">
              See how our full-scope project pricing compares to hiring separately for each service.
            </p>
          </div>
          <div className="comparison-card">
            <div className="comparison-table">
              <div className="comparison-header">
                <span className="comp-col-service">Service</span>
                <span className="comp-col-market">Market Rate</span>
                <span className="comp-col-ours">Kim Consultant</span>
              </div>
              {comparisons.map((item, index) => (
                <div key={index} className="comparison-row">
                  <span className="comp-col-service">{item.item}</span>
                  <span className="comp-col-market comp-strikethrough">{item.market}</span>
                  <span className="comp-col-ours comp-included">{item.ours}</span>
                </div>
              ))}
              <div className="comparison-row comparison-total">
                <span className="comp-col-service">Market Total</span>
                <span className="comp-col-market comp-strikethrough comp-total-amount">$10,000–$22,000</span>
                <span className="comp-col-ours"></span>
              </div>
              <div className="comparison-row comparison-highlight">
                <span className="comp-col-service">Kim Consultant</span>
                <span className="comp-col-market"></span>
                <span className="comp-col-ours comp-final-price">$4,000–$4,500</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FairPricing() {
  const benefits = [
    { text: 'You only pay for the size and complexity you actually need' },
    { text: 'No forced upgrades' },
    { text: 'No long-term contracts' },
    { text: 'Hosting and platform costs are separated and transparent' }
  ]

  return (
    <section className="section fair-pricing-section">
      <div className="container">
        <motion.div
          className="fair-pricing-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 26 }}
        >
          <div className="fair-pricing-content">
            <span className="section-label">Philosophy</span>
            <h2>How This Keeps Things Fair</h2>
            <ul className="fair-pricing-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <Icon name="check" size={18} />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
            <p className="fair-pricing-conclusion">
              If you want something simple, we keep it simple — and affordable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="faq-question">
        <h4>{faq.question}</h4>
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section faq-section">
      <div className="container container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 26 }}
        >
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <div className="page pricing-page">
      <Hero />
      <WebsiteBuildTiers />
      <OperatingFees />
      <MaintenancePlans />
      <ValueComparison />
      <FairPricing />
      <FAQ />
    </div>
  )
}

export default Pricing
