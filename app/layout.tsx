import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hotel Casa de Emaús - Hotel en Salta Capital | Habitaciones Baratas en el Centro",
  description:
    "Hotel Casa de Emaús en Salta Capital. Habitaciones baratas, alquiler temporario en el centro de Salta. Motel cómodo con WiFi, desayuno y estacionamiento. Reservá ahora!",
  keywords:
    "hotel en salta capital, hotel en salta, motel en salta, habitaciones baratas salta capital, alquiler temporario centro salta, rentar habitaciones salta capital, hospedaje salta, hotel económico salta, alojamiento salta centro, hotel barato salta",
  authors: [{ name: "Hotel Casa de Emaús" }],
  creator: "Hotel Casa de Emaús",
  publisher: "Hotel Casa de Emaús",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://hotelcasadeemaus.com",
    siteName: "Hotel Casa de Emaús",
    title: "Hotel Casa de Emaús - Hotel en Salta Capital | Habitaciones Baratas",
    description:
      "Hotel económico en Salta Capital con habitaciones desde $25. WiFi gratis, desayuno incluido, estacionamiento. El mejor alojamiento en el centro de Salta.",
    images: [
      {
        url: "/images/fachada.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada Hotel Casa de Emaús - Hotel en Salta Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Casa de Emaús - Hotel en Salta Capital",
    description:
      "Habitaciones baratas en Salta capital desde $25. WiFi gratis, desayuno incluido. Reservá en el mejor hotel del centro de Salta.",
    images: ["/images/fachada.jpg"],
  },
  alternates: {
    canonical: "https://hotelcasadeemaus.com",
    languages: {
      "es-AR": "https://hotelcasadeemaus.com",
      es: "https://hotelcasadeemaus.com",
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  other: {
    "geo.region": "AR-A",
    "geo.placename": "Salta Capital",
    "geo.position": "-24.7859;-65.4117",
    ICBM: "-24.7859, -65.4117",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel Casa de Emaús",
              description:
                "Hotel económico en el centro de Salta Capital con habitaciones cómodas, WiFi gratuito y desayuno incluido.",
              image: [
                "https://hotelcasadeemaus.com/images/fachada.jpg",
                "https://hotelcasadeemaus.com/images/recepcion.jpg",
                "https://hotelcasadeemaus.com/images/habitacion-doble-1.jpg",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Córdoba 758",
                addressLocality: "Salta Capital",
                addressRegion: "Salta",
                postalCode: "4400",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -24.7859,
                longitude: -65.4117,
              },
              telephone: "+54-387-550-5939",
              email: "hotelcasadeemaus@gmail.com",
              url: "https://hotelcasadeemaus.com",
              priceRange: "$25-$45",
              starRating: {
                "@type": "Rating",
                ratingValue: "4.5",
                bestRating: "5",
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "WiFi gratuito",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Estacionamiento",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Desayuno incluido",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Recepción 24 horas",
                  value: true,
                },
              ],
              checkinTime: "14:00",
              checkoutTime: "12:00",
              numberOfRooms: "20",
              paymentAccepted: ["Cash", "Credit Card"],
              currenciesAccepted: "ARS",
              availableLanguage: ["Spanish"],
              smokingAllowed: false,
              petsAllowed: false,
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
