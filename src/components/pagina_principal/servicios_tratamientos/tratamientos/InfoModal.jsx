import { faMedkit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const InfoModal = ({
  cerrarModal,
  enfermedadSeleccionada,
  abrirModalTodos,
  atras,
  setAtras,
}) => {
  return (
    <div
    // bg-black/70
      className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm"
      onClick={cerrarModal}
    >
      <div
        className="rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-blue-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        <div className="bg-blue-700/80 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-cyan-400/20 p-3 rounded-xl">
              <FontAwesomeIcon
                icon={faMedkit}
                size="3x"
                className="text-cyan-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {enfermedadSeleccionada.titulo}
            </h3>
          </div>
          <button
            onClick={cerrarModal}
            className="text-blue-200 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Cerrar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenido */}
        <div className="bg-white px-8 py-7">
          <p className=" text-lg leading-relaxed">
            {enfermedadSeleccionada.descripcion}
          </p>

          <div className="flex justify-end">
            {atras === true && (
              <button
                onClick={() => {
                  abrirModalTodos(), setAtras(false);
                }}
                className="bg-blue-700 hover:bg-blue-500 text-white hover:text-black font-semibold px-6 py-2.5 me-4 rounded-full transition-colors"
              >
                Volver Atras
              </button>
            )}
            <button
              onClick={cerrarModal}
              className="bg-blue-700 hover:bg-blue-500 text-white hover:text-black font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
