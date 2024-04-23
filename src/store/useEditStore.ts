import { create } from 'zustand';

type EditMssion = {
  editMissionId: number;
  setEditMissionId: (editMissionId: number) => void;
};

export const useEditMission = create<EditMssion>((set) => ({
  editMissionId: 0,
  setEditMissionId: (editMissionId: number) => {
    set({ editMissionId });
  },
}));
