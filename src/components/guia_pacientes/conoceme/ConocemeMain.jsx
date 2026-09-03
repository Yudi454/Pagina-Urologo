import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const resenas = [
  {
    nombre: "Carlos M",
    texto:
      "Excelente atención y muy profesional. Me explicó cada paso del tratamiento con claridad y me hizo sentir seguro durante todo el proceso.",
  },
  {
    nombre: "María G",
    texto:
      "Recibí una atención muy cálida y profesional. El diagnóstico fue claro y el tratamiento dio excelentes resultados.",
  },
  {
    nombre: "Jorge R",
    texto:
      "Destaco la dedicación, el trato humano y la confianza que transmite en cada consulta. Totalmente recomendable.",
  },
];

export const ConocemeMain = () => {
  return (
    <section className=" py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[300px_1fr]">
          <div className="mx-auto">
            <Image
              src="/Foto_Personal.jpeg"
              alt="Dr. Franco Fagetti"
              width={300}
              height={300}
              className="border-4 border-white object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-4xl font-extrabold uppercase text-[#508EAD]">
                A Acerca de Mi
              </h2>

              <h3 className="mt-5 text-3xl font-bold uppercase text-[#508EAD]">
                Especialista en Urología
              </h3>
            </div>

            <div className="space-y-6 text-xl leading-relaxed md:text-2xl">
              <p>
                El Dr. Franco Fagetti brinda atención urológica integral,
                enfocada en la prevención, el diagnóstico preciso y el
                tratamiento personalizado de cada paciente. Su compromiso es
                ofrecer una atención cercana y profesional, acompañando a cada
                persona en el cuidado de su salud urológica.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow mt-24 rounded-md border-2 border-[#323E4A] bg-[#ECECEC] px-8 py-10 md:px-12">
          {resenas.map((resena, index) => (
            <div key={index}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <h4 className="text-3xl font-extrabold text-[#508EAD] md:text-4xl">
                  {resena.nombre}
                </h4>

                <div className="flex gap-1 text-3xl text-[#F4C623]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
              </div>

              <p className="mt-5 text-xl leading-relaxed text-[#1A1A1A] md:text-2xl">
                {resena.texto}
              </p>

              {index !== resenas.length - 1 && (
                <div className="my-6 h-0.75 w-full rounded-full bg-[#323E4A]" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com.ar/search?q=doctor+franco+fagetti&sca_esv=8b4659d1f6f28da8&sxsrf=APpeQnss4D2B_vBu9br5Br7cgjQ1YhH8jQ%3A1788464798840&source=hp&ei=ns6ZaubMMNTd1sQP35iy4AY&iflsig=ABILxe8AAAAAapncriXpdQqkx4-7-_xDymkDMWvF3nvM&oq=d&gs_lp=Egdnd3Mtd2l6IgFkKgIIADIEECMYJzIEECMYJzIKECMY8AUYyQIYJzIIEAAYgAQYsQMyCBAAGIAEGLEDMhEQLhiABBixAxiDARjHARjRAzIFEAAYgAQyBRAAGIAEMg4QABiABBiKBRiNBhixAzIIEAAYgAQYsQNIlQdQf1h_cAF4AJABAJgBVaABVaoBATG4AQHIAQD4AQGYAgKgAmOoAgrCAg0QIxjJAhjwBRjqAhgnwgIHECMY6gIYJ8ICDRAjGPAFGMkCGOoCGCfCAgoQIxjwBRjqAhgnwgIHEC4Y6gIYJ5gDCPEFyEBA7Lgr_i2SBwEyoAfMCbIHATG4B1rCBwMyLTLIBwuACAE&sclient=gws-wiz#lrd=0x94225d1695aa72fd:0xb7d746722847c553,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 min-w-80 items-center justify-center rounded-md border-2 border-[#3A8DBD] bg-[#E8E8E8] px-10 text-2xl font-bold uppercase text-[#3A8DBD] transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            Ver Más Reseñas
          </a>
        </div>
      </div>
    </section>
  );
};
