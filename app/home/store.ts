import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export const useHomeStore = create(
  combine(
    {
      count: 0
    },
    (set) => ({
      increment: () => set((state) => ({ count: state.count + 1 })),
      clear: () => set({ count: 0 })
    })
  )
);