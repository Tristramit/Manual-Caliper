import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SwitchComponent from "../components/SwitchComponent";
//import config from '../config/config.json';
import { StatusBar } from "expo-status-bar";
import useSettingsStore from '../store/settingsStore';

//import styles from '../utils/styles';

export function SettingsScreen(props) {
  const switchColors = {
    trackColor: { false: "#ddd ", true: "#81b0ff" },
    thumbColor: "#f4f3f4",
    ios_backgroundColor: "#3e3e3e",
  };

  const {
    vibrate,
    sound,
    flash,
    darkMode,
    handleVibrate,
    handleSound,
    handleFlash,
    handleDarkMode,
  } = useSettingsStore();
  


  return (
    <View>
      {/* List of Settings */}

      {/* Vibrate */}
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Vibrate</Text>
        <SwitchComponent
          value={vibrate}
          handleChange={handleVibrate}
          switchColors={switchColors}
        />
      </View>

      {/* Sound */}
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Sound</Text>
        <SwitchComponent
          value={sound}
          handleChange={handleSound}
          switchColors={switchColors}
        />
      </View>

      {/* Flash */}
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Flash</Text>
        <SwitchComponent
          value={flash}
          handleChange={handleFlash}
          switchColors={switchColors}
        />
      </View>

      {/* Dark Mode */}
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <SwitchComponent
          value={darkMode}
          handleChange={handleDarkMode}
          switchColors={switchColors}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
  },
});
