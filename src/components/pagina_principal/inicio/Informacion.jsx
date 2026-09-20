"use client";

import {
  faGraduationCap,
  faHospital,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";

export const Informacion = () => {
  const [duracion, setDuracion] = useState(3);

  const [interactuo, setInteractuo] = useState(false);

  useEffect(() => {
    const activarInteraccion = () => {
      setInteractuo(true);
    };

    const eventos = [
      "click",
      "pointerdown",
      "pointerup",
      "touchstart",
      "touchend",
      "keydown",
    ];

    eventos.forEach((evento) => {
      window.addEventListener(evento, activarInteraccion, { once: true });
    });

    return () => {
      eventos.forEach((evento) => {
        window.removeEventListener(evento, activarInteraccion);
      });
    };
  }, []);

  const autoplay = useRef(
    Autoplay({
      delay: (snapList, emblaApi) => {
        const slides = emblaApi.slideNodes();

        const delays = snapList.map((_, index) => {
          const video = slides[index]?.querySelector("video");

          return video?.duration ? video.duration * 1000 : 3000;
        });

        console.log(
          "DELAY FUNCTION:",
          delays,
          "readyStates:",
          slides.map((slide) => slide.querySelector("video")?.readyState),
          "durations:",
          slides.map((slide) => slide.querySelector("video")?.duration)
        );

        return delays;
      },
      stopOnInteraction: false,
      playOnInit: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current]
  );

  useEffect(() => {
    if (!emblaApi) return;

    // emblaApi.scrollTo(0);
    autoplay.current.stop();
    setInteractuo(false);
  }, [emblaApi]);

  const telefono = "3815763300";

  const mensaje = encodeURIComponent(
    "Hola Dr. Fagetti, quisiera realizar una consulta y obtener información sobre un turno."
  );

  const perfiles = [
    {
      icon: faGraduationCap,
      nombre: "Medico",
      anio: "20x",
    },
    {
      icon: faHospital,
      nombre: "Residencia",
      anio: "Hosptial X",
    },
    {
      icon: faUserGroup,
      nombre: "Congreso Internacional",
      anio: "CUA Annual Meeting · China",
    },
  ];

  const videos = [
    {
      link: "/video1.mp4",
    },
    {
      link: "/video2.mp4",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    let contador = 0;

    const cambiarVideo = () => {
      console.log(
        "CAMBIAR VIDEO",
        "interactuo:",
        interactuo,
        "tiempo:",
        Date.now()
      );

      console.log("SELECT", emblaApi.selectedScrollSnap(), Date.now());
      const index = emblaApi.selectedScrollSnap();
      const slides = emblaApi.slideNodes();

      // Pausar todos
      slides.forEach((slide) => {
        const video = slide.querySelector("video");
        video?.pause();
      });

      // Reproducir el actual
      const videoActual = slides[index]?.querySelector("video");

      if (videoActual) {
        if (
          videoActual.readyState >= 1 &&
          Number.isFinite(videoActual.duration)
        ) {
          const nuevaDuracion = videoActual.duration * 1000;

          // autoplay.current.options.delay = nuevaDuracion;

          console.log("readyState:", videoActual.readyState);
          console.log("duration:", videoActual.duration);
          console.log(emblaApi.plugins().autoplay);
          console.log(
            "TIME UNTIL NEXT DESPUÉS DE CAMBIAR:",
            emblaApi.plugins().autoplay.timeUntilNext()
          );

          if (interactuo) {
            autoplay.current.stop();
            autoplay.current.play();
          }

          setDuracion(videoActual.duration);
        }
      }
      if (interactuo) {
        videoActual?.play();
      }
    };

    cambiarVideo();

    emblaApi.on("select", cambiarVideo);

    return () => {
      emblaApi.off("select", cambiarVideo);
    };
  }, [emblaApi, interactuo]);

  useEffect(() => {
    if (!emblaApi) return;
    console.log("EMBLA API", emblaApi);
    console.log("AUTOPLAY", autoplay.current);
    console.log("PLUGIN AUTOPLAY", emblaApi.plugins().autoplay);
    console.log(
      "MISMA INSTANCIA:",
      autoplay.current === emblaApi.plugins().autoplay
    );

    const onPlay = () => console.log("autoplay:play", Date.now());
    const onSelect = () => console.log("select", Date.now());

    emblaApi.on("autoplay:play", onPlay);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("autoplay:play", onPlay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const slides = emblaApi.slideNodes();

    const videos = slides
      .map((slide) => slide.querySelector("video"))
      .filter(Boolean);

    const verificarVideos = () => {
      const todosListos = videos.every(
        (video) => video.readyState >= 1 && Number.isFinite(video.duration)
      );

      if (todosListos) {
        console.log("VIDEOS LISTOS → REINIT");
        emblaApi.reInit();
      }
    };

    videos.forEach((video) => {
      video.addEventListener("loadedmetadata", verificarVideos);
    });

    verificarVideos();

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("loadedmetadata", verificarVideos);
      });
    };
  }, [emblaApi]);

  return (
    <>
      <section
        id="informacion"
        className="relative flex min-h-150 md:min-h-250 w-full items-center justify-center overflow-hidden bg-[url('/fondo2.jpg')] bg-cover bg-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#536F7A]/50" />

        {/* Contenido */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-20 text-white md:flex-row md:justify-center">
          <div ref={emblaRef} className="overflow-hidden px-2 py-2">
            <div className="flex">
              {videos.map((v, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center flex-[0_0_100%]"
                >
                  {/* Video */}
                  <video
                    className="w-48 rounded-xl md:w-64 lg:w-72"
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  >
                    <source src={v.link} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>

          {/* Texto */}
          <div className="max-w-3xl md:text-left flex flex-col items-center">
            <h2 className="font-sans text-3xl text-center font-extrabold uppercase leading-tight tracking-wide md:text-4xl lg:text-5xl">
              CUIDANDO TU SALUD
              <br />Y BIENESTAR
            </h2>

            <p className="mt-10 text-2xl text-center font-bold drop-shadow-lg  leading-relaxed md:text-2xl lg:text-[28px]">
              Tu salud y bienestar son nuestra prioridad. Recibí atención
              urológica especializada, con un diagnóstico preciso y tratamientos
              personalizados para cuidar tu salud y mejorar tu calidad de vida.
              Conocé las especialidades y tratamientos del Dr. Franco Fagetti.
            </p>

            <a
              href={`https://wa.me/${telefono}?text=${mensaje}`}
              target="_blank"
              className="mt-14 inline-flex md:w-[50%] justify-center border-2 border-white px-10 py-4 text-xl font-medium uppercase transition-all duration-300 hover:scale-105 hover:border-[#536F7A]/25 hover:bg-[#536F7A]/25 md:px-12 md:py-5 md:text-2xl"
            >
              SOLICITAR CONSULTA
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
