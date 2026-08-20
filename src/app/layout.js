import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://drfrancofagetti.netlify.app/"),

  title: "Dr. Franco Fagetti | Urólogo en Tucumán",

  description:
    "Dr. Franco Fagetti, urólogo en San Miguel de Tucumán. Consultas, diagnóstico y tratamiento de enfermedades urológicas. Solicite su turno.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Dr. Franco Fagetti - Urólogo",
    title: "Dr. Franco Fagetti | Urólogo en Tucumán",
    description:
      "Consultas, diagnóstico y tratamiento urológico en San Miguel de Tucumán. Solicite su turno.",
    images: [
      {
        url: "/Foto_Personal.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Franco Fagetti - Urólogo en Tucumán",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
