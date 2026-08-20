import React, { useState } from "react";

export const AllModal = ({
  cerrarModal,
  tratamientos,
  abrirModalEnfermedad,
  setAtras,
}) => {
  return (
    <div
    // bg-black/70
      className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm"
      onClick={cerrarModal}
    >
      <div
        className="rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden border border-blue-500/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-blue-700/90 px-8 py-5 flex items-center justify-between shrink-0">
          <h3 className="text-2xl font-bold text-white">
            Todas las enfermedades y tratamientos
          </h3>
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

        {/* Lista con scroll */}
        <div className="bg-white overflow-y-auto px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tratamientos.map((tratamiento, index) => (
              <button
                key={index}
                onClick={() => {
                  abrirModalEnfermedad(tratamiento), setAtras(true);
                }}
              >
                <div className="flex items-center gap-3 bg-blue-800 hover:bg-blue-600 rounded-xl px-4 py-3 transition-colors border border-blue-600/20">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-blue-50 font-medium text-sm sm:text-base">
                    {tratamiento.titulo}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 bg-blue-950/50 border-t border-blue-700/40 flex justify-center shrink-0">
          <button
            onClick={cerrarModal}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-2.5 rounded-full transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
