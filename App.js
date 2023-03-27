//React
import React, {
  useCallback,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
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
import { ThemeProvider } from "@rneui/themed";

//Screens
import { HomeScreen } from "./src/screens/HomeScreen.js";
import { SettingsScreen } from "./src/screens/SettingsScreen.js";
import { MeasurementsScreen } from "./src/screens/MeasurementsScreen.js";
import { ShareScreen } from "./src/screens/ShareScreen.js";
import { NavigationContainer } from "@react-navigation/native";

//Utils
import {
  extractNumbers,
  average,
  sizesArray,
  currentTimeString,
} from "./src/utils/functions.js";
import useSettingsStore from "./src/store/settingsStore.js";
import useSampleStore from "./src/store/sampleStore.js";

const Drawer = createDrawerNavigator();



export default function App() {
  const settingsState = useSettingsStore()
  const sampleState = useSampleStore()

  //States
  const [size, setSize] = useState();
  const [sizeItems, setSizeItems] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  //Handlers


  const handleAddSize = async () => {
    let location = await Location.getCurrentPositionAsync({});
    location = JSON.parse(JSON.stringify(location));
    lat = location.coords.latitude;
    long = location.coords.longitude;
    location = "Latitude: " + lat + " Longitude: " + long;
    setLocation(location);
    setSizeItems([
      ...sizeItems,
      [extractNumbers(size), lat, long, currentTimeString()],
    ]);
    if (settingsState.vibrate) {
      Vibration.vibrate(50);
    }



    setSize(null);
  };

  const deleteSize = (id) => {
    console.log('id: ', id );
    setSizeItems(sizeItems.filter((sizeItems) => sizeItems[3] !== id));
  };

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

  //Constants
  const itemsLength = sizeItems.length;
  const itemsAverage = average(sizesArray(sizeItems));

  return (
    <ThemeProvider>
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

                />
              )}
            </Drawer.Screen>
            <Drawer.Screen name="Measurements">
              {(props) => (
                <MeasurementsScreen
                  {...props}
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
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
});
