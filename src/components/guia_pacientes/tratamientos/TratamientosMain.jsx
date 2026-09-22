import Image from "next/image";
import { tratamientos } from "./tratamientos";

export const TratamientosMain = () => {
  return (
    <section id="tratamientos" className=" py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Título */}
        <h2 className="text-center text-4xl font-bold text-[#508EAD] md:text-4xl">
          TRATAMIENTOS
        </h2>

        <div className="flex flex-col gap-8 pt-10">
          {tratamientos.map((item, index) => (
            <div key={item.titulo} className="flex flex-col gap-6">
              {/* Tratamiento */}
              <div className="flex flex-col justify-center items-center text-center md:text-left md:grid md:grid-cols-[170px_1fr] gap-6">
                {/* Imagen */}
                <div className="flex h-42.5 items-center justify-center rounded-md hover:scale-105 duration-300 bg-[#314150] p-4">
                  <Image
                    src={item.imagen}
                    alt={item.titulo}
                    width={170}
                    height={170}
                    className="max-h-30  max-w-full object-contain"
                  />
                </div>

                {/* Información */}
                <div className="flex flex-col justify-center gap-3">
                  <h3 className="text-4xl font-bold text-[#508EAD]">
                    {item.titulo}
                  </h3>

                  <p className="text-2xl">{item.descripcion}</p>

                  <p className="text-2xl">
                    <strong>Tratamiento:</strong> {item.tratamiento}
                  </p>
                </div>
              </div>

              {/* Separador */}
              {index !== tratamientos.length - 1 && (
                <div className="h-1 w-full rounded-full bg-[#323E4A]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
