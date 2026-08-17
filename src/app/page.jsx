import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Consultorios } from "@/components/pagina_principal/consultorios/Consultorios";
import { Testimonios } from "@/components/pagina_principal/testimonios/Testimonios";
import { ObrasSociales } from "@/components/pagina_principal/obras_sociales/ObrasSociales";
import { ServiciosTratamientos } from "@/components/pagina_principal/servicios_tratamientos/ServiciosTratamientos";
import { PaginaPrincipal } from "@/components/pagina_principal/PaginaPrincipal";
import "./globals.css"

export default function Home() {
  return (
    <>
      <Header />
      <PaginaPrincipal />
      <ServiciosTratamientos />
      <ObrasSociales />
      <Testimonios />
      <Consultorios />
      <Footer />
    </>
  );
}
