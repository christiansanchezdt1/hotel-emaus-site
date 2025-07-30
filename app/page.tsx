"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ImageSlider } from "@/components/image-slider"
import { ReservationForm } from "@/components/reservation-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Wifi, Car, Coffee, Shield } from "lucide-react"
import { RoomsSection } from "@/components/rooms-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SEOContent } from "@/components/seo-content"
import { useTouchDevice } from "@/hooks/use-touch-device"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const { isTouchDevice, isMobile, shouldReduceAnimations } = useTouchDevice()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setHeaderScrolled(currentScrollY > 100)
    }

    // Usar passive listener para mejor rendimiento en móviles
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header superpuesto */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] header-fixed transition-all duration-300 ${
          headerScrolled ? "header-scrolled" : "bg-white/10 backdrop-blur-md border-b border-white/20"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className={headerScrolled ? "text-gray-800" : "text-white"}>
              <h1 className={`font-bold transition-colors duration-300 ${isMobile ? "text-xl" : "text-2xl"}`}>
                Hotel Casa de Emaús
              </h1>
              <p className="text-sm transition-colors duration-300">Hotel en Salta Capital</p>
            </div>
            <nav
              className={`hidden md:flex space-x-6 transition-colors duration-300 ${
                headerScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <button
                onClick={() => scrollToSection("inicio")}
                className="hover:text-amber-300 transition-colors cursor-pointer touch-target"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("habitaciones")}
                className="hover:text-amber-300 transition-colors cursor-pointer touch-target"
              >
                Habitaciones
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="hover:text-amber-300 transition-colors cursor-pointer touch-target"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="hover:text-amber-300 transition-colors cursor-pointer touch-target"
              >
                Contacto
              </button>
              <button
                onClick={() => scrollToSection("reservas")}
                className="hover:text-amber-300 transition-colors cursor-pointer touch-target"
              >
                Reservas
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section Fullscreen */}
      <section id="inicio" className="hero-section">
        {/* Parallax solo en desktop */}
        <div
          className={`image-slider ${!isTouchDevice ? "parallax" : ""}`}
          style={!isTouchDevice ? ({ "--scroll-y": `${scrollY * 0.5}px` } as React.CSSProperties) : {}}
        >
          <ImageSlider />
        </div>
      </section>

      {/* SEO Content Section */}
      <section id="servicios" className="content-section">
        <SEOContent />
      </section>

      {/* Rooms Section */}
      <section id="habitaciones" className="content-section">
        <ScrollAnimation animation="fade-up">
          <RoomsSection />
        </ScrollAnimation>
      </section>

      {/* Main Content */}
      <div className="content-section main-content bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 py-16">
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${isMobile ? "gap-8" : "gap-12"}`}>
            {/* Hotel Information */}
            <div className={isMobile ? "space-y-6" : "space-y-8"}>
              <ScrollAnimation animation="fade-left">
                <Card className="hotel-card shadow-2xl">
                  <CardContent className={isMobile ? "p-6" : "p-10"}>
                    <h2 className={`font-bold mb-6 hotel-text-primary ${isMobile ? "text-2xl" : "text-4xl"}`}>
                      Hotel Casa de Emaús - Tu Hogar en Salta
                    </h2>
                    <p className={`text-gray-700 mb-6 leading-relaxed ${isMobile ? "text-base" : "text-lg"}`}>
                      Bienvenido al mejor <strong>hotel / posada en Salta capital</strong>. El Hotel Casa de Emaús te ofrece una
                      experiencia única con instalaciones cómodas y un ambiente acogedor. Nuestro hermoso comedor con
                      techo de cristal, lobby confortable y jardín interior te harán sentir como en casa.
                    </p>
                    <p className={`text-gray-700 mb-6 leading-relaxed ${isMobile ? "text-base" : "text-lg"}`}>
                      Como <strong>Hotel en Salta</strong> de confianza, ofrecemos{" "}
                      <strong>habitaciones baratas en Salta capital</strong>
                      sin comprometer la calidad. Somos la mejor opción para{" "}
                      <strong>alquiler temporario en el centro de Salta</strong>.
                    </p>
                    <div className={`grid grid-cols-1 ${isMobile ? "gap-4" : "grid-cols-2 gap-6"}`}>
                      <ScrollAnimation animation="scale" delay={shouldReduceAnimations ? 0 : 100}>
                        <div
                          className={`flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 hover:shadow-lg transition-shadow touch-target ${
                            isMobile ? "p-3" : "p-4"
                          }`}
                        >
                          <Wifi className={`text-green-600 ${isMobile ? "h-6 w-6" : "h-7 w-7"}`} />
                          <span className="text-green-800 font-medium">WiFi Gratuito</span>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation animation="scale" delay={shouldReduceAnimations ? 0 : 200}>
                        <div
                          className={`flex items-center gap-3 rounded-xl bg-blue-50 border border-blue-200 hover:shadow-lg transition-shadow touch-target ${
                            isMobile ? "p-3" : "p-4"
                          }`}
                        >
                          <Car className={`text-blue-600 ${isMobile ? "h-6 w-6" : "h-7 w-7"}`} />
                          <span className="text-blue-800 font-medium">Estacionamiento</span>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation animation="scale" delay={shouldReduceAnimations ? 0 : 300}>
                        <div
                          className={`flex items-center gap-3 rounded-xl bg-orange-50 border border-orange-200 hover:shadow-lg transition-shadow touch-target ${
                            isMobile ? "p-3" : "p-4"
                          }`}
                        >
                          <Coffee className={`text-orange-600 ${isMobile ? "h-6 w-6" : "h-7 w-7"}`} />
                          <span className="text-orange-800 font-medium">Desayuno</span>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation animation="scale" delay={shouldReduceAnimations ? 0 : 400}>
                        <div
                          className={`flex items-center gap-3 rounded-xl bg-purple-50 border border-purple-200 hover:shadow-lg transition-shadow touch-target ${
                            isMobile ? "p-3" : "p-4"
                          }`}
                        >
                          <Shield className={`text-purple-600 ${isMobile ? "h-6 w-6" : "h-7 w-7"}`} />
                          <span className="text-purple-800 font-medium">Seguridad 24h</span>
                        </div>
                      </ScrollAnimation>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-left" delay={shouldReduceAnimations ? 0 : 200}>
                <Card className="hotel-card shadow-2xl" id="contacto">
                  <CardContent className={isMobile ? "p-6" : "p-10"}>
                    <h3 className={`font-bold mb-6 hotel-text-primary ${isMobile ? "text-xl" : "text-3xl"}`}>
                      Contacto - Hotel en Salta Capital
                    </h3>
                    <p className={`text-gray-700 mb-6 leading-relaxed ${isMobile ? "text-base" : "text-lg"}`}>
                      Contacta el mejor <strong>hotel en Salta</strong> para reservar tu habitación. Ofrecemos atención
                      personalizada y tarifas especiales para estadías prolongadas.
                    </p>
                    <div className={isMobile ? "space-y-4" : "space-y-6"}>
                      <ScrollAnimation animation="slide-bottom" delay={shouldReduceAnimations ? 0 : 100}>
                        <div
                          className={`flex items-center gap-4 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow touch-target ${
                            isMobile ? "p-4" : "p-5"
                          }`}
                        >
                          <MapPin className={`text-red-600 flex-shrink-0 ${isMobile ? "h-6 w-6" : "h-7 w-7"}`} />
                          <div>
                            <span className={`text-gray-800 font-medium ${isMobile ? "text-base" : "text-lg"}`}>
                              Calle Córdoba 758 - Salta Capital - Argentina
                            </span>
                            <p className="text-sm text-gray-600">Centro histórico de Salta</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation animation="slide-bottom" delay={shouldReduceAnimations ? 0 : 200}>
                        <div
                          className={`flex items-center gap-4 rounded-xl bg-green-50 border border-green-200 hover:shadow-lg transition-shadow touch-target ${
                            isMobile ? "p-4" : "p-5"
                          }`}
                        >
                          <Phone className={`text-green-600 flex-shrink-0 ${isMobile ? "h-6 w-6" : "h-7 w-7"}`} />
                          <div>
                            <a
                              href="https://wa.me/543875505939"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`text-green-800 font-medium hover:text-green-600 transition-colors ${
                                isMobile ? "text-base" : "text-lg"
                              }`}
                            >
                              +54 387 550-5939 (WhatsApp)
                            </a>
                            <p className="text-sm text-green-600">Reservas y consultas 24hs</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation animation="slide-bottom" delay={shouldReduceAnimations ? 0 : 300}>
                        <div
                          className={`flex items-center gap-4 rounded-xl bg-blue-50 border border-blue-200 hover:shadow-lg transition-shadow touch-target ${
                            isMobile ? "p-4" : "p-5"
                          }`}
                        >
                          <Mail className={`text-blue-600 flex-shrink-0 ${isMobile ? "h-6 w-6" : "h-7 w-7"}`} />
                          <div>
                            <a
                              href="mailto:hotelcasadeemaus@gmail.com"
                              className={`text-blue-800 font-medium hover:text-blue-600 transition-colors ${
                                isMobile ? "text-base" : "text-lg"
                              }`}
                            >
                              hotelcasadeemaus@gmail.com
                            </a>
                            <p className="text-sm text-blue-600">Email para reservas</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation animation="slide-bottom" delay={shouldReduceAnimations ? 0 : 400}>
                        <div
                          className={`flex items-center gap-4 rounded-xl bg-amber-50 border border-amber-200 hover:shadow-lg transition-shadow touch-target ${
                            isMobile ? "p-4" : "p-5"
                          }`}
                        >
                          <Clock className={`text-amber-600 flex-shrink-0 ${isMobile ? "h-6 w-6" : "h-7 w-7"}`} />
                          <div>
                            <span className={`text-amber-800 font-medium ${isMobile ? "text-base" : "text-lg"}`}>
                              Check-in: 14:00 | Check-out: 12:00
                            </span>
                            <p className="text-sm text-amber-600">Horarios flexibles disponibles</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                    </div>

                    <ScrollAnimation animation="fade-up" delay={shouldReduceAnimations ? 0 : 500}>
                      <div className={`pt-6 border-t border-gray-200 ${isMobile ? "mt-6" : "mt-10"}`}>
                        <h4 className={`font-bold mb-4 hotel-text-secondary ${isMobile ? "text-lg" : "text-xl"}`}>
                          Síguenos en redes sociales
                        </h4>
                        <div className={`flex ${isMobile ? "flex-col space-y-3" : "gap-4"}`}>
                          <ScrollAnimation animation="scale" delay={shouldReduceAnimations ? 0 : 100}>
                            <a
                              href="https://wa.me/543875505939"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-200 shadow-lg font-medium touch-button ${
                                isMobile ? "px-4 py-3 justify-center" : "px-6 py-4 hover:scale-105"
                              }`}
                            >
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                              </svg>
                              WhatsApp
                            </a>
                          </ScrollAnimation>

                          <ScrollAnimation animation="scale" delay={shouldReduceAnimations ? 0 : 200}>
                            <a
                              href="https://instagram.com/hotelemaus_"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg font-medium touch-button ${
                                isMobile ? "px-4 py-3 justify-center" : "px-6 py-4 hover:scale-105"
                              }`}
                            >
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                              </svg>
                              Instagram
                            </a>
                          </ScrollAnimation>

                          <ScrollAnimation animation="scale" delay={shouldReduceAnimations ? 0 : 300}>
                            <a
                              href="https://facebook.com/hotel.emaus"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg font-medium touch-button ${
                                isMobile ? "px-4 py-3 justify-center" : "px-6 py-4 hover:scale-105"
                              }`}
                            >
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                              </svg>
                              Facebook
                            </a>
                          </ScrollAnimation>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>

            {/* Reservation Form */}
            <div id="reservas">
              <ScrollAnimation animation="fade-right">
                <ReservationForm />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="whatsapp-float">
        <WhatsAppFloat />
      </div>

      {/* Footer */}
      <ScrollAnimation animation="fade-up">
        <footer className="content-section bg-gradient-to-r from-gray-950 to-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-3 ${isMobile ? "gap-8" : "gap-12"}`}>
              <ScrollAnimation animation="fade-left" delay={shouldReduceAnimations ? 0 : 100}>
                <div>
                  <h3 className={`font-bold mb-6 text-red-400 ${isMobile ? "text-2xl" : "text-3xl"}`}>
                    Hotel Casa de Emaús
                  </h3>
                  <p className={`text-gray-300 mb-4 leading-relaxed ${isMobile ? "text-base" : "text-lg"}`}>
                    El mejor <strong>hotel en Salta capital</strong> - Tu hogar lejos de casa en el corazón de Salta
                  </p>
                  <p className="text-gray-400 text-sm mb-8">
                    Habitaciones baratas • Alquiler temporario • Centro de Salta • WiFi gratis • Desayuno incluido
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="https://wa.me/543875505939"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors transform hover:scale-110 touch-target"
                      aria-label="WhatsApp Hotel Casa de Emaús"
                    >
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/hotelemaus_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors transform hover:scale-110 touch-target"
                      aria-label="Instagram Hotel Casa de Emaús"
                    >
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/hotel.emaus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors transform hover:scale-110 touch-target"
                      aria-label="Facebook Hotel Casa de Emaús"
                    >
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={shouldReduceAnimations ? 0 : 200}>
                <div>
                  <h4 className={`font-semibold mb-6 text-amber-400 ${isMobile ? "text-xl" : "text-2xl"}`}>
                    Contacto Hotel Salta
                  </h4>
                  <div className={`space-y-4 text-gray-300 ${isMobile ? "text-base" : "text-lg"}`}>
                    <p className="flex items-center gap-3">
                      <span>📍</span> Calle Córdoba 758
                    </p>
                    <p className="ml-8">Salta Capital - Argentina</p>
                    <p className="flex items-center gap-3">
                      <span>📞</span> +54 387 550-5939
                    </p>
                    <p className="flex items-center gap-3">
                      <span>✉️</span> hotelcasadeemaus@gmail.com
                    </p>
                    <p className="text-sm text-gray-400 mt-4">
                      <strong>Hotel en Salta capital</strong> • <strong>Habitaciones baratas</strong> •{" "}
                      <strong>Alquiler temporario</strong>
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={shouldReduceAnimations ? 0 : 300}>
                <div>
                  <h4 className={`font-semibold mb-6 text-amber-400 ${isMobile ? "text-xl" : "text-2xl"}`}>
                    Horarios y Servicios
                  </h4>
                  <div className={`space-y-4 text-gray-300 ${isMobile ? "text-base" : "text-lg"}`}>
                    <p>🕐 Check-in: 14:00 hs</p>
                    <p>🕐 Check-out: 12:00 hs</p>
                    <p>🏨 Recepción: 24 horas</p>
                    <p>🅿️ Estacionamiento gratuito</p>
                    <p>📶 WiFi gratis en todo el hotel</p>
                    <p className="text-sm text-gray-400 mt-4">
                      <strong>Hotel en Salta</strong> con todos los servicios
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fade-up" delay={shouldReduceAnimations ? 0 : 400}>
              <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                <p className={isMobile ? "text-base" : "text-lg"}>
                  © 2024 Hotel Casa de Emaús. Todos los derechos reservados.
                </p>
                <p className="text-sm mt-2">
                  Hotel en Salta Capital | Habitaciones baratas | Alquiler temporario en el centro de Salta
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </footer>
      </ScrollAnimation>
    </div>
  )
}
