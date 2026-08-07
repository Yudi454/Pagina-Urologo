"use client";

import { faBarcode, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const links = [
  { name: "Especialidades y tratamientos", href: "#especialidades" },
  { name: "Obras sociales", href: "#obras" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <Image
              src="/Logo.png" // public/logo.png
              alt="Dr. Franco Fagetti"
              width={500}
              height={120}
              className="w-60 md:w-100"
              loading="eager"
            />
          </div>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-sm xl:text-base 2xl:text-lg font-medium text-gray-800 transition-colors hover:text-sky-700"
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
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 border-t" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col bg-white">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b px-6 py-4 text-lg hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};
