"use client"

import { useEffect, useRef, useState } from "react"
import { useTouchDevice } from "./use-touch-device"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const { shouldReduceAnimations, isMobile } = useTouchDevice()

  const {
    threshold = isMobile ? 0.05 : 0.1, // Menor threshold en móviles
    rootMargin = isMobile ? "50px" : "0px", // Mayor margen en móviles
    triggerOnce = true,
  } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Si las animaciones están reducidas, activar inmediatamente
    if (shouldReduceAnimations) {
      setIsInView(true)
      setHasBeenInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)

        if (inView && !hasBeenInView) {
          setHasBeenInView(true)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, hasBeenInView, shouldReduceAnimations])

  return {
    ref,
    isInView: triggerOnce ? hasBeenInView : isInView,
    shouldReduceAnimations,
  }
}
