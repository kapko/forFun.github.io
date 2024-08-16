import create from 'zustand';
import { persist } from 'zustand/middleware';
import { ProcuringFormData } from '@/store/procuring/type';

type StoreState = {
  data: ProcuringFormData[];
  add: (item: ProcuringFormData) => void;
  reset: () => void;
};

export const useProcuringStore = create<StoreState>()(
  persist(
    (set) => ({
      data: [],
      add: (item: ProcuringFormData) => set((state) => {
        const newData = [...state.data, item];
        return { data: newData };
      }),
      reset: () => set({ data: [] })
    }),
    {
      name: 'procuring-data',
      // getStorage: () => localStorage,
    }
  )
);

