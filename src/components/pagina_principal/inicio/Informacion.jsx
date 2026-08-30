"use client";

import {
  faGraduationCap,
  faHospital,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Informacion = () => {
  const perfiles = [
    {
      icon: faGraduationCap,
      nombre: "Medico",
      anio: "20x",
    },
    {
      icon: faHospital,
      nombre: "Residencia",
      anio: "Hosptial X",
    },
    {
      icon: faUserGroup,
      nombre: "Congreso Internacional",
      anio: "CUA Annual Meeting · China",
    },
  ];
  return (
    <>
    <section id="informacion" className="relative flex min-h-150 md:min-h-250 w-full items-center justify-center overflow-hidden bg-[url('/fondo2.jfif')] bg-cover bg-center">
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#536F7A]/50" />

  {/* Contenido */}
  <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-20 text-white md:flex-row md:justify-center">

    {/* Video */}
    <video
      className="w-48 rounded-xl md:w-64 lg:w-72"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/video1.mp4" type="video/mp4" />
    </video>

    {/* Texto */}
    <div className="max-w-3xl md:text-left flex flex-col items-center">
      <h2 className="text-3xl text-center font-extrabold uppercase leading-tight tracking-wide md:text-4xl lg:text-5xl">
        CUIDANDO TU SALUD
        <br />
        Y BIENESTAR
      </h2>

      <p className="mt-10 text-2xl text-center font-bold drop-shadow-lg  leading-relaxed md:text-2xl lg:text-[28px]">
        Tu salud y bienestar son nuestra prioridad. Recibí atención urológica
        especializada, con un diagnóstico preciso y tratamientos personalizados
        para cuidar tu salud y mejorar tu calidad de vida. Conocé las
        especialidades y tratamientos del Dr. Franco Fagetti.
      </p>

      <a
        href="#contacto"
        className="mt-14 inline-flex md:w-[50%] justify-center border-2 border-white px-10 py-4 text-xl font-medium uppercase transition-all duration-300 hover:scale-105 hover:border-[#536F7A]/25 hover:bg-[#536F7A]/25 md:px-12 md:py-5 md:text-2xl"
      >
        SOLICITAR CONSULTA
      </a>
    </div>
  </div>
</section>
    </>
  );
};
