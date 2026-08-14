import React from "react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#2f87ce] to-[#073b61]">
      <div className="mx-auto flex flex-col md:flex-row min-h-190 max-w-[1700px] items-center gap-16 px-10 py-16 lg:px-16">
        {/* Imagen */}
        <div className="flex w-full md:w-1/2 justify-center">
          <div className="w-full max-w-170 overflow-hidden rounded-xl border-10 border-white shadow-lg">
            <img
              src="/Foto_Personal.jpeg"
              alt="Dr. Franco Fagetti"
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* Contenido */}
        <div className="flex w-full md:w-1/2 flex-col items-center text-center text-white">
          <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
            Atención Urológica de Excelencia
          </h1>

          <h2 className="mt-5 text-3xl font-bold xl:text-4xl">
            Tu Salud en Manos Expertas
          </h2>

          <p className="mt-12 max-w-187.5 text-xl font-semibold leading-[1.65] xl:text-2xl">
            La prevención y el tratamiento oportuno son claves para una vida
            saludable. Con amplia experiencia en el diagnóstico y tratamiento de
            enfermedades urológicas, se ofrece atención especializada y
            personalizada, acompañando a cada paciente con compromiso,
            profesionalismo y confianza. Agende su consulta y cuide su salud con
            el respaldo de un especialista dedicado a su bienestar.
          </p>

          <h3 className="mt-14 text-4xl font-bold xl:text-5xl">
            Dr. Franco Fagetti
          </h3>

          <a
            href="https://wa.me/5493814499254?text=Hola%2C%20quisiera%20realizar%20una%20consulta%20y%2C%20si%20es%20posible%2C%20coordinar%20un%20turno.%20Muchas%20gracias"
            target="_blank"
            className="mt-7 w-full max-w-170 rounded-2xl border-4 border-[#075fae] bg-[#087bd1] px-8 py-4 text-2xl font-medium shadow-lg transition hover:bg-[#096db8] xl:text-3xl"
          >
            Quiero realizar una consulta
          </a>
        </div>
      </div>

      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 h-20 w-full overflow-hidden">
        <div className="absolute -bottom-16 left-[-5%] h-32 w-[110%] rounded-[50%] bg-[#b9c9d5]" />

        <div className="absolute -bottom-24 left-[-5%] h-32 w-[110%] rounded-[50%] bg-white" />
      </div>
    </section>
  );
};
