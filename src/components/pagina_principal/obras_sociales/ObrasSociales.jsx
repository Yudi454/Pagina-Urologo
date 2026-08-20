"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

export const ObrasSociales = () => {
  const obrasSociales = [
    {
      nombre: "Ricardo C. Mora",
      imagen: "/mora.png",
    },
    {
      nombre: "Vitalia",
      imagen: "/vitalia.jpg",
    },
    {
      nombre: "Sanatorio Integral",
      imagen: "/sanatorio_integral.jpeg",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Rotación automática
  useEffect(() => {
    if (!emblaApi) return;

    const intervalo = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(intervalo);
  }, [emblaApi]);

  return (
    <section className="w-full py-5 px-4 scroll-mt-100 md:scroll-mt-30" id="obras" >
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#087bd1]">
            Obras sociales
          </h2>

          <p className="mt-3 text-[#087bd1]">
            Trabajamos con diferentes obras sociales y entidades de salud.
          </p>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -mx-3">
            {obrasSociales.map((obra, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
              >
                <motion.div
                  initial={{ opacity: 0.7, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg border-2 border-blue-600 bg-white shadow-sm"
                >
                  {/* Imagen */}
                  <div className="h-52 w-full overflow-hidden bg-white">
                    <img
                      src={obra.imagen}
                      alt={obra.nombre}
                      className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#087bd1]">
                      {obra.nombre}
                    </h3>

                    {obra.subtitulo && (
                      <p className="mt-1 text-sm font-medium text-[#087bd1]">
                        {obra.subtitulo}
                      </p>
                    )}

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {obra.descripcion}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
