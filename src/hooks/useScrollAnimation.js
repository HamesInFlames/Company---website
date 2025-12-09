import { useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    from = { opacity: 0, transform: 'translateY(40px)' },
    to = { opacity: 1, transform: 'translateY(0px)' }
  } = options

  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  })

  const spring = useSpring({
    from,
    to: inView ? to : from,
    delay,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return { ref, spring, inView }
}

export function useParallax(speed = 0.5) {
  const [ref, inView] = useInView({
    threshold: 0
  })

  const spring = useSpring({
    transform: inView ? `translateY(${speed * 50}px)` : 'translateY(0px)',
    config: { mass: 1, tension: 50, friction: 20 }
  })

  return { ref, spring }
}

export function useFadeIn(delay = 0) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    delay,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return { ref, spring, inView }
}

export function useScaleIn(delay = 0) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.95)',
    delay,
    config: { mass: 1, tension: 100, friction: 26 }
  })

  return { ref, spring, inView }
}

export function useSlideIn(direction = 'left', delay = 0) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const translateValue = direction === 'left' ? '-50px' : '50px'

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : `translateX(${translateValue})`,
    delay,
    config: { mass: 1, tension: 80, friction: 26 }
  })

  return { ref, spring, inView }
}



