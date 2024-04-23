import { create } from 'zustand';

type SearchStore = {
  dateType: 'date' | 'period';
  handleDateTypeChange: (dateType: 'date' | 'period') => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
  constructor: string;
  setConstructor: (constructor: string) => void;
  openStatus: 'ready' | 'complete';
  handleOpenStatusChange: (openStatus: 'ready' | 'complete') => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  dateType: 'date',
  handleDateTypeChange: (dateType) => {
    set((state) => ({ ...state, dateType }));
  },
  selectedDate: new Date(),
  setSelectedDate: (date) => {
    set((state) => ({ ...state, selectedDate: date }));
  },
  startDate: new Date(),
  setStartDate: (date) => {
    set((state) => ({ ...state, startDate: date }));
  },
  endDate: new Date(),
  setEndDate: (date) => {
    set((state) => ({ ...state, endDate: date }));
  },
  keyword: '',
  setKeyword: (keyword) => {
    set((state) => ({ ...state, keyword }));
  },
  constructor: '',
  setConstructor: (constructor) => {
    set({ constructor });
  },
  openStatus: 'ready',
  handleOpenStatusChange: (openStatus) => {
    set((state) => ({ ...state, openStatus }));
  },
}));
