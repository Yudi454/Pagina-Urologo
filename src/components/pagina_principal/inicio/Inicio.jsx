"use client";
import React from "react";
import { Hero } from "./Hero";
import { Informacion } from "./Informacion";
import { PorqueElegirme } from "./PorqueElegirme";
import { QueEsUrologia } from "./QueEsUrologia";
import { ACercaDeMi } from "./ACercaDeMi";
import { Tratamientos } from "../servicios_tratamientos/tratamientos/Tratamientos";
import { TratamientosInicio } from "./TratamientosInicio";

export const Inicio = () => {
  return (
    <>
      <Hero />
      <Informacion />
      <ACercaDeMi />
      <TratamientosInicio />
    </>
  );
};
