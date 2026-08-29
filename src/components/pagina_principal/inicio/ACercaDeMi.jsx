import Image from "next/image";
import React from "react";

export const ACercaDeMi = () => {
  return (
    <section id="conoceme" className="grid grid-cols-[40%_60%] min-h-200 mt-60">
      {/* Imagen */}
      <div className="flex items-start justify-end me-10 ">
        <div>

        <Image
          src="/foto_personal_rombo.png"
          alt="Paisaje de montañas"
          width={500}
          height={500}
          priority
          className="w-32 h-auto md:w-40 lg:w-100 object-cover "
          />
          </div>
      </div>
      {/* Informacion */}
      <div className="flex flex-col align-center justify-start">
        <h2 className="font-bold text-[#508EAD] text-5xl">A CERCA DE MI</h2>
        <h3 className="text-[#508EAD] text-4xl md:mt-3">ESPECIALISTA EN UROLOGÍA</h3>
        <p className="text-3xl md:mt-10 w-[80%]">
          El Dr. Franco Fagetti brinda atención urológica integral, enfocada en
          la prevención, el diagnóstico preciso y el tratamiento personalizado
          de cada paciente. Su compromiso es ofrecer una atención cercana y
          profesional, acompañando a cada persona en el cuidado de su salud
          urológica.
        </p>
        <br />
        <p className="text-3xl w-[80%]">
          Conocé su experiencia y los tratamientos especializados que ofrece.
        </p>
        <button className="w-[40%] mt-14 inline-flex items-center justify-center border-2 text-[#508EAD] border-[#508EAD] p-5 px-10 py-4 text-xl font-medium uppercase transition-all duration-300 hover:scale-105 md:px-12 md:py-5 md:text-2xl">
          MAS SOBRE MI
        </button>
      </div>
    </section>
  );
};
