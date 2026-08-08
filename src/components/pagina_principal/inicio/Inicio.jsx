"use client";
import React from "react";
import { Hero } from "./Hero";
import { Informacion } from "./Informacion";
import { PorqueElegirme } from "./PorqueElegirme";
import { QueEsUrologia } from "./QueEsUrologia";

export const Inicio = () => {
  return (
    <>
      <Hero />
      <Informacion />
      <PorqueElegirme />
      <QueEsUrologia />
    </>
  );
};
