import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const telefono = "3815763300";

const mensaje = encodeURIComponent(
  "Hola Dr. Fagetti, quisiera realizar una consulta y obtener información sobre un turno."
);

export const links = [
  {
    name: "TU SALUD UROLÓGICA",
    href: "#informacion",
    alturaPc: -80,
    alturaMobile: 180,
  },
  { name: "CONOCEME", href: "#conoceme", alturaPc: -20, alturaMobile: 250 },
  {
    name: "TRATAMIENTOS",
    href: "#tratamientos",
    alturaPc: 0,
    alturaMobile: 250,
  },
  { name: "GUÍA PARA PACIENTES", href: "/conoceme" },
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
