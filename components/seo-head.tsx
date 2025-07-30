"use client"

import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export function SEOHead({
  title = "Hotel Casa de Emaús - Hotel en Salta Capital | Habitaciones Baratas en el Centro",
  description = "Hotel Casa de Emaús en Salta Capital. Habitaciones baratas, alquiler temporario en el centro de Salta. Motel cómodo con WiFi, desayuno y estacionamiento. Reservá ahora!",
  keywords = "hotel en salta capital, hotel en salta, motel en salta, habitaciones baratas salta capital, alquiler temporario centro salta, rentar habitaciones salta capital, hospedaje salta, hotel económico salta, alojamiento salta centro, hotel barato salta",
  image = "/images/fachada.jpg",
  url = "https://hotelcasadeemaus.com",
  type = "website",
}: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Hotel Casa de Emaús",
    description:
      "Hotel económico en el centro de Salta Capital con habitaciones cómodas, WiFi gratuito y desayuno incluido.",
    image: [`${url}/images/fachada.jpg`, `${url}/images/recepcion.jpg`, `${url}/images/habitacion-doble-1.jpg`],
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
    url: url,
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
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hoteles en Argentina",
        item: "https://hotelcasadeemaus.com/hoteles-argentina",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hoteles en Salta",
        item: "https://hotelcasadeemaus.com/hoteles-salta",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hotel Casa de Emaús",
        item: url,
      },
    ],
  }

  return (
    <Head>
      {/* Meta tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Hotel Casa de Emaús" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es-AR" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Hotel Casa de Emaús" />
      <meta property="og:locale" content="es_AR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />

      {/* Datos estructurados */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Geo tags */}
      <meta name="geo.region" content="AR-A" />
      <meta name="geo.placename" content="Salta Capital" />
      <meta name="geo.position" content="-24.7859;-65.4117" />
      <meta name="ICBM" content="-24.7859, -65.4117" />

      {/* Hreflang para idiomas */}
      <link rel="alternate" hrefLang="es-ar" href={url} />
      <link rel="alternate" hrefLang="es" href={url} />
    </Head>
  )
}
