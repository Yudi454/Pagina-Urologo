import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const contactos = [
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
