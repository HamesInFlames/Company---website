import { motion } from 'motion/react'
import './DeviceMockup.css'

function DeviceMockup({ 
  type = 'laptop', 
  image, 
  alt = 'Device mockup',
  delay = 0,
  className = '' 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        type: 'spring',
        stiffness: 100,
        damping: 26
      }}
      className={`device-mockup device-${type} ${className}`}
    >
      <div className="device-frame">
        <div className="device-notch"></div>
        <div className="device-screen">
          {image ? (
            <img src={image} alt={alt} />
          ) : (
            <div className="device-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-header"></div>
                <div className="placeholder-hero"></div>
                <div className="placeholder-grid">
                  <div className="placeholder-card"></div>
                  <div className="placeholder-card"></div>
                  <div className="placeholder-card"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {type === 'laptop' && <div className="device-base"></div>}
    </motion.div>
  )
}

export default DeviceMockup
