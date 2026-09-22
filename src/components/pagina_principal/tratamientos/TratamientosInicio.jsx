import Image from "next/image";
import Link from "next/link";
import { tratamientos } from "./tratamientos";

export const TratamientosInicio = () => {

  return (
    <section id="tratamientos">
      {/* Titulo */}
      <h2 className="text-center text-4xl text-[#508EAD] font-bold mt-30 mb-10">
        TRATAMIENTOS
      </h2>
      <div className="mx-auto grid w-[90%] md:w-[60%] grid-cols-2 gap-5">
        {tratamientos.map((t, i) => (
          <Link
            key={i}
            href={"/tratamientos"}
            className="flex p-3 md:p-10 flex-col items-center justify-center bg-[#323E4A] hover:scale-105 duration-300"
          >
            <Image
              src={t.foto}
              alt={t.nombre}
              width={500}
              height={500}
              className="h-auto w-30 object-cover md:w-60"
            />

            <p className="text-center font-bold text-white text-xl md:text-3xl">
              {t.nombre}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
