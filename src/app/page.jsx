import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ObrasSociales } from "@/components/pagina_principal/obras_sociales/ObrasSociales";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <ObrasSociales />
      <Footer />
    </>
  );
}
