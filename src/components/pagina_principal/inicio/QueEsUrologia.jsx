import React from "react";

export const QueEsUrologia = () => {
  return (
    <>
      <section>
        <div className="mx-auto flex max-w-[1700px] flex-col items-center px-6 py-12 lg:px-16">
          {/* Título */}
          <h2 className="text-center text-4xl font-bold text-[#087bd1] md:text-5xl">
            La importancia de cuidar tu salud urológica
          </h2>

          {/* Descripción */}
          <p className="mt-12 max-w-[1600px] text-center text-xl font-semibold leading-[1.6] text-[#087bd1] md:text-2xl">
            A veces, por vergüenza, desconocimiento o porque creemos que ciertas
            molestias son normales, dejamos pasar señales que merecen atención.
            Sin embargo, cuidar la salud urológica también es cuidar nuestra
            calidad de vida.
          </p>
        </div>
      </section>
    </>
  );
};
