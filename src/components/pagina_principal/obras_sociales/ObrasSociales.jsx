import React from "react";

const ObrasSociales = () => {
  const telefono = "3815763300";

  const mensaje = encodeURIComponent("Que obra sociales maneja?");

  return (
    <section className="mt-30 mb-10 flex flex-col justify-center items-center">
      <h2 className="font-bold text-[#508EAD] text-4xl md:text-5xl uppercase">
        Obras Sociales
      </h2>
      <p className="text-[#508EAD] text-3xl mt-2 md:text-4xl md:mt-3">
        Consultá la cobertura de tu obra social haciendo clic en el botón de
        abajo.
      </p>
      <div>
        <a
          className=" mt-14 inline-flex items-center justify-center border-2 text-[#508EAD] border-[#508EAD] p-5 px-10 py-4 text-xl font-medium  transition-all duration-300 hover:scale-105 md:px-12 md:py-5 md:text-2xl uppercase"
          href={`https://wa.me/${telefono}?text=${mensaje}`}
        >
          Consultar sobre obras sociales
        </a>
      </div>
    </section>
  );
};

export default ObrasSociales;
