"use client"

import { useInView } from "@/hooks/use-in-view"
import { useTouchDevice } from "@/hooks/use-touch-device"
import type { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "slide-bottom"
  delay?: number
  className?: string
}

export function ScrollAnimation({ children, animation = "fade-up", delay = 0, className = "" }: ScrollAnimationProps) {
  const { ref, isInView, shouldReduceAnimations } = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true })
  const { isMobile, isTouchDevice } = useTouchDevice()

  const getAnimationClasses = () => {
    // Si las animaciones están reducidas, solo aplicar fade simple
    if (shouldReduceAnimations) {
      return `transition-opacity duration-300 ${isInView ? "opacity-100" : "opacity-0"}`
    }

    // Duraciones más cortas en móviles
    const duration = isMobile ? "duration-500" : "duration-800"
    const baseClass = `transition-all ${duration} ease-out`
    const delayClass = delay > 0 && !isMobile ? `animate-delay-${Math.min(delay, 300)}` : ""

    if (!isInView) {
      switch (animation) {
        case "fade-left":
          return `${baseClass} animate-on-scroll-left ${delayClass}`
        case "fade-right":
          return `${baseClass} animate-on-scroll-right ${delayClass}`
        case "scale":
          return `${baseClass} animate-on-scroll-scale ${delayClass}`
        case "slide-bottom":
          return `${baseClass} animate-on-scroll-bottom ${delayClass}`
        default:
          return `${baseClass} animate-on-scroll ${delayClass}`
      }
    }

    switch (animation) {
      case "fade-left":
        return `${baseClass} animate-fade-in-left ${delayClass}`
      case "fade-right":
        return `${baseClass} animate-fade-in-right ${delayClass}`
      case "scale":
        return `${baseClass} animate-scale-in ${delayClass}`
      case "slide-bottom":
        return `${baseClass} animate-slide-in-bottom ${delayClass}`
      default:
        return `${baseClass} animate-fade-in-up ${delayClass}`
    }
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        // Reducir transform en dispositivos táctiles para mejor rendimiento
        willChange: isTouchDevice ? "opacity" : "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}
