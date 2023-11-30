import { create } from "zustand";

export const useComplex = create((set) => ({
 complex: "",
  setFormato: (complex) => set({ complex }),
}));
