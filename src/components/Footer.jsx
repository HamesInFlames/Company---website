import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Kim Consultant" className="footer-logo-image" />
            </Link>
            <p className="footer-tagline">
              Practical websites and systems for Toronto's small businesses.
            </p>
          </div>

          <div className="footer-links-column">
            <h4>Navigation</h4>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-links-column">
            <h4>Services</h4>
            <nav>
              <Link to="/services#websites-ecommerce">Websites & E-Commerce</Link>
              <Link to="/services#applications">Custom Applications</Link>
              <Link to="/services#social-growth">Social Media & Growth</Link>
              <Link to="/services#support">Support & Updates</Link>
            </nav>
          </div>

          <div className="footer-links-column">
            <h4>Contact</h4>
            <nav>
              <a href="mailto:jameskim@kimconsultant.net">jameskim@kimconsultant.net</a>
              <a href="https://wa.me/12898947288?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services." target="_blank" rel="noopener noreferrer">+1&nbsp;(289)&nbsp;894-7288</a>
              <Link to="/contact">Book Consultation</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Kim Consultant. All rights reserved.
          </p>
          <div className="footer-legal">
            <span className="footer-location-text">Toronto, Ontario, Canada</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
