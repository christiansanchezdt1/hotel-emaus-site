"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, ChevronLeft, ChevronRight, Eye } from "lucide-react"

interface Room {
  id: string
  name: string
  description: string
  price: number
  capacity: number
  images: string[]
  amenities: string[]
  features: string[]
}

const rooms: Room[] = [
  {
    id: "individual",
    name: "Habitación Individual",
    description: "Perfecta para viajeros solos que buscan comodidad y tranquilidad.",
    price: 25,
    capacity: 1,
    images: ["/images/habitacion-simple-1.jpg"],
    amenities: ["WiFi Gratuito", "Ventilador de Techo", "TV", "Baño Privado"],
    features: ["Cama individual", "Mesa de noche", "Armario", "Calefacción"],
  },
  {
    id: "doble",
    name: "Habitación Doble",
    description: "Ideal para amigos o compañeros de viaje con dos camas individuales.",
    price: 40,
    capacity: 2,
    images: ["/images/habitacion-doble-1.jpg", "/images/habitacion-doble-2.jpg", "/images/habitacion-doble-3.jpg"],
    amenities: ["WiFi Gratuito", "Ventilador de Techo", "TV", "Baño Privado"],
    features: ["Dos camas individuales", "Armario empotrado", "Mesas de noche", "Calefacción"],
  },
  {
    id: "matrimonial",
    name: "Habitación Matrimonial",
    description: "Romántica habitación con cama matrimonial para parejas.",
    price: 45,
    capacity: 2,
    images: ["/images/habitacion-doble-matrimonial-1.jpg"],
    amenities: ["WiFi Gratuito", "Ventilador de Techo", "TV", "Baño Privado"],
    features: ["Cama matrimonial", "Decoración especial", "Mesa de noche", "Calefacción"],
  },
]

export function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (selectedRoom && selectedRoom.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedRoom.images.length)
    }
  }

  const prevImage = () => {
    if (selectedRoom && selectedRoom.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length)
    }
  }

  const handleRoomReservation = (room: Room) => {
    const message = `¡Hola! Quiero reservar una habitación en Hotel Casa de Emaús:

🏨 *Habitación solicitada:*
• ${room.name}
• Precio: $${room.price} por noche
• Capacidad: ${room.capacity} ${room.capacity === 1 ? "huésped" : "huéspedes"}

📋 *Descripción:*
${room.description}

✨ *Servicios incluidos:*
${room.amenities.map((amenity) => `• ${amenity}`).join("\n")}

🛏️ *Características:*
${room.features.map((feature) => `• ${feature}`).join("\n")}

📅 Por favor, ayúdenme con la disponibilidad y el proceso de reserva.

¡Gracias!`

    const whatsappUrl = `https://wa.me/543875505939?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent mb-4">
            Nuestras Habitaciones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras cómodas habitaciones diseñadas para brindarte el mejor descanso durante tu estadía.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="hotel-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={room.images[0] || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                <Badge className="absolute top-2 right-2 bg-red-600 text-white shadow-lg">${room.price}/noche</Badge>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {room.name}
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    {room.capacity}
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">{room.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Servicios incluidos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Características:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedRoom(room)
                      setCurrentImageIndex(0)
                    }}
                    className="flex-1 border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Ver más
                  </Button>
                  <Button size="sm" className="flex-1 hotel-button-primary" onClick={() => handleRoomReservation(room)}>
                    Reservar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Galería de servicios adicionales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image src="/images/pasillo-hotel.jpg" alt="Pasillos del hotel" fill className="object-cover" />
              </div>
              <h3 className="font-semibold mb-2">Pasillos Iluminados</h3>
              <p className="text-sm text-gray-600">Hermosos pasillos con techo de cristal y decoración natural</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image src="/images/bano-1.jpg" alt="Baños completos" fill className="object-cover" />
              </div>
              <h3 className="font-semibold mb-2">Baños Completos</h3>
              <p className="text-sm text-gray-600">Baños privados con ducha, inodoro, bidé y todas las comodidades</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image src="/images/calefaccion.jpg" alt="Sistema de calefacción" fill className="object-cover" />
              </div>
              <h3 className="font-semibold mb-2">Climatización</h3>
              <p className="text-sm text-gray-600">Sistema de calefacción y ventilación para tu comodidad</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modal para ver más imágenes */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedRoom.name}</h3>
                <Button variant="outline" onClick={() => setSelectedRoom(null)} className="text-gray-500">
                  ✕
                </Button>
              </div>

              <div className="relative h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedRoom.images[currentImageIndex] || "/placeholder.svg"}
                  alt={selectedRoom.name}
                  fill
                  className="object-cover"
                />

                {selectedRoom.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Descripción</h4>
                  <p className="text-gray-600 mb-4">{selectedRoom.description}</p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-red-600" />
                      <span>Hasta {selectedRoom.capacity} huéspedes</span>
                    </div>
                    <div className="text-2xl font-bold text-red-600">${selectedRoom.price}/noche</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Servicios y Características</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium mb-2">Servicios incluidos:</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedRoom.amenities.map((amenity, index) => (
                          <Badge key={index} variant="secondary">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium mb-2">Características:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {selectedRoom.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  onClick={() => handleRoomReservation(selectedRoom)}
                >
                  Reservar esta habitación
                </Button>
                <Button variant="outline" onClick={() => setSelectedRoom(null)}>
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
