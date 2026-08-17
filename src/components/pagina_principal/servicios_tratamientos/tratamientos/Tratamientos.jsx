"use client";

import { createElement, useState } from "react";
import { InfoModal } from "./InfoModal";
import { tratamientos } from "./tratamientos2.js";
import { AllModal } from "./AllModal.jsx";
import "@/styles/text/text.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedkit } from "@fortawesome/free-solid-svg-icons";

export const Tratamientos = () => {
  const [modalAbierto, setModalAbierto] = useState(null); // id de la enfermedad o 'todos'
  const [enfermedadSeleccionada, setEnfermedadSeleccionada] = useState(null);

  const abrirModalEnfermedad = (enfermedad) => {
    setEnfermedadSeleccionada(enfermedad);
    setModalAbierto("enfermedad");
  };

  const abrirModalTodos = () => {
    setModalAbierto("todos");
  };

  const cerrarModal = () => {
    setModalAbierto(null);
    setEnfermedadSeleccionada(null);
  };

  const [atras, setAtras] = useState(false);

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12 tracking-wide">
          Enfermedades Tratadas
        </h2>

        {/* Tarjetas de enfermedades destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tratamientos.slice(0, 3).map((enf) => (
            <button
              key={enf.id}
              onClick={() => {abrirModalEnfermedad(enf),setAtras(false)}}
              className="group relative border border-blue-600 hover:bg-blue-500 text-[#0C71C3] hover:text-white! rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
              {/* Icono de maletín médico */}

              <FontAwesomeIcon
                icon={faMedkit}
                size="5x"
                className="text-[#0C71C3] group-hover:text-cyan-300"
              />

              <h3 className=" text-xl font-semibold mb-2 leading-tight">
                {enf.titulo}
              </h3>
              <span className=" font-bold text-sm opacity-90 group-hover:opacity-100">
                Ver más info
              </span>
            </button>
          ))}
        </div>

        {/* Botón "Ver todas las enfermedades" */}
        <div className="flex justify-center">
          <button
            onClick={abrirModalTodos}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
          >
            Ver todas las enfermedades
          </button>
        </div>
      </div>

      {/* ==================== MODAL DE ENFERMEDAD INDIVIDUAL ==================== */}
      {modalAbierto === "enfermedad" && enfermedadSeleccionada && (
        <InfoModal
          cerrarModal={cerrarModal}
          enfermedadSeleccionada={enfermedadSeleccionada}
          abrirModalTodos={abrirModalTodos}
          atras={atras}
          setAtras={setAtras}
        />
      )}

      {/* ==================== MODAL CON TODAS LAS ENFERMEDADES ==================== */}
      {modalAbierto === "todos" && (
        <AllModal
          cerrarModal={cerrarModal}
          tratamientos={tratamientos}
          abrirModalEnfermedad={abrirModalEnfermedad}
          setAtras={setAtras}
        />
      )}
    </div>
  );
};
