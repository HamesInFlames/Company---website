import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Card from './pages/Card'
import ScrollToTop from './components/ScrollToTop'

function MainLayout() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <div className="page-wrapper">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/card" element={<Card />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App

