import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const telefono = "3815763300";

const mensaje = encodeURIComponent(
  "Hola Dr. Fagetti, quisiera realizar una consulta y obtener información sobre un turno."
);

export const linksPacientes = [
  {
    name: "INICIO",
    href: "/",
  },
  {
    name: "CONOCEME",
    href: "/conoceme",
  },
  {
    name: "TRATAMIENTOS",
    href: "/tratamientos",
  },
  {
    name: (
      <p
        target="_blank"
        className="gap-1 inline-flex justify-center border-2 border-white px-3 py-4 text-xl uppercase transition-all duration-300 hover:scale-105 sm:text-lg md:text-xl"
      >
        SOLICITAR CONSULTA
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      </p>
    ),
    href: `https://wa.me/${telefono}?text=${mensaje}`,
  },
];
