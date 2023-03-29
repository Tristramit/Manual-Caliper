//React
import React, { useEffect, useState, useContext } from "react";
import { View, Vibration } from "react-native";
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
//Utils
import {
  extractNumbers,
  average,
  sizesArray,
  currentTimeString,
} from "./src/utils/functions.js";

const Drawer = createDrawerNavigator();

export default function App() {
  // //States
  // const [size, setSize] = useState();
  // const [sizeItems, setSizeItems] = useState([]);
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  //Handlers

  // const handleAddSize = async () => {
  //   let location = await Location.getCurrentPositionAsync({});
  //   location = JSON.parse(JSON.stringify(location));
  //   lat = location.coords.latitude;
  //   long = location.coords.longitude;
  //   location = "Latitude: " + lat + " Longitude: " + long;
  //   setLocation(location);
  //   setSizeItems([
  //     ...sizeItems,
  //     [extractNumbers(size), lat, long, currentTimeString()],
  //   ]);og("id: ", id);
  //   setSizeItems(sizeItems.filter((sizeItems) => sizeItems[3] !== id));
  // };

  //   setSize(null);
  // };

  // const deleteSize = (id) => {
  //   console.log("id: ", id);
  //   setSizeItems(sizeItems.filter((sizeItems) => sizeItems[3] !== id));
  // };

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

  // //Constants
  // //Move to contexts later
  // const itemsLength = sizeItems.length;
  // const itemsAverage = average(sizesArray(sizeItems));

  return (
    <ThemeProvider>
      <SettingsProvider>
        <SampleProvider>
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
                  {(props) => <SettingsScreen {...props} />}
                </Drawer.Screen>
                <Drawer.Screen name="Measurements">
                  {(props) => (
                    <MeasurementsScreen
                      {...props}
                      // handleAddSize={handleAddSize}
                      // deleteSize={deleteSize}
                      // itemsLength={itemsLength}
                      // itemsAverage={itemsAverage}
                      // sizeItems={sizeItems}
                      // location={location}
                      // size={size}
                      // setSize={setSize}
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
