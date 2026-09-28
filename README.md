# Hotel Casa de Emaús — Sitio web

🇪🇸 [Español](#español) · 🇬🇧 [English](#english)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

🌐 **Sitio en producción / Live site:** [hotelcasadeemaus.com](https://hotelcasadeemaus.com)

---

## Español

Sitio web institucional del **Hotel Casa de Emaús**, un hotel económico en el centro de Salta Capital (Argentina). Presenta las habitaciones con sus tarifas, los servicios del hotel y un formulario de reserva que envía la solicitud directamente al WhatsApp del hotel. Está optimizado para SEO local.

### Funcionalidades

- **Habitaciones**: tarjetas con fotos, precio por noche y capacidad (individual, doble y matrimonial), con vista de detalle en un modal.
- **Reservas por WhatsApp**: formulario con nombre, email, teléfono, fechas de entrada y salida, número de huéspedes, tipo de habitación y comentarios. Arma el mensaje y abre la conversación en WhatsApp (`wa.me`), sin backend.
- **Botón flotante de WhatsApp** siempre visible para contacto rápido.
- **Slider de imágenes** y animaciones al hacer scroll (`IntersectionObserver`).
- **SEO**: metadatos Open Graph y Twitter, contenido orientado a búsquedas locales ("hotel en Salta Capital"), preguntas frecuentes, `robots.txt` y `sitemap.xml`.
- Diseño responsive y adaptado a dispositivos táctiles.

### Tecnologías

| Área | Stack |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Estilos | Tailwind CSS 3, `tailwindcss-animate` |
| UI | shadcn/ui (Radix UI), lucide-react |
| Deploy | Vercel |

### Estructura

```
app/
  layout.tsx            # metadatos SEO y layout global
  page.tsx              # página única: inicio, servicios, habitaciones, reservas, contacto
components/
  rooms-section.tsx     # habitaciones, precios y modal de detalle
  reservation-form.tsx  # formulario de reserva → WhatsApp
  image-slider.tsx      # carrusel de fotos
  seo-content.tsx       # contenido y FAQ para SEO
  whatsapp-float.tsx    # botón flotante de WhatsApp
  ui/                   # componentes shadcn/ui
hooks/                  # use-in-view, use-mobile, use-touch-device
public/                 # imágenes, robots.txt, sitemap.xml
```

### Puesta en marcha

Requisitos: Node.js 18.18 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

No necesita variables de entorno ni base de datos.

### Scripts

```bash
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run start      # servir el build
npm run lint       # ESLint
```

### Personalización

- Habitaciones, precios y capacidad: arreglo de habitaciones en `components/rooms-section.tsx`.
- Número de WhatsApp de destino: `components/reservation-form.tsx` y `components/whatsapp-float.tsx`.
- Textos SEO y metadatos: `app/layout.tsx` y `components/seo-content.tsx`.

---

## English

Website for **Hotel Casa de Emaús**, a budget hotel in downtown Salta (Argentina). It showcases the rooms with their rates and the hotel's amenities, and has a booking form that sends the request straight to the hotel's WhatsApp. It is optimized for local SEO.

### Features

- **Rooms**: cards with photos, nightly rate and capacity (single, double and queen), plus a detail modal.
- **WhatsApp booking**: form with name, email, phone, check-in and check-out dates, number of guests, room type and comments. It builds the message and opens the WhatsApp chat (`wa.me`), with no backend.
- **Floating WhatsApp button** that stays visible for quick contact.
- **Image slider** and scroll-triggered animations (`IntersectionObserver`).
- **SEO**: Open Graph and Twitter metadata, content targeting local searches, FAQ section, `robots.txt` and `sitemap.xml`.
- Responsive, touch-friendly design.

### Tech stack

| Area | Stack |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 3, `tailwindcss-animate` |
| UI | shadcn/ui (Radix UI), lucide-react |
| Deployment | Vercel |

### Getting started

Requirements: Node.js 18.18 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

No environment variables or database are required.

### Scripts

```bash
npm run dev        # development server
npm run build      # production build
npm run start      # serve the build
npm run lint       # ESLint
```

### Customization

- Rooms, rates and capacity: the rooms array in `components/rooms-section.tsx`.
- Target WhatsApp number: `components/reservation-form.tsx` and `components/whatsapp-float.tsx`.
- SEO copy and metadata: `app/layout.tsx` and `components/seo-content.tsx`.

---

Desarrollado por / Developed by [Christian Sánchez](https://github.com/christiansanchezdt1).
