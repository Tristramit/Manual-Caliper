import React, { useContext } from "react";
import { View, Text } from "react-native";
import SwitchComponent from "../components/SwitchComponent";
import { SettingsContext } from "../contexts/SettingsContext";

import { styles } from "../styles/styles.js";

export function SettingsScreen() {
  
  const {
    settings,
    handleVibrate,
    handleSound,
    handleFlash,
    handleDarkMode,
  } = useContext(SettingsContext);
  console.log("SettingsScreen.js: ", settings);
  console.log("SettingsScreen.js: ", handleVibrate, handleSound, handleFlash, handleDarkMode);

  const switchColors = {
    trackColor: { false: "#ddd ", true: "#81b0ff" },
    thumbColor: "#f4f3f4",
    ios_backgroundColor: "#3e3e3e",
  };

  return (
    <View>
      {/* List of Settings */}

      {/* Vibrate */}
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Vibrate</Text>
        <SwitchComponent
          value={settings.vibrate}
          handleChange={handleVibrate}
          switchColors={switchColors}
        />
      </View>

      {/* Sound */}
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Sound</Text>
        <SwitchComponent
          value={settings.sound}
          handleChange={handleSound}
          switchColors={switchColors}
        />
      </View>

      {/* Flash */}
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Flash</Text>
        <SwitchComponent
          value={settings.flash}
          handleChange={handleFlash}
          switchColors={switchColors}
        />
      </View>

      {/* Dark Mode */}
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <SwitchComponent
          value={settings.darkMode}
          handleChange={handleDarkMode}
          switchColors={switchColors}
        />
      </View>
    </View>
  );
}
