"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTouchDevice } from "@/hooks/use-touch-device"
import Image from "next/image"

const images = [
  {
    src: "/images/fachada.webp",
    alt: "Fachada del Hotel Casa de Emaús",
    title: "Bienvenidos a Casa de Emaús",
    subtitle: "Tu hogar lejos de casa en el corazón de Salta",
  },
  {
    src: "/images/recepcion.webp",
    alt: "Recepción del hotel",
    title: "Recepción",
    subtitle: "Atención personalizada las 24 horas",
  },
  {
    src: "/images/lobby.webp",
    alt: "Lobby y área de descanso",
    title: "Lobby",
    subtitle: "Espacios cómodos para tu descanso",
  },
  {
    src: "/images/comedor-1.webp",
    alt: "Comedor principal",
    title: "Comedor",
    subtitle: "Disfruta de nuestro delicioso desayuno",
  },
  {
    src: "/images/comedor-2.webp",
    alt: "Vista del comedor",
    title: "Área de comedor",
    subtitle: "Ambiente acogedor y familiar",
  },
  {
    src: "/images/jardin.webp",
    alt: "Jardín de Santa Faustina",
    title: "Jardín de Santa Faustina",
    subtitle: "Un oasis de paz en el centro de la ciudad",
  },
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const { isTouchDevice, isMobile, shouldReduceAnimations } = useTouchDevice()

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Manejar gestos de swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  useEffect(() => {
    // Intervalo más largo en dispositivos táctiles para dar tiempo a interactuar
    const interval = setInterval(nextSlide, isTouchDevice ? 8000 : 6000)
    return () => clearInterval(interval)
  }, [nextSlide, isTouchDevice])

  return (
    <div
      className="relative w-full h-screen overflow-hidden z-10"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all ${
              shouldReduceAnimations ? "duration-300" : "duration-1000"
            } ease-in-out ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <h1
            className={`font-bold mb-4 drop-shadow-2xl ${isMobile ? "text-4xl md:text-6xl" : "text-6xl md:text-8xl"}`}
          >
            {images[currentIndex].title}
          </h1>
          <p className={`mb-8 drop-shadow-lg font-light ${isMobile ? "text-lg md:text-xl" : "text-xl md:text-2xl"}`}>
            {images[currentIndex].subtitle}
          </p>
          <div className={`flex gap-4 justify-center ${isMobile ? "flex-col items-center" : "flex-col sm:flex-row"}`}>
            <Button
              size={isMobile ? "default" : "lg"}
              className={`hotel-button-primary rounded-full shadow-2xl transition-all duration-300 touch-button ${
                isMobile ? "text-base px-8 py-4 w-full max-w-xs" : "text-lg px-8 py-4"
              }`}
              onClick={() => scrollToSection("reservas")}
            >
              Reservar Ahora
            </Button>
            <Button
              variant="outline"
              size={isMobile ? "default" : "lg"}
              className={`rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 shadow-2xl transition-all duration-300 touch-button ${
                isMobile ? "text-base px-8 py-4 w-full max-w-xs" : "text-lg px-8 py-4"
              }`}
              onClick={() => scrollToSection("habitaciones")}
            >
              Ver Habitaciones
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Más grandes en móviles */}
      <Button
        variant="outline"
        size="icon"
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white rounded-full shadow-2xl touch-button z-30 ${
          isMobile ? "w-12 h-12" : "w-14 h-14"
        }`}
        onClick={prevSlide}
      >
        <ChevronLeft className={isMobile ? "h-5 w-5" : "h-6 w-6"} />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white rounded-full shadow-2xl touch-button z-30 ${
          isMobile ? "w-12 h-12" : "w-14 h-14"
        }`}
        onClick={nextSlide}
      >
        <ChevronRight className={isMobile ? "h-5 w-5" : "h-6 w-6"} />
      </Button>

      {/* Dots Indicator - Más grandes en móviles */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 flex z-30 ${
          isMobile ? "bottom-6 space-x-2" : "bottom-8 space-x-3"
        }`}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className={`rounded-full transition-all duration-300 touch-target ${isMobile ? "w-3 h-3" : "w-4 h-4"} ${
              index === currentIndex ? "bg-white shadow-lg scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator - Solo en desktop */}
      {!isMobile && (
        <div className="absolute bottom-8 right-8 text-white/70 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Desliza hacia abajo</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}

      {/* Indicador de swipe para móviles */}
      {isMobile && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
          Desliza para cambiar imagen
        </div>
      )}
    </div>
  )
}
