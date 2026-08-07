import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/styles/text/text.css";

export const Footer = () => {
  const servicios = [
    { service: "Litiasis Urinaria", link: "#Litiasis" },
    { service: "Control Prostático", link: "#Protático" },
    { service: "Incontinencia Urinaria", link: "#Incontinencia" },
    { service: "Cirugía Láser de Próstata (HoLEP)", link: "#Círugia Láser" },
  ];

  const contactos = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faInstagram}
          className="size-10! md:size-15!"
          style={{ color: "rgb(12, 113, 195)" }}
        />
      ),
      text: "dr.francofagetti",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faFacebook}
          className="size-10! md:size-15!"
          style={{ color: "rgb(12, 113, 195)" }}
        />
      ),
      text: "Franco Fagetti",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faLinkedin}
          className="size-10! md:size-15!"
          style={{ color: "rgb(12, 113, 195)" }}
        />
      ),
      text: "Franco Fagetti",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="size-10! md:size-15!"
          style={{ color: "rgb(12, 113, 195)" }}
        />
      ),
      text: "0381 576-3300",
    },
  ];

  return (
    <footer className=" bg-gray-300 rounded-md shadow-md px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start">
        {/* Logo */}
        <div className="flex items-center md:pt-14 mb-4 md:mb-0">
          <img src="/Logo.png" alt="Dr Franco Fagetti" className="w-full" />
        </div>

        {/* Servicios */}
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-semibold text-black mb-4 md:mb-14">
            SERVICIOS
          </h2>

          <div className="space-y-5 md:space-y-12">
            {servicios.map((item, i) => (
              <a
                key={i}
                className="block md:text-3xl font-bold text1"
                href={item.link}
              >
                {item.service}
              </a>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-semibold text-black mt-4 md:mt-0 mb-4 md:mb-14">
            CONTACTOS
          </h2>

          <div className="space-y-5 flex flex-col items-center">
            {contactos.map((item,i) => (
              <div
                key={i}
                className="flex items-center gap-6 justify-start ml-10"
              >
                <div className="w-10 flex justify-center">{item.icon}</div>

                <span className="md:text-3xl font-semibold text1">
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
