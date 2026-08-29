"use client";

import { useStore } from "@/store/useStore";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, motion } from "framer-motion";

export const BotonVolver = () => {
  const scrollbar = useStore((state) => state.scrollbar);
  return (
    <div>
      <motion.button
        onClick={() => {
          scrollbar?.scrollTo(0, 0, 800);
        }}
        className="fixed bottom-6 right-6 z-0 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#0C71C3] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#095b9e]"
        aria-label="Volver arriba"
      >
        <span className="text-lg leading-2">
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </motion.button>
    </div>
  );
};
