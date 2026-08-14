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
      <section>
        <div className="mx-auto flex max-w-[1700px] flex-col gap-12 px-6 mt-10 md:flex-row md:items-start lg:px-16">
          {/* SOBRE EL DR. FRANCO FAGETTI */}
          <div className="flex w-full flex-col text-center md:w-1/2">
            <h2 className="text-4xl font-bold text-[#087bd1] xl:text-5xl">
              Sobre el Dr. Franco Fagetti
            </h2>

            <div className="mt-12 text-xl font-semibold leading-[1.65] text-[#087bd1] xl:text-2xl">
              <p>
                El Dr. Franco Fagetti es especialista en Urología con amplia
                experiencia clínica en el diagnóstico y tratamiento de
                enfermedades del tracto urinario y del sistema reproductor
                masculino. Se distingue por su atención personalizada y por
                mantener una constante actualización en las últimas técnicas y
                avances de la especialidad.
              </p>

              <p className="mt-12">
                Ha completado su formación en centros de referencia nacionales e
                internacionales, lo que le permite ofrecer a sus pacientes un
                abordaje integral y actualizado. Actualmente continúa
                perfeccionando su práctica a través de capacitaciones y
                participación activa en congresos científicos.
              </p>
            </div>
          </div>

          {/* PERFIL PROFESIONAL */}
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <h2 className="text-center text-4xl font-bold text-[#087bd1] xl:text-5xl">
              Perfil Profesional
            </h2>

            {/* PERFILES */}
            {perfiles.map((perfil, i) => (
              <div
                key={i}
                className="flex items-center gap-6 rounded-2xl border-4 border-[#087bd1] bg-white px-5 py-3 md:px-8 md:py-4 shadow-lg"
              >
                <FontAwesomeIcon
                  icon={perfil.icon}
                  className="size-10! md:size-15!"
                  style={{ color: "rgb(12, 113, 195)" }}
                />
                <div>
                  <h3 className="text-3xl font-semibold text-[#087bd1] xl:text-4xl">
                    {perfil.nombre}
                  </h3>
                  <p className="mt-1 text-2xl text-gray-500 xl:text-3xl">
                    {perfil.anio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
