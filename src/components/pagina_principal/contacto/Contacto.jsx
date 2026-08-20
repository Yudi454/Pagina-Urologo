import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contacto = () => {
  const redes = [
    {
      red: faInstagram,
      link: "https://www.instagram.com/dr.francofagetti/",
    },
    {
      red: faFacebookF,
      link: "https://www.facebook.com/people/Dr-Franco-Fagetti/61562170749258/",
    },
    {
      red: faLinkedinIn,
      link: "https://www.linkedin.com/in/franco-fagetti-39100b163/",
    },
  ];
  return (
    <div id="contacto" className="flex flex-col items-center gap-4 mb-10 scroll-mt-100 md:scroll-mt-30">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#087bd1] mb-5 mt-5">
        Seguinos en nuestras redes
      </h2>

      <div className="flex items-center gap-15">
        {redes.map((red, i) => (
          <a
            key={i}
            href={red.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex p-4 items-center justify-center rounded-md bg-[#0C71C3] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#095b9e]"
          >
            <FontAwesomeIcon icon={red.red} className="text-3xl md:text-7xl" />
          </a>
        ))}
      </div>
    </div>
  );
};
