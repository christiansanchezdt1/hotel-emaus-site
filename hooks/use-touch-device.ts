"use client"

import { useEffect, useState } from "react"

export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar dispositivo táctil
    const checkTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
      )
    }

    // Detectar si es móvil por tamaño de pantalla
    const checkMobile = () => {
      return window.innerWidth < 768
    }

    // Detectar preferencia de movimiento reducido
    const checkReducedMotion = () => {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    setIsTouchDevice(checkTouchDevice())
    setIsMobile(checkMobile())
    setPrefersReducedMotion(checkReducedMotion())

    // Listener para cambios de tamaño de ventana
    const handleResize = () => {
      setIsMobile(checkMobile())
    }

    // Listener para cambios en preferencias de movimiento
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    window.addEventListener("resize", handleResize)
    mediaQuery.addEventListener("change", handleMotionChange)

    return () => {
      window.removeEventListener("resize", handleResize)
      mediaQuery.removeEventListener("change", handleMotionChange)
    }
  }, [])

  return {
    isTouchDevice,
    isMobile,
    prefersReducedMotion,
    shouldReduceAnimations: prefersReducedMotion || (isTouchDevice && isMobile),
  }
}
