import { create } from "zustand";

export const useGameTime = create((set) => ({
  time: "",
  setTime: (time) => set({ time }),
}));
