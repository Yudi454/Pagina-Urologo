"use client";

import { faBarcode, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { name: "TU SALUD UROLÓGICA", href: "#informacion", alturaPc: -80 },
  { name: "CONOCEME", href: "#conoceme", alturaPc: 140 },
  { name: "TRATAMIENTOS", href: "#tratamientos", alturaPc: 0 },
  { name: "GUÍA PARA PACIENTES", href: "#consultorios" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e, href, altura) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (!element) return;
    const isMobile = window.innerWidth < 1024;
    const offset = isMobile ? 150 : altura; // ← más alto en mobile

    const target =
      element.getBoundingClientRect().top + window.scrollY - offset;

    animate(window.scrollY, target, {
      duration: 0.8,
      ease: "easeInOut",
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });

    setOpen(false);
  };
  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-500 ${
          scrolled ? "bg-[#66B4DB]/50" : "bg-[#66B4DB]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl h-30 items-center justify-center px-6 py-4">
          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href, link.alturaPc)}
                className="whitespace-nowrap text-sm  md:text-3xl text-white transition-colors hover:text-[#D6F1FF] font-bold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón móvil */}
          <button onClick={() => setOpen(!open)} className="lg:hidden w-100">
            {open ? (
              <FontAwesomeIcon
                icon={faX}
                size="xl"
                style={{ color: "rgb(12, 113, 195)" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBarcode}
                size="xl"
                style={{ color: "rgb(12, 113, 195)" }}
              />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {/* Menú móvil */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col bg-white border-t-2 border-[#0C71C3] shadow-lg">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group relative flex items-center px-6 py-4 text-lg font-medium text-gray-800 transition-all duration-300 hover:bg-[#0C71C3]/5 hover:text-[#0C71C3] active:bg-[#0C71C3]/10 border-b border-[#0C71C3]/20 last:border-b-0"
              >
                {/* Barrita lateral */}
                <span className="absolute left-0 top-0 h-full w-1 bg-[#0C71C3] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>

                {/* Número */}
                <span className="mr-4 text-sm font-bold text-[#0C71C3]/60 w-6">
                  0{i + 1}
                </span>

                {link.name}

                {/* Flecha */}
                <span className="ml-auto text-[#0C71C3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};
