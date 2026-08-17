"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Consultorios = () => {
  const consultorios = [
    {
      id: 1,
      nombre: "Vitalia · Torre de Salud",
      ciudad: "San Miguel de Tucumán",
      turnos: "4863769",
      imagen: "/vittalia2.jpg",
      direccion:
        "Santiago del Estero 157, T4000 San Miguel de Tucumán, Tucumán",
      // Coordenadas aproximadas (Santiago del Estero 157)
      lat: -26.8292,
      lng: -65.2038,
      mapaEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.123456789!2d-65.2038!3d-26.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f8a1d1%3A0x1234567890abcdef!2sSantiago%20del%20Estero%20157%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1710000000000",
    },
    {
      id: 2,
      nombre: "Ricardo C. Mora",
      ciudad: "Yerba Buena",
      turnos: "2601387",
      imagen: "/mora2.jpg",
      direccion: "Martín Fierro 350, T4107 Yerba Buena, Tucumán",
      lat: -26.8165,
      lng: -65.283,
      mapaEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0!2d-65.2830!3d-26.8165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjYsODE2NSwgNjUsMjgzMA!5e0!3m2!1ses!2sar!4v1710000000001",
    },
    {
      id: 3,
      nombre: "Sanatorio Integral",
      ciudad: "Yerba Buena",
      turnos: "2348770",
      imagen: "/sanatorio-integral2.jpg",
      direccion: "Salas y Valdez 105, Yerba Buena, Tucumán",
      lat: -26.812,
      lng: -65.29,
      mapaEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0!2d-65.2900!3d-26.8120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjYsODEyMCwgNjUsMjkwMA!5e0!3m2!1ses!2sar!4v1710000000002",
    },
  ];

  const [activo, setActivo] = useState(consultorios[0]);

  return (
    <section className="w-full py-5 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-10">
          Consultorios
        </h2>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {consultorios.map((item, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url("${item.imagen}")` }}
              className={`relative rounded-xl overflow-hidden before:absolute before:inset-0 before:bg-blue-600/60`}
            >
              <motion.button
                onClick={() => setActivo(item)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative z-10 h-100 w-full text-left rounded-xl p-6 md:p-8 transition-all duration-300 border-2 vittalia2.jpg
                    ${
                      activo.id === item.id
                        ? "border-blue-400 shadow-lg shadow-blue-900/40"
                        : "border-blue-600"
                    }`}
              >
                <h3 className="text-xl md:text-3xl font-bold text-white leading-tight">
                  {item.nombre}
                </h3>

                <p className="mt-3 md:text-xl md:mt-10 font-bold text-blue-100 text-sm">
                  {item.ciudad}
                </p>

                <p className="mt-1 md:text-xl md:mt-2 font-bold text-blue-100 text-sm ">
                  Turnos: {item.turnos}
                </p>

                <p className="mt-4 md:text-base md:mt-5 text-blue-50 text-sm leading-relaxed">
                  Dirección: {item.direccion}
                </p>
              </motion.button>
            </div>
          ))}
        </div>

        {/* Mapa */}
        <div className="rounded-xl overflow-hidden border-2 border-blue-600 shadow-xl bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              {/* Opción 1: Google Maps Embed (recomendado) */}
              <iframe
                title={`Mapa de ${activo.nombre}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  activo.direccion
                )}&output=embed&z=16`}
                className="w-full h-105 md:h-125 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dirección actual (opcional) */}
        <p className="mt-4 text-center text-sm">
          Mostrando ubicación de:{" "}
          <span className="font-semibold">{activo.nombre}</span>
        </p>
      </div>
    </section>
  );
};
