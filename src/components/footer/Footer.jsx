import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/styles/text/text.css";

export default function Footer() {
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
          className="size-25"
          style={{ color: "rgb(12, 113, 195)" }}
        />
      ),
      text: "dr.francofagetti",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faFacebook}
          className="size-25"
          style={{ color: "rgb(12, 113, 195)" }}
        />
      ),
      text: "Franco Fagetti",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faLinkedin}
          className="size-25"
          style={{ color: "rgb(12, 113, 195)" }}
        />
      ),
      text: "Franco Fagetti",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="size-25"
          style={{ color: "rgb(12, 113, 195)" }}
        />
      ),
      text: "0381 576-3300",
    },
  ];

  return (
    <footer className=" bg-gray-300 rounded-md shadow-md px-10 py-8">
      <div className="grid grid-cols-3 items-start">
        {/* Logo */}
        <div className="flex items-center pt-14">
          <img src="/Logo.png" alt="Dr Franco Fagetti" className="w-full" />
        </div>

        {/* Servicios */}
        <div className="text-center">
          <h2 className="text-6xl font-semibold text-black mb-14">Servicios</h2>

          <div className="space-y-12">
            {servicios.map((item, i) => (
              <a key={i} className="block text-3xl font-bold text1" href={item.link}>
                {item.service}
              </a>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="text-center">
          <h2 className="text-6xl font-semibold text-black mb-10">Contacto</h2>

          <div className="space-y-5 flex flex-col items-center">
            {contactos.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-6 justify-start ml-10"
              >
                {item.icon}

                <span className="text-3xl font-semibold text1">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
