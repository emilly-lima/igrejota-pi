import { create } from "zustand";

export const usePlayer = create((set) => ({
 player: "",
  setPlayer: (player) => set({ player }),
}));