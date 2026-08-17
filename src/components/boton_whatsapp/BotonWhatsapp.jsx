"use client"

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const BotonWhatsapp = () => {
  const telefono = "3815763300";

  const mensaje = encodeURIComponent(
    "Hola Dr. Fagetti, quisiera realizar una consulta y obtener información sobre un turno."
  );

  return (
    <motion.a
      href={`https://wa.me/${telefono}?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-20 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
    </motion.a>
  );
};
