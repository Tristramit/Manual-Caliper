import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Vibration,
} from "react-native";
import { extractNumbers, average } from "../utils/functions.js";
import Size from "../components/Size.js";
import playSound from "../utils/playSound.js";
import * as Location from "expo-location";

export function MeasurementsScreen(props) {
  const [size, setSize] = useState();
  const [sizeItems, setSizeItems] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  //Get Location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let locationText = 'Waiting..';
  if (errorMsg) {
      locationText = errorMsg;
    console.log(errorMsg);
  } else if (location) {
    let locationText = JSON.stringify(location);
    console.log(locationText);
  }

  //Handlers

  const handleAddSize = () => {
    setSizeItems([...sizeItems, [extractNumbers(size), locationText]]);  

    if(locationText){

    }
    if (props.state.vibrate) {
      Vibration.vibrate(100);
    }
    //if (props.sound) {
    //play sound
    //}
    if (props.flash) {
      //flash screen
    }

    setSize(null);
  };

  const deleteSize = (index) => {
    let itemsCopy = [...sizeItems];
    itemsCopy.splice(index, 1);
    setSizeItems(itemsCopy);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.sizesWrapper}>
          <Text style={styles.sectionTitle}>Measurements</Text>
          <Text>Number of samples is: {sizeItems.length}</Text>
          <Text>The Current Average is: {average(sizeItems)} </Text>
          <View style={styles.items}>
            {/* This is where the sizes will go */}
            {sizeItems.map((item, index) => {
              return (
          
                  <Size text={item[0]} location={item[1]} key={index} deleteSize={deleteSize} />
                
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeSizeWrapper}
        onSubmitEditing={() => handleAddSize()}
      >
        <TextInput
          blurOnSubmit={false}
          style={styles.input}
          value={size}
          onChangeText={(text) => setSize(text)}
          autoFocus={true}
          showSoftInputOnFocus={false}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  sizesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeSizeWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
});
