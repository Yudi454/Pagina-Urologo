"use client";
import React from "react";
import { Hero } from "./Hero";
import { Informacion } from "./Informacion";
import { ACercaDeMi } from "./ACercaDeMi";
import { TratamientosInicio } from "./TratamientosInicio";
import ObrasSociales from "./ObrasSociales";

export const Inicio = () => {
  return (
    <>
      <Hero />
      <Informacion />
      <ACercaDeMi />
      <TratamientosInicio />
      <ObrasSociales />
    </>
  );
};
