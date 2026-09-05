import Image from "next/image";

export const ACercaDeMi = () => {
  return (
    <section
      id="conoceme"
      className="flex flex-col justify-center items-center text-center md:grid md:grid-cols-[40%_60%] min-h-200 mt-60"
    >
      {/* Imagen */}
      <div className="flex items-start justify-end md:me-10 ">
        <div>
          <Image
            src="/foto_personal_rombo.png"
            alt="Paisaje de montañas"
            width={500}
            height={500}
            priority
            className="w-70 mb-5 h-auto md:mb-0 lg:w-100 object-cover "
          />
        </div>
      </div>
      {/* Informacion */}
      <div className="flex flex-col items-center justify-start">
        <h2 className="font-bold text-[#508EAD] text-4xl md:text-5xl">
          A CERCA DE MI
        </h2>
        <h3 className="text-[#508EAD] text-3xl mt-2 md:text-4xl md:mt-3">
          ESPECIALISTA EN UROLOGÍA
        </h3>
        <p className="text-2xl md:text-3xl mt-5 md:mt-10 w-[90%] md:w-[80%]">
          El Dr. Franco Fagetti brinda atención urológica integral, enfocada en
          la prevención, el diagnóstico preciso y el tratamiento personalizado
          de cada paciente. Su compromiso es ofrecer una atención cercana y
          profesional, acompañando a cada persona en el cuidado de su salud
          urológica.
        </p>
        <br />
        <p className="text-2xl md:text-3xl w-[90%] md:w-[80%]">
          Conocé su experiencia y los tratamientos especializados que ofrece.
        </p>
        <button className="md:w-[40%] mt-14 inline-flex items-center justify-center border-2 text-[#508EAD] border-[#508EAD] p-5 px-10 py-4 text-xl font-medium uppercase transition-all duration-300 hover:scale-105 md:px-12 md:py-5 md:text-2xl">
          MAS SOBRE MI
        </button>
      </div>
    </section>
  );
};
