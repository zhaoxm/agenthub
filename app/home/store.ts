import { create } from 'zustand';

interface HomeStore {
  count: number;
  increment: () => void;
  clear: () => void;
}

export const useHomeStore = create<HomeStore>((set) => {
  return {
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    clear: () => set({count: 0})
  }
});