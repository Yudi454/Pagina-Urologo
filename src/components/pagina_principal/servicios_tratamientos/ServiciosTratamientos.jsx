import React from "react";
import { Servicios } from "./servicios/Servicios";
import { Tratamientos } from "./tratamientos/Tratamientos";

export const ServiciosTratamientos = () => {
  return (
    <section id="especialidades" className="scroll-mt-30">
      <Servicios />
      <Tratamientos />
    </section>
  );
};
