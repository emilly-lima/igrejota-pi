import { create } from "zustand";

export const useFormato = create((set) => ({
 formato: "",
  setFormato: (formato) => set({ formato }),
}));
