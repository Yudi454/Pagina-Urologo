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

  const consultorios = [
    {
      direccion:
        "Dirección: Santiago del Estero 157, T4000 San Miguel de Tucumán, Tucumán",
    },
  ];

  const contactos = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faInstagram}
          className="size-10! md:size-15!"
          style={{ color: "rgb(255, 255, 255)" }}
        />
      ),
      text: "dr.francofagetti",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faFacebook}
          className="size-10! md:size-15!"
          style={{ color: "rgb(255, 255, 255)" }}
        />
      ),
      text: "Franco Fagetti",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faLinkedin}
          className="size-10! md:size-15!"
          style={{ color: "rgb(255, 255, 255)" }}
        />
      ),
      text: "Franco Fagetti",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="size-10! md:size-15!"
          style={{ color: "rgb(255, 255, 255)" }}
        />
      ),
      text: "0381 576-3300",
    },
  ];

  return (
    <footer className=" bg-[#323E4A] rounded-md shadow-md px-10 py-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start">
        {/* Logo */}
        <div className="flex items-center justify-center md:pt-14 mb-4 md:mb-0">
          <img
            src="/logo_claro.png"
            alt="Dr Franco Fagetti"
            className="w-[70%]"
          />
        </div>

        {/* Consultorios */}
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-[#66B4DB] mb-4 md:mb-14">
            CONSULTORIOS
          </h2>

          <div className="space-y-5 md:space-y-12">
            {consultorios.map((item, i) => (
              <a
                key={i}
                className="block md:text-3xl font-bold text-white"
                href={item.link}
              >
                {item.direccion}
              </a>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-[#66B4DB] mt-4 md:mt-0 mb-4 md:mb-14">
            CONTACTOS
          </h2>

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
