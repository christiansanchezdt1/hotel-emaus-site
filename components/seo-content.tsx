"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"
import { MapPin, Star, Wifi, Car, Coffee, Shield, Clock, Phone } from "lucide-react"

export function SEOContent() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        {/* Contenido principal SEO */}
        <ScrollAnimation animation="fade-up">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">Hotel en Salta Capital - Casa de Emaús</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Descubre el mejor <strong>hotel en Salta capital</strong> con habitaciones baratas y cómodas en el centro
              de la ciudad. Nuestro <strong>hotel en Salta</strong> ofrece alojamiento económico con todas las
              comodidades que necesitas.
            </p>
          </div>
        </ScrollAnimation>

        {/* Sección de palabras clave principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ScrollAnimation animation="fade-left" delay={100}>
            <Card className="hotel-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-8 w-8 text-red-600" />
                  <h2 className="text-xl font-bold text-red-700">Ubicación Céntrica</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro <strong>hotel en el centro de Salta</strong> está ubicado en Calle Córdoba 758, perfecto para
                  quienes buscan <strong>alquiler temporario en el centro de Salta</strong>
                  con fácil acceso a todos los atractivos turísticos.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <Card className="hotel-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-8 w-8 text-amber-500" />
                  <h2 className="text-xl font-bold text-red-700">Habitaciones Baratas</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ofrecemos las mejores <strong>habitaciones baratas en Salta capital</strong> desde $25 por noche.
                  Ideal para quienes buscan <strong>rentar habitaciones en Salta capital</strong> a precios accesibles
                  sin sacrificar comodidad.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-right" delay={300}>
            <Card className="hotel-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                  <h2 className="text-xl font-bold text-red-700">Motel Seguro</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Como <strong>motel en Salta</strong> de confianza, garantizamos seguridad 24 horas, limpieza impecable
                  y atención personalizada. El mejor <strong>hospedaje en Salta</strong>
                  para viajeros de negocios y turismo.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        {/* Sección de servicios con keywords */}
        <ScrollAnimation animation="fade-up">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
              ¿Por qué elegir nuestro Hotel en Salta Capital?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-red-600 mb-4">Alojamiento Económico en Salta</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nuestro <strong>hotel económico en Salta</strong> es la opción perfecta para quienes buscan
                  <strong>alojamiento barato en Salta centro</strong>. Con más de 10 años de experiencia, somos
                  reconocidos como uno de los mejores <strong>hoteles baratos en Salta capital</strong>.
                </p>

                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-green-600" />
                    <span>
                      <strong>WiFi gratuito</strong> en todas las habitaciones
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Estacionamiento gratuito</strong> para huéspedes
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-orange-600" />
                    <span>
                      <strong>Desayuno incluido</strong> en todas las tarifas
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Recepción 24 horas</strong> para tu comodidad
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-red-600 mb-4">Habitaciones para Todos</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Disponemos de diferentes tipos de habitaciones para <strong>alquiler temporario en Salta</strong>:
                </p>

                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Habitación Individual - $25/noche</h4>
                    <p className="text-sm text-amber-700">
                      Perfecta para viajeros solos que buscan <strong>habitaciones baratas en Salta capital</strong>
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Habitación Doble - $40/noche</h4>
                    <p className="text-sm text-blue-700">
                      Ideal para amigos o compañeros de trabajo en <strong>alquiler temporario centro Salta</strong>
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-pink-800 mb-2">Habitación Matrimonial - $45/noche</h4>
                    <p className="text-sm text-pink-700">
                      Romántica habitación para parejas en nuestro <strong>motel en Salta</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Sección de ubicación y contacto */}
        <ScrollAnimation animation="fade-up">
          <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
              Contacta el Mejor Hotel en Salta Capital
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-red-600 mb-4">Ubicación Estratégica</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nuestro <strong>hotel en Salta capital</strong> está ubicado en el corazón de la ciudad, en Calle
                  Córdoba 758. Esta ubicación céntrica hace que seamos la mejor opción para
                  <strong>alquiler temporario en el centro de Salta</strong>.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">A 2 cuadras de la Plaza 9 de Julio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Cerca de restaurantes y comercios</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Fácil acceso al transporte público</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-red-600 mb-4">Reserva Ahora</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Contactanos para reservar tu habitación en el mejor <strong>hotel barato en Salta</strong>. Ofrecemos
                  tarifas especiales para estadías prolongadas y grupos.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <a href="https://wa.me/543875505939" className="text-green-700 font-semibold hover:text-green-600">
                      +54 387 550-5939 (WhatsApp)
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">📧</span>
                    <a
                      href="mailto:hotelcasadeemaus@gmail.com"
                      className="text-blue-700 font-semibold hover:text-blue-600"
                    >
                      hotelcasadeemaus@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Atención 24 horas - Todos los días</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* FAQ Section para SEO */}
        <ScrollAnimation animation="fade-up">
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
              Preguntas Frecuentes - Hotel en Salta Capital
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hotel-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-600 mb-3">¿Cuáles son las tarifas del hotel en Salta?</h3>
                  <p className="text-gray-700">
                    Nuestras <strong>habitaciones baratas en Salta capital</strong> van desde $25 por noche para
                    habitaciones individuales, $40 para dobles y $45 para matrimoniales. Somos el{" "}
                    <strong>hotel más económico en Salta centro</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="hotel-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-600 mb-3">¿Qué incluye el alquiler temporario?</h3>
                  <p className="text-gray-700">
                    Nuestro <strong>alquiler temporario en el centro de Salta</strong> incluye WiFi gratuito, desayuno,
                    estacionamiento, limpieza diaria y atención 24 horas en recepción.
                  </p>
                </CardContent>
              </Card>

              <Card className="hotel-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-600 mb-3">¿Dónde está ubicado el hotel?</h3>
                  <p className="text-gray-700">
                    Nuestro <strong>hotel en Salta capital</strong> está en Calle Córdoba 758, en pleno centro
                    histórico, a pocas cuadras de la Plaza 9 de Julio y los principales atractivos turísticos.
                  </p>
                </CardContent>
              </Card>

              <Card className="hotel-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-600 mb-3">¿Cómo hacer una reserva?</h3>
                  <p className="text-gray-700">
                    Para <strong>rentar habitaciones en Salta capital</strong> puedes contactarnos por WhatsApp al +54
                    387 550-5939 o por email. Confirmamos tu reserva al instante.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
