// components/ObrasSociales.tsx
"use client";

import Image from "next/image";

const obras = [
  {
    nombre: "Ricardo C. Mora",
    subtitulo: "Servicios Sociales",
    image: "/mora.png",
  },
  {
    nombre: "Vitalia",
    subtitulo: "Torre de Salud",
    image: "/vitalia.jpg",
  },
  {
    nombre: "Sanatorio Integral",
    subtitulo: "Atención Completa",
    image: "/sanatorio_integral.jpeg",
  },
];

export const ObrasSocialesMain = () => {
  return (
    <section className="min-h-screen">
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-extrabold text-[#508EAD] tracking-tight mb-4">
            OBRAS SOCIALES
          </h1>

          <p className="space-y-6 text-xl leading-relaxed md:text-2xl">
            Trabajamos con las principales obras sociales y prepagas para que
            puedas acceder a una atención de calidad sin preocupaciones.
          </p>
        </div>

        {/* Grid de obras */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {obras.map((obra, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                {/* Logo */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={obra.image}
                    alt="Dr. Franco Fagetti"
                    width={300}
                    height={300}
                    className="border-4 border-white object-cover"
                  />
                </div>

                {/* Nombre */}
                <h3 className="text-xl font-bold uppercase text-[#508EAD] mb-1">
                  {obra.nombre}
                </h3>
                <p className="text-x font-semibold mb-6">{obra.subtitulo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="mt-16 text-center">
          <p className="text-x mb-6">
            ¿No encontrás tu obra social? Consultanos, podemos ayudarte.
          </p>
          <button className="inline-flex h-16 min-w-80 items-center justify-center rounded-md border-2 border-[#3A8DBD] bg-white px-10 text-2xl font-bold uppercase text-[#3A8DBD] transition-all duration-300 hover:scale-105 hover:bg-white">
            Consultar cobertura
          </button>
        </div>
      </main>
    </section>
  );
};
