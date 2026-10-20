import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="relative w-full flex justify-center items-center min-h-200 md:min-h-250 overflow-hidden bg-[url('https://res.cloudinary.com/dsc3e6rd4/image/upload/v1792524052/fondo1.jpg')] bg-cover bg-[position:76%_center] bg-cover md:bg-center before:absolute before:inset-0 before:bg-[#B3E5FC]/50 before:content-['']"
      aria-label="Presentación del Dr. Franco Fagetti"
    >
      {/* leve velo para que se lea el texto */}

      <div className="relative z-10 flex h-full min-h-105 md:min-h-140 lg:min-h-160 flex-col items-center justify-center px-4 text-center">
        {/* Logo */}
        <Image
          src="https://res.cloudinary.com/dsc3e6rd4/image/upload/v1792526183/logo_oscuro.png"
          alt="Logo del Dr. Franco Fagetti"
          width={500}
          height={500}
          priority
          className="w-2xs h-auto md:w-xl md:mb-20 object-contain"
        />

        <h1 className=" mt-8  text-3xl font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-[4px_4px_0_#508ead] md:text-6xl">
          AYUDÁNDOTE A RECUPERAR
          <br />
          TU BIENESTAR Y CONFIANZA
        </h1>
      </div>
    </section>
  );
};
