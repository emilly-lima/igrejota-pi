import { create } from "zustand";

export const useFormato = create((set) => ({
 formato: "",
  setTime: (formato) => set({ formato }),
}));
