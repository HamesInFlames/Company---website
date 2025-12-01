import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'
import './Header.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' }
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const headerSpring = useSpring({
    backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.9)' : 'rgba(10, 10, 10, 0)',
    backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
    borderColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
    config: { tension: 300, friction: 30 }
  })

  const mobileMenuSpring = useSpring({
    transform: isMobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isMobileMenuOpen ? 1 : 0,
    config: { tension: 300, friction: 30 }
  })

  return (
    <animated.header 
      className="header" 
      style={{
        backgroundColor: headerSpring.backgroundColor,
        backdropFilter: headerSpring.backdropFilter,
        WebkitBackdropFilter: headerSpring.backdropFilter,
        borderBottom: headerSpring.borderColor.to(c => `1px solid ${c}`)
      }}
    >
      <div className="header-container">
        <Link to="/" className="header-logo">
          <div className="logo-icon">K</div>
          <span className="logo-text">Kim Consultant</span>
        </Link>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary header-cta">
            Get Started
          </Link>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <animated.div className="mobile-menu" style={mobileMenuSpring}>
        <nav className="mobile-nav">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary mobile-cta">
            Get Started
          </Link>
        </nav>
      </animated.div>

      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </animated.header>
  )
}

export default Header

