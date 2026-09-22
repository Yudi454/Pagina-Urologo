import { Hero } from "./Hero/Hero";
import { Informacion } from "./informacion/Informacion";
import { ACercaDeMi } from "./a_cerca_de_mi/ACercaDeMi";
import { TratamientosInicio } from "./tratamientos/TratamientosInicio";
import { ObrasSociales } from "./obras_sociales/ObrasSociales";

export const PaginaPrincipal = () => {
  return (
    <main>
      <Hero />
      <Informacion />
      <ACercaDeMi />
      <TratamientosInicio />
      <ObrasSociales />
    </main>
  );
};
