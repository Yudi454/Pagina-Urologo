
export const Servicios = () => {
  const servicios = [
    {
      imagen: "/Card1.png",
      titulo: "Litiasis Urinaria",
      subtitulo: "Cálculos renales y urinarios",
      descripcion:
        "Diagnóstico y tratamiento de cálculos renales y urinarios, utilizando alternativas adaptadas a cada paciente.",
    },
    {
      imagen: "/Card2.png",
      titulo: "Control Prostático",
      subtitulo: "Prevención y detección temprana",
      descripcion:
        "Evaluación, prevención y tratamiento de las principales afecciones de la próstata para cuidar la salud masculina.",
    },
    {
      imagen: "/Card3.png",
      titulo: "Incontinencia Urinaria",
      subtitulo: "Tratamiento personalizado",
      descripcion:
        "Diagnóstico y tratamiento de la incontinencia urinaria para mejorar el control urinario y la calidad de vida.",
    },
  ];
  return (
    <section className="px-4  md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h2 className="mb-12 text-center text-4xl font-bold text-[#0875c9] md:text-5xl">
          Servicios
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl border-2 border-[#0875c9] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="flex min-h-70 flex-col p-6 text-center">
                <h3 className="text-3xl font-bold text-[#0875c9]">
                  {servicio.titulo}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-gray-800">
                  {servicio.subtitulo}
                </h4>

                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {servicio.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
