"use client";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, motion } from "framer-motion";

export const BotonVolver = () => {
  return (
    <div>
      <motion.button
        onClick={() => {
          animate(window.scrollY, 0, {
            duration: 0.8,
            ease: "easeInOut",
            onUpdate: (value) => {
              window.scrollTo(0, value);
            },
          });
        }}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#0C71C3] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#095b9e]"
        aria-label="Volver arriba"
      >
        <span className="text-lg leading-2">
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </motion.button>
    </div>
  );
};
