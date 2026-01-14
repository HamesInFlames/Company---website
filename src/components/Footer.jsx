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
              Building digital solutions for Toronto's local businesses.
            </p>
            <div className="footer-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Toronto, Ontario, Canada</span>
            </div>
          </div>

          <div className="footer-links-grid">
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
                <Link to="/services">Web Development</Link>
                <Link to="/services">Custom Software</Link>
                <Link to="/services">Digital Strategy</Link>
                <Link to="/services">SEO & Growth</Link>
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
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Kim Consultant. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



