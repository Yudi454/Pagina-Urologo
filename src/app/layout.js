import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { BotonVolver } from "@/components/boton_volver/BotonVolver";
import { BotonWhatsapp } from "@/components/boton_whatsapp/BotonWhatsapp";
import UseLenis from "@/hooks/UseLenis";

import { Lora, Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://drfrancofagetti.com.ar/"),

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
        url: "https://res.cloudinary.com/dsc3e6rd4/image/upload/v1792599016/Foto_Personal.webp",
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
      className={`${nunito.variable} ${lora.variable} h-full antialiased`}
    >
      <body>
        <UseLenis>
          <Header />
          {children}
          <Footer />
          <BotonVolver />
          <BotonWhatsapp />
        </UseLenis>
      </body>
    </html>
  );
}
