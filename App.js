//React
import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import * as Location from "expo-location";
import { ThemeProvider } from "@rneui/themed";

//Screens
import { HomeScreen } from "./src/screens/HomeScreen.js";
import { SettingsScreen } from "./src/screens/SettingsScreen.js";
import { MeasurementsScreen } from "./src/screens/MeasurementsScreen.js";
import { ShareScreen } from "./src/screens/ShareScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "./src/styles/styles.js";
//Contexts
import { SettingsProvider } from "./src/contexts/SettingsContext.js";
import { SampleProvider } from "./src/contexts/AddSampleContext.js";

const Drawer = createDrawerNavigator();

export default function App() {
 
  //Hooks
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);


  return (
    <ThemeProvider>
      <SettingsProvider>
        <SampleProvider>
          <View style={styles.container}>
            <NavigationContainer>
              <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home">
                  {(props) => <HomeScreen {...props} />}
                </Drawer.Screen>
                <Drawer.Screen name="Share">
                  {(props) => <ShareScreen {...props} />}
                </Drawer.Screen>
                <Drawer.Screen name="Settings">
                  {(props) => <SettingsScreen {...props} />}
                </Drawer.Screen>
                <Drawer.Screen name="Measurements">
                  {(props) => (
                    <MeasurementsScreen
                      {...props}
                    />
                  )}
                </Drawer.Screen>
              </Drawer.Navigator>
            </NavigationContainer>
          </View>
        </SampleProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}
