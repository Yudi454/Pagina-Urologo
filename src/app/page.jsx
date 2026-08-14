import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Testimonios } from "@/components/pagina_principal/testimonios/Testimonios";
import { ObrasSociales } from "@/components/pagina_principal/obras_sociales/ObrasSociales";
import Image from "next/image";
import { ServiciosTratamientos } from "@/components/pagina_principal/servicios_tratamientos/ServiciosTratamientos";
import { PaginaPrincipal } from "@/components/pagina_principal/PaginaPrincipal";

export default function Home() {
  return (
    <>
      <Header />
      <Testimonios />
      <ObrasSociales />
      <ServiciosTratamientos />
      <PaginaPrincipal />
      <Footer />
    </>
  );
}
