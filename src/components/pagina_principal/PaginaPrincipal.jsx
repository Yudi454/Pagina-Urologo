import { Hero } from "./Hero/Hero";
import { Informacion } from "./informacion/Informacion";
import { ACercaDeMi } from "./a_cerca_de_mi/ACercaDeMi";
import { TratamientosInicio } from "./tratamientos/TratamientosInicio";
import ObrasSociales from "@/app/obras_sociales/page";

export const PaginaPrincipal = () => {
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
