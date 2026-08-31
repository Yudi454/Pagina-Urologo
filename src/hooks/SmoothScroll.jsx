"use client";

import { useStore } from "@/store/useStore";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

class CustomScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = "customScroll";

  transformDelta(delta) {
    return {
      x: delta.x,
      y: delta.y * 0.5,
    };
  }
}

Scrollbar.use(CustomScrollPlugin);

export default function SmoothScroll({ children }) {
  const scrollbarRef = useRef(null);

  const setScrollbar = useStore((state) => state.setScrollbar);

  useEffect(() => {
    const container = scrollbarRef.current;

    if (!container) return;

    const scrollbar = Scrollbar.init(container, {
      damping: 0.06,
      alwaysShowTracks: false,
    });

    setScrollbar(scrollbar);

    return () => {
      scrollbar.destroy();
      setScrollbar(null);
    };
  }, []);

  return (
    <div ref={scrollbarRef} className="h-screen overflow-hidden">
      {children}
    </div>
  );
}
