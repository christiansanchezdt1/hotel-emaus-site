"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Users, Phone, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ReservationForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fechaEntrada: "",
    fechaSalida: "",
    huespedes: "1",
    tipoHabitacion: "",
    comentarios: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crear mensaje para WhatsApp con los datos del formulario
    const message = `Hola! Quiero hacer una reserva en Hotel Casa de Emaús:

📝 *Datos del huésped:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}

🏨 *Detalles de la reserva:*
• Fecha de entrada: ${formData.fechaEntrada}
• Fecha de salida: ${formData.fechaSalida}
• Número de huéspedes: ${formData.huespedes}
• Tipo de habitación: ${formData.tipoHabitacion}

💬 *Comentarios adicionales:*
${formData.comentarios || "Ninguno"}

¡Espero su confirmación!'`

    const whatsappUrl = `https://wa.me/543875505939?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      fechaEntrada: "",
      fechaSalida: "",
      huespedes: "1",
      tipoHabitacion: "",
      comentarios: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto hotel-card shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl text-center flex items-center justify-center gap-2 hotel-text-primary">
          <Calendar className="h-7 w-7" />
          Reservar Habitación
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Nombre Completo
              </Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => handleChange("nombre", e.target.value)}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Teléfono
            </Label>
            <Input
              id="telefono"
              value={formData.telefono}
              onChange={(e) => handleChange("telefono", e.target.value)}
              placeholder="Tu número de teléfono"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fechaEntrada">Fecha de Entrada</Label>
              <Input
                id="fechaEntrada"
                type="date"
                value={formData.fechaEntrada}
                onChange={(e) => handleChange("fechaEntrada", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fechaSalida">Fecha de Salida</Label>
              <Input
                id="fechaSalida"
                type="date"
                value={formData.fechaSalida}
                onChange={(e) => handleChange("fechaSalida", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Número de Huéspedes
              </Label>
              <Select value={formData.huespedes} onValueChange={(value) => handleChange("huespedes", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Huésped</SelectItem>
                  <SelectItem value="2">2 Huéspedes</SelectItem>
                  <SelectItem value="3">3 Huéspedes</SelectItem>
                  <SelectItem value="4">4 Huéspedes</SelectItem>
                  <SelectItem value="5">5+ Huéspedes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tipo de Habitación</Label>
              <Select value={formData.tipoHabitacion} onValueChange={(value) => handleChange("tipoHabitacion", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una habitación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Habitación Individual - $25.000/noche</SelectItem>
                  <SelectItem value="doble">Habitación Doble - $40.000/noche</SelectItem>
                  <SelectItem value="matrimonial">Habitación Matrimonial - $45.000/noche</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comentarios">Comentarios Adicionales</Label>
            <Textarea
              id="comentarios"
              value={formData.comentarios}
              onChange={(e) => handleChange("comentarios", e.target.value)}
              placeholder="Alguna solicitud especial o comentario..."
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full hotel-button-primary text-lg py-3">
            Enviar Reserva por WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
