import { create } from "zustand";

export const useComplex = create((set) => ({
 complex: "",
  setComplex: (complex) => set({ complex }),
}));
