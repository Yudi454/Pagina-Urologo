import Image from "next/image";
import { consultorios } from "./consultorios";
import { contactos } from "./contactos";

export const Footer = () => {
  return (
    <footer className=" bg-[#323E4A] rounded-md shadow-md px-10 py-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start">
        {/* Logo */}
        <div className="flex items-center justify-center md:pt-14 mb-10 md:mb-0">
          <Image
            src="/Logo.png"
            alt="Dr Franco Fagetti"
            className="w-[70%]"
            width={300}
            height={120}
            unoptimized
          />
        </div>

        {/* Consultorios */}
        <div className="text-center">
          <h3 className="text-2xl md:text-5xl font-bold text-[#66B4DB] mb-4 md:mb-14">
            CONSULTORIOS
          </h3>

          <div className="space-y-5 md:space-y-12">
            {consultorios.map((item, i) => (
              <p key={i} className="block md:text-3xl font-bold text-white">
                {item.direccion}
              </p>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="text-center">
          <h3 className="text-2xl md:text-5xl font-bold text-[#66B4DB] mt-4 md:mt-0 mb-4 md:mb-14">
            CONTACTOS
          </h3>

          <div className="space-y-5 flex flex-col items-center">
            {contactos.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 justify-start md:ml-10"
              >
                <div className="w-10 flex justify-center">{item.icon}</div>

                <span className="md:text-3xl font-semibold text-white">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
