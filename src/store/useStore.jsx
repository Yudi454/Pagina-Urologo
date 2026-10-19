import { create } from "zustand";

export const useStore = create((set) => ({
  scrollbar: null,

  setScrollbar: (scrollbar) => set({ scrollbar }),
}));
