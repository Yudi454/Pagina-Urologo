"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { testimonios } from "./testimonios2.js";

export const Testimonios = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const intervalo = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => clearInterval(intervalo);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full py-16 px-4 bg-white scroll-mt-100 md:scroll-mt-30" id="testimonios">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#087bd1]">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mt-3 text-[#087bd1]">
            Testimonios reales de quienes confían en nosotros
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonios.map((item, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                >
                  <motion.div
                    initial={{ opacity: 0.8, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full rounded-xl border-2 border-blue-500 bg-white p-6 shadow-sm flex flex-col"
                  >
                    {/* Estrellas */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Texto */}
                    <p className="text-gray-700 text-[15px] leading-relaxed flex-1">
                      {item.texto}
                    </p>

                    {/* Nombre */}
                    <p className="mt-5 font-bold text-[#087bd1] text-lg">
                      {item.nombre}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-4 z-10 w-10 h-10 rounded-full bg-white border-2 border-blue-500 text-blue-600 text-xl font-bold shadow-md hover:bg-blue-50 transition-colors flex items-center justify-center"
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-4 z-10 w-10 h-10 rounded-full bg-white border-2 border-blue-500 text-blue-600 text-xl font-bold shadow-md hover:bg-blue-50 transition-colors flex items-center justify-center"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
