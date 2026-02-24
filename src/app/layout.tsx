import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const BASE_URL = "https://masterevent.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Master Event | Sonido, DJ y Luces para Eventos en Mendoza",
    template: "%s | Master Event Mendoza",
  },
  description:
    "Master Event: producción técnica integral en Mendoza. Alquiler de equipos, sonido, luces DMX y pantalla LED para eventos, casamientos, cumpleaños, bodegas y corporativos.",

  keywords: [
    // Geo
    "mendoza",
    "mendoza argentina",
    "gran mendoza",
    // Servicio principal
    "alquiler de equipos de sonido mendoza",
    "producción de eventos mendoza",
    "sonido para eventos mendoza",
    "dj mendoza",
    "dj para eventos mendoza",
    // Equipos
    "pioneer dj mendoza",
    "cdj 3000 mendoza",
    "djm v10",
    "wharfedale pro mendoza",
    "sistema de sonido profesional",
    "pantalla led alquiler mendoza",
    // Eventos
    "eventos mendoza",
    "casamientos mendoza",
    "cumpleaños mendoza",
    "eventos corporativos mendoza",
    "bodegas mendoza eventos",
    "fiestas mendoza",
    "pubs mendoza",
    "bares mendoza",
    // Técnica
    "iluminacion dj mendoza",
    "luces para eventos mendoza",
    "tecnica de sonido mendoza",
    "alquiler de luces mendoza",
    "equipos de musica mendoza",
    "musica en vivo mendoza",
    "tecnico de sonido mendoza",
  ],

  authors: [{ name: "Master Event", url: BASE_URL }],
  creator: "Master Event",
  publisher: "Master Event",

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BASE_URL,
    siteName: "Master Event",
    title: "Master Event | Sonido, DJ y Luces para Eventos en Mendoza",
    description:
      "Alquiler de equipos Pioneer DJ, sonido Wharfedale Pro, iluminación DMX y pantalla LED. Producción técnica integral para eventos en Mendoza.",
    images: [
      {
        url: "/logo-full-resize.png",
        width: 1200,
        height: 630,
        alt: "Master Event Mendoza — Más que música, una experiencia inolvidable",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Master Event | Sonido, DJ y Luces para Eventos en Mendoza",
    description:
      "Producción técnica integral en Mendoza. Pioneer CDJ-3000, Wharfedale Pro, luces DMX y pantalla LED para tu evento.",
    images: ["/logo-full-resize.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}