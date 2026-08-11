import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ServiciosTratamientos } from "@/components/pagina_principal/servicios_tratamientos/ServiciosTratamientos";

export default function Home() {
  return (
    <>
      <Header />
      <ServiciosTratamientos />
      <Footer />
    </>
  );
}
