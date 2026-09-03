import Image from "next/image";

const tratamientos = [
  {
    titulo: "PRÓSTATA",
    imagen: "/prostata.png",
    descripcion:
      "La próstata es una glándula que forma parte del sistema reproductor masculino y, con el paso de los años, puede presentar cambios que afecten la forma de orinar. Muchas de estas afecciones son frecuentes y pueden tratarse de manera efectiva.",
    tratamiento:
      "Dependiendo del diagnóstico, el tratamiento puede incluir controles, medicación o procedimientos mínimamente invasivos adaptados a cada paciente.",
  },
  {
    titulo: "CÁLCULOS RENALES",
    imagen: "/calculos_renales.png",
    descripcion:
      "Los cálculos renales son pequeñas piedras que se forman en los riñones y, en algunos casos, pueden causar molestias al desplazarse por las vías urinarias. Con un diagnóstico oportuno existen diversas opciones para resolverlos.",
    tratamiento:
      "Según el tamaño y la ubicación del cálculo, puede indicarse tratamiento médico o técnicas mínimamente invasivas para eliminarlo.",
  },
  {
    titulo: "DISFUNCIÓN ERÉCTIL",
    imagen: "/disfuncion.png",
    descripcion:
      "La disfunción eréctil es la dificultad persistente para lograr o mantener una erección suficiente para la actividad sexual. Es una consulta frecuente y suele tener solución cuando se identifica su causa.",
    tratamiento:
      "Existen diferentes alternativas, desde cambios en hábitos y medicación hasta tratamientos específicos según cada caso.",
  },
  {
    titulo: "INFECCIONES URINARIAS",
    imagen: "/infeccion.png",
    descripcion:
      "Las infecciones urinarias afectan las vías urinarias y pueden provocar ardor al orinar, aumento de la frecuencia urinaria o molestias. Un diagnóstico adecuado permite indicar el tratamiento más conveniente.",
    tratamiento:
      "Habitualmente se tratan con medicación y seguimiento médico, adaptando el tratamiento según la causa y la evolución del paciente.",
  },
];

export const TratamientosMain = () => {
  return (
    <section id="tratamientos" className=" py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Título */}
        <h2 className="text-center text-xl font-bold text-[#508EAD] md:text-4xl">
          TRATAMIENTOS
        </h2>

        <div className="flex flex-col gap-8 pt-10">
          {tratamientos.map((item, index) => (
            <div key={item.titulo} className="flex flex-col gap-6">
              {/* Tratamiento */}
              <div className="grid grid-cols-[170px_1fr] gap-6">
                {/* Imagen */}
                <div className="flex h-42.5 items-center justify-center rounded-md hover:scale-105 duration-300 bg-[#314150] p-4">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="max-h-30  max-w-full object-contain"
                  />
                </div>

                {/* Información */}
                <div className="flex flex-col justify-center gap-3">
                  <h3 className="text-4xl font-bold text-[#508EAD]">
                    {item.titulo}
                  </h3>

                  <p className="text-2xl ">{item.descripcion}</p>

                  <p className="text-base text-[#E6E6E6]">
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
