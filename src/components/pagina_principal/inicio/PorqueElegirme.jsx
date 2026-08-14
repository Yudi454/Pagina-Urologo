import {
  faUserDoctor,
  faBookMedical,
  faComments,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PorqueElegirme = () => {
  const razones = [
    {
      icon: faUserDoctor,
      titulo: "Atención Personalizada",
    },
    {
      icon: faBookMedical,
      titulo: "Formación Actualizada",
    },
    {
      icon: faComments,
      titulo: "Comunicación Clara",
    },
    {
      icon: faHeartPulse,
      titulo: "Compromiso con tu Bienestar",
    },
  ];
  return (
    <>
      <section>
        <div className="mx-auto flex max-w-[1700px] flex-col items-center px-6 mt-10 mb-10 lg:px-16">
          {/* Título */}
          <h2 className="text-center text-4xl font-bold text-[#087bd1] xl:text-5xl">
            ¿Por qué elegirme?
          </h2>

          {/* Descripción */}
          <p className="mt-12 max-w-[1600px] text-center text-xl font-semibold leading-[1.6] text-[#087bd1] xl:text-2xl">
            El Dr. Franco Fagetti combina una sólida formación académica con una
            atención cercana y humana. Su objetivo no solo es tratar la
            enfermedad, sino acompañar a cada paciente con claridad, respeto y
            compromiso durante todo el proceso.
          </p>

          {/* Tarjetas */}
          <div className="mt-16 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {razones.map((razon, i) => (
              <div
                key={i}
                className="flex min-h-68 md:min-h-80 flex-col items-center justify-between rounded-2xl border-4 border-[#087bd1] bg-white px-6 py-7 shadow-lg"
              >
                {/* Título */}
                <h3 className="text-center text-3xl font-bold leading-tight text-[#087bd1] xl:text-4xl">
                  {razon.titulo}
                </h3>

                {/* Icono */}
                <FontAwesomeIcon
                  icon={razon.icon}
                  className="size-24! text-[#087bd1] xl:size-28!"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
