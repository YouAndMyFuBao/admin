import { create } from 'zustand';

type SelectAllStore = {
  selectedAll: boolean;
  setSelectedAll: (selected: boolean) => void;
};

export const useSelectAllStore = create<SelectAllStore>((set) => ({
  selectedAll: true,
  setSelectedAll: (selected) => {
    set({ selectedAll: selected });
  },
}));
