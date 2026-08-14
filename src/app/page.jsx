import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ObrasSociales } from "@/components/pagina_principal/obras_sociales/ObrasSociales";
import Image from "next/image";
import { ServiciosTratamientos } from "@/components/pagina_principal/servicios_tratamientos/ServiciosTratamientos";
import { PaginaPrincipal } from "@/components/pagina_principal/PaginaPrincipal";

export default function Home() {
  return (
    <>
      <Header />
      <ObrasSociales />
      <ServiciosTratamientos />
      <PaginaPrincipal />
      <Footer />
    </>
  );
}
