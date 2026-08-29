import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Consultorios } from "@/components/pagina_principal/consultorios/Consultorios";
import { Testimonios } from "@/components/pagina_principal/testimonios/Testimonios";
import { ObrasSociales } from "@/components/pagina_principal/obras_sociales/ObrasSociales";
import { ServiciosTratamientos } from "@/components/pagina_principal/servicios_tratamientos/ServiciosTratamientos";
import { PaginaPrincipal } from "@/components/pagina_principal/PaginaPrincipal";
import "./globals.css";
import { BotonVolver } from "@/components/boton_volver/BotonVolver";
import { BotonWhatsapp } from "@/components/boton_whatsapp/BotonWhatsapp";
import { Contacto } from "@/components/pagina_principal/contacto/Contacto";
import SmoothScroll from "@/hooks/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <Header />
        <PaginaPrincipal />
        <Footer />
      </SmoothScroll>
      <BotonWhatsapp />
      <BotonVolver />
    </>
  );
}
