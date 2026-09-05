"use client";

import { useLenis } from "lenis/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const consultorios = [
  {
    nombre: "Ricardo C. Mora",
    direccion: "Martín Fierro 350, T4107 Yerba Buena, Tucumán",
    imagen: "/mora.png",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6639398105776!2d-65.28600829999999!3d-26.8188272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422432b4a0f2965%3A0xbbe58a39f7b4216e!2sMart%C3%ADn%20Fierro%20350%2C%20T4107%20Yerba%20Buena%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1788567057339!5m2!1ses-419!2sar",
  },
  {
    nombre: "Vitalia",
    direccion: "Santiago del Estero 157, T4000 San Miguel de Tucumán, Tucumán",
    imagen: "/vitalia.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.265191132028!2d-65.21254074752427!3d-26.820128137258905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1942e5cc83%3A0x553277d6e497751f!2sSantiago%20del%20Estero%20157%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1788567347503!5m2!1ses-419!2sar",
  },
  {
    nombre: "Sanatorio Integral",
    direccion: "Av. Juan B. Justo 1592, T4000 San Miguel de Tucumán, Tucumán",
    imagen: "/sanatorio_integral.jpeg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.915942645224!2d-65.19466842476237!3d-26.810804988953148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c279f062e25%3A0x2ee8c690d6129afe!2sAv.%20Juan%20B.%20Justo%201592%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1788567436835!5m2!1ses-419!2sar",
  },
];

export const ConsultoriosMain = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    }
    // [
    //   Autoplay({
    //     delay: 3000, // 3 segundos
    //     stopOnInteraction: false,
    //   }),
    // ]
  );

  const anterior = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const siguiente = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const [mapa, setMapa] = useState(consultorios[0].mapa);
  const [activarMapa, setActivarMapa] = useState(false);

  const lenis = useLenis();

  const handleConsultorio = (mapa) => {
    setMapa(mapa);

    const mapaElement = document.getElementById("mapa");

    if (mapaElement) {
      lenis.scrollTo(mapaElement, {
        offset: -100,
        duration: 1.2,
      });
    }
  };

  return (
    <div className=" mt-25 mx-auto w-full max-w-[90%]">
      {/* Carrusel */}
      <h1 className="text-center text-4xl md:text-4xl font-extrabold text-[#508EAD] tracking-tight mb-15">
        CONSULTORIOS
      </h1>
      <div className="relative">
        <div ref={emblaRef} className=" overflow-hidden px-2 py-2">
          <div className="flex">
            {consultorios.map((c, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center min-h-125 rounded-2xl min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] px-3 shadow-lg"
              >
                {/* Imagen */}
                <Image
                  src={c.imagen}
                  alt="Dr. Franco Fagetti"
                  loading="eager"
                  width={300}
                  height={300}
                  className=" border-4 border-white object-cover"
                />

                {/* Nombre */}
                <h3 className="mt-4 text-2xl md:text-2xl font-bold uppercase text-[#508EAD]">
                  {c.nombre}
                </h3>

                {/* Dirección */}
                <p className="mt-3 md:mt-2 mb-5 md:mb-3 min-h-12 font-semibold text-center text-x">
                  {c.direccion}
                </p>

                {/* Botón */}
                <button
                  onClick={() => {
                    handleConsultorio(c.mapa);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12  items-center justify-center rounded-md border-2 border-[#3A8DBD] bg-[#E8E8E8] px-10 text-sm md:text-x font-bold uppercase text-[#3A8DBD] transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                  Ver ubicación en mapa
                </button>
              </div>
            ))}
          </div>

          {/* Flecha izquierda */}
          <button
            onClick={anterior}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-[#508EAD] px-4 py-2 shadow-md"
          >
            ←
          </button>

          {/* Flecha derecha */}
          <button
            onClick={siguiente}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-[#508EAD] px-4 py-2 shadow-md"
          >
            →
          </button>
        </div>
      </div>

      <div
        id="mapa"
        className="relative mt-10 w-full overflow-hidden rounded-2xl"
        onMouseLeave={() => setActivarMapa(false)}
      >
        {!activarMapa && (
          <button
            onClick={() => setActivarMapa(true)}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 text-white font-semibold"
          >
            Click para interactuar con el mapa
          </button>
        )}

        <iframe
          src={mapa}
          width="100%"
          height="450"
          className={
            activarMapa ? "pointer-events-auto" : "pointer-events-none"
          }
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
