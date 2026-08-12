import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Testimonios } from "@/components/pagina_principal/testimonios/Testimonios";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Testimonios />
      <Footer />
    </>
  );
}
