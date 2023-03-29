import { createContext, useContext, useState } from 'react';
const config = require('../config/config.json');
//Set states to config values after testing



//Create context
export const SettingsContext = createContext();



//Create provider

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    vibrate: false,
    sound: false,
    flash: false,
    darkMode: false,
  });

  function handleVibrate() {
    setSettings((state) => ({ ...state, vibrate: !state.vibrate }));
  }

  function handleSound() {
    setSettings((state) => ({ ...state, sound: !state.sound }));
  }

  function handleFlash() {
    setSettings((state) => ({ ...state, flash: !state.flash }));
  }

  function handleDarkMode() {
    setSettings((state) => ({ ...state, darkMode: !state.darkMode }));
  }

  const value = {
    settings,
    handleVibrate,
    handleSound,
    handleFlash,
    handleDarkMode,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
