//React
import React, { useCallback, useEffect, useState, useContext, createContext } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Vibration,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import * as Sharing from "expo-sharing";
import * as Location from "expo-location";

//Screens
import { HomeScreen } from "./src/screens/HomeScreen.js";
import { SettingsScreen } from "./src/screens/SettingsScreen.js";
import { MeasurementsScreen } from "./src/screens/MeasurementsScreen.js";
import { ShareScreen } from "./src/screens/ShareScreen.js";
import { NavigationContainer } from "@react-navigation/native";


//Utils
import { extractNumbers, average, sizesArray, currentTimeString } from "./src/utils/functions.js";
//import styles from './src/utils/styles'; Should make a styles file and import it here. 


const Drawer = createDrawerNavigator();
const config = require("./src/config/config.json");
const SizeContext = createContext()

export default function App() {

//States
  const [settingState, setSettingState] = useState(config);
  const [size, setSize] = useState();
  const [sizeItems, setSizeItems] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


//Handlers

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

  const handleAddSize = async () => {
    let location = await Location.getCurrentPositionAsync({});
    location = JSON.parse(JSON.stringify(location));
    lat = location.coords.latitude;
    long = location.coords.longitude;
    location = "Latitude: " + lat + " Longitude: " + long;
    setLocation(location);
    setSizeItems([...sizeItems, [extractNumbers(size), lat, long, currentTimeString()]]);


    if (settingState.vibrate) {
      Vibration.vibrate(100);
    }
    //if (props.settingsState.sound) {
    //play sound
    //}
    if (settingState.flash) {
      //flash screen
    }

    setSize(null);
  };

  // const deleteSize = (index) => {
  //   let itemsCopy = [...sizeItems];
  //   itemsCopy.splice(index, 1);
  //   setSizeItems(itemsCopy);
  // };

  // const deleteSize = (id) => {
  //   console.log("Delete size called with id:", id);
  //   setSizeItems(sizeItems.filter((sizeItems) => sizeItems.id !== id));
  // };
  const deleteSize = (id) => {
    setSizeItems(sizeItems.filter((sizeItems) => sizeItems[3] !== id));
  };


//Effects
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

//Constants
  const itemsLength = sizeItems.length;
  const itemsAverage = average(sizesArray(sizeItems));
 

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Measurements">
          <Drawer.Screen name="Home">
            {(props) => <HomeScreen {...props} sizeItems={sizeItems} />}
          </Drawer.Screen>
          <Drawer.Screen name="Share">
            {(props) => <ShareScreen {...props} sizeItems={sizeItems} />}
          </Drawer.Screen>
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
            {(props) => (
              <MeasurementsScreen
                {...props}
                settingState={settingState}
                handleAddSize={handleAddSize}
                deleteSize={deleteSize}
                itemsLength={itemsLength}
                itemsAverage={itemsAverage}
                sizeItems={sizeItems}
                location={location}
                size={size}
                setSize={setSize}
              />
            )}
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
