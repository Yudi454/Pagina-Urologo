import React from "react";

export const QueEsUrologia = () => {
  return (
    <>
      <section>
        <div className="mx-auto flex max-w-[1700px] flex-col items-center px-6 py-12 lg:px-16">
          {/* Título */}
          <h2 className="text-center text-4xl font-bold text-[#087bd1] md:text-5xl">
            ¿Qué es la urología?
          </h2>

          {/* Descripción */}
          <p className="mt-12 max-w-[1600px] text-center text-xl font-semibold leading-[1.6] text-[#087bd1] md:text-2xl">
            La Urología es la especialidad médica que se encarga del
            diagnóstico, tratamiento y prevención de las enfermedades del
            aparato urinario en hombres y mujeres, así como del sistema
            reproductor masculino. Los urólogos tratan problemas que afectan los
            riñones, la vejiga, la próstata, los testículos y la uretra, ya sea
            mediante tratamientos médicos o procedimientos quirúrgicos.
          </p>
        </div>
      </section>
    </>
  );
};
