import { animated } from '@react-spring/web'
import { useScaleIn } from '../hooks/useScrollAnimation'
import './DeviceMockup.css'

function DeviceMockup({ 
  type = 'laptop', 
  image, 
  alt = 'Device mockup',
  delay = 0,
  className = '' 
}) {
  const { ref, spring } = useScaleIn(delay)

  return (
    <animated.div 
      ref={ref} 
      style={spring} 
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
    </animated.div>
  )
}

export default DeviceMockup

