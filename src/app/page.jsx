import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Consultorios } from "@/components/pagina_principal/consultorios/Consultorios";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Consultorios />
      <Footer />
    </>
  );
}
