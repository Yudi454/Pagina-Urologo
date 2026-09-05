"use client";

import { useLenis } from "lenis/react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const BotonVolver = () => {
  const lenis = useLenis();
  return (
    <div>
      <motion.button
        onClick={() => {
          lenis?.scrollTo(0, { duration: 0.8, easing: (t) => t * (2 - t) });
        }}
        className="fixed bottom-6 right-6 z-10 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#0C71C3] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#095b9e]"
        aria-label="Volver arriba"
      >
        <span className="text-lg leading-2">
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </motion.button>
    </div>
  );
};
