import Image from "next/image";

export const TratamientosInicio = () => {
  const tratamientos = [
    {
      foto: "/prostata.png",
      nombre: "PRÓSTATA",
    },
    {
      foto: "/calculos_renales.png",
      nombre: "CÁLCULOS RENALES",
    },
    {
      foto: "/disfuncion.png",
      nombre: "DISFUNCIÓN ERÉCTIL",
    },
    {
      foto: "/infeccion.png",
      nombre: "INFECCIONES URINARIAS",
    },
  ];
  return (
    <section id="tratamientos">
      {/* Titulo */}
      <h1 className="text-center text-4xl text-[#508EAD] font-bold mt-30 mb-10">TRATAMIENTOS</h1>
      <div className="mx-auto grid w-[90%] md:w-[60%] grid-cols-2 gap-5">
        {tratamientos.map((t, i) => (
          <div
            key={i}
            className="flex p-3 md:p-10 flex-col items-center justify-center bg-[#323E4A] hover:scale-105 duration-300"
          >
            <Image
              src={t.foto}
              alt={t.nombre}
              width={500}
              height={500}
              priority
              className="h-auto w-30 object-cover md:w-60"
            />

            <p className="text-center font-bold text-white text-xl md:text-3xl">{t.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
