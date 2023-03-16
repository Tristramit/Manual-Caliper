import React, { useCallback, useEffect, useState } from "react";
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Vibration} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Sharing from "expo-sharing";
//Screens
import { HomeScreen } from "./src/screens/HomeScreen.js";
import { SettingsScreen } from "./src/screens/SettingsScreen.js";
import { MeasurementsScreen } from "./src/screens/MeasurementsScreen.js";
import { ShareScreen } from "./src/screens/SharingScreen.js";
import { NavigationContainer } from "@react-navigation/native";
//Utils
import { extractNumbers, average } from "./src/utils/functions.js";
//import styles from './src/utils/styles';

const Drawer = createDrawerNavigator();
const config = require("./src/config/config.json");

export default function App() {
  const [settingState, setSettingState] = useState(config);

  const handlers = {
    handleVibrate: () => {
      setSettingState({ ...settingState, vibrate: !settingState.vibrate });
    },
    handleSound: () => {
      setSettingState({ ...settingState, sound: !settingState.sound });
    },
    handleFlash: () => {
      setSettingState({ ...settingState, flash: !settingState.flash });
    },
    handleDarkMode: () => {
      setSettingState({ ...settingState, darkMode: !settingState.darkMode });
    },
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Share" component={ShareScreen} />
          <Drawer.Screen name="Settings">
            {(props) => (
              <SettingsScreen
                {...props}
                state={settingState}
                handlers={handlers}
              />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Measurements">
            {(props) => <MeasurementsScreen {...props} state={settingState} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
});
