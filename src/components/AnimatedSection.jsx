import { animated } from '@react-spring/web'
import { useFadeIn } from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '', delay = 0, ...props }) {
  const { ref, spring } = useFadeIn(delay)

  return (
    <animated.section
      ref={ref}
      style={spring}
      className={className}
      {...props}
    >
      {children}
    </animated.section>
  )
}

export default AnimatedSection




