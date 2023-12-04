import { create } from "zustand";

export const useModo = create((set) => ({
 modo: "",
  setModo: (modo) => set({ modo }),
}));