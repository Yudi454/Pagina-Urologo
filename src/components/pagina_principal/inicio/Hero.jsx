import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-120 md:min-h-250 overflow-hidden bg-[url('/fondo1.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-[#B3E5FC]/50 before:content-['']">
      {/* leve velo para que se lea el texto */}

      <div className="relative z-10 flex h-full min-h-105 md:min-h-140 lg:min-h-160 flex-col items-center justify-center px-4 text-center">
        {/* Logo */}
        <Image
          src="/logo_oscuro.png"
          alt="Paisaje de montañas"
          width={500}
          height={500}
          priority
          className="w-32 h-auto md:w-40 lg:w-100 object-contain"
        />

        <h2 className="mt-8 max-w-3xl text-xl font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-[4px_4px_0_#508ead] md:mt-10 md:text-3xl lg:text-4xl">
          AYUDÁNDOTE A RECUPERAR
          <br />
          TU BIENESTAR Y CONFIANZA
        </h2>
      </div>
    </section>
  );
};
