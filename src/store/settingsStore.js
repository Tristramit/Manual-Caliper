import { create } from 'zustand';

const useSettingsStore = create((set) => ({
  vibrate: false,
  sound: false,
  flash: false,
  darkMode: false,
  handleVibrate: () => set((state) => ({ ...state, vibrate: !state.vibrate })),
  handleSound: () => set((state) => ({ ...state, sound: !state.sound })),
  handleFlash: () => set((state) => ({ ...state, flash: !state.flash })),
  handleDarkMode: () => set((state) => ({ ...state, darkMode: !state.darkMode })),
}));

export default useSettingsStore;

