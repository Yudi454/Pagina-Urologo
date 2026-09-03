"use client";
import React from "react";
import { Hero } from "./Hero";
import { Informacion } from "./Informacion";
import { ACercaDeMi } from "./ACercaDeMi";
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
