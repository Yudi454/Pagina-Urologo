"use client";

import { faBarcode, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { name: "Especialidades y tratamientos", href: "#especialidades" },
  { name: "Obras sociales", href: "#obras" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Consultorios", href: "#consultorios" },
  { name: "Contacto", href: "#contacto" },
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

  const handleScroll = (e, href) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (!element) return;
    const isMobile = window.innerWidth < 1024;
    const offset = isMobile ? 150 : 120; // ← más alto en mobile

    const target = element.getBoundingClientRect().top + window.scrollY - offset;

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
          scrolled ? "bg-white/50" : "bg-white"
        }`}
      >
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
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="whitespace-nowrap text-sm xl:text-base 2xl:text-lg text-gray-800 transition-colors hover:text-[#0C71C3] font-bold"
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
            {links.map((link, i) => (
              <a
                key={i}
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
