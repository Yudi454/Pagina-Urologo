"use client";

import { ReactLenis } from "lenis/react";

const UseLenis = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 0.8, //Velocidad del scroll
        easing: (t) => t * (2 - t),
        smoothWheel: true,
        wheelMultiplier: 1,
        virtualScroll: (e) => {
          e.deltaY *= 0.5;
        },
        anchors: true,
        respectReducedMotion: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default UseLenis;
