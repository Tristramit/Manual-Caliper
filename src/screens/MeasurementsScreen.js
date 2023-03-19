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


export function MeasurementsScreen(props) {
  // const [size, setSize] = useState();
  // const [sizeItems, setSizeItems] = useState([]);
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);



  //Get Location
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }
  //   })();
  // }, []);

  //Handlers

  // const handleAddSize = async () => {
  //   let location = await Location.getCurrentPositionAsync({});
  //   location = JSON.parse(JSON.stringify(location));
  //   lat = location.coords.latitude
  //   long = location.coords.longitude
  //   location = 'Latitude: ' + lat + ' Longitude: ' + long
  //   setLocation(location)
  //   // setSizeItems([...sizeItems, [extractNumbers(size), location]]);
  //   setSizeItems([...sizeItems, [extractNumbers(size), lat, long]]);
  //   console.log('SizeItems: ',sizeItems);
   
  //   if (settingState.vibrate) {
  //     Vibration.vibrate(100);
  //   }
  //   //if (props.settingState.sound) {
  //   //play sound
  //   //}
  //   if (settingState.flash) {
  //     //flash screen
  //   }

  //   setSize(null);
  // };

  // const deleteSize = (index) => {
  //   let itemsCopy = [...sizeItems];
  //   itemsCopy.splice(index, 1);
  //   setSizeItems(itemsCopy);
  // };
  
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.sizesWrapper}>
          <Text style={styles.sectionTitle}>Measurements</Text>
          <Text>Number of samples is: {props.sizeItems.length} </Text>
          <Text>The Current Average is: {props.itemsAverage} </Text>
          <View style={styles.items}>
            {/* This is where the sizes will go */}
            {props.sizeItems.map((item, index) => {
              return (
          
                  <Size text={item[0]} key={index} location={item[1]} deleteSize={props.deleteSize} />
                
              );
            })}
            {props.sizeItemsList}
          </View>
         
          
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeSizeWrapper}
        onSubmitEditing={() => props.handleAddSize()}
      >
        <TextInput
          blurOnSubmit={false}
          style={styles.input}
          value={props.size}
          onChangeText={(text) => props.setSize(text)}
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
    alignItems: "center",
  },
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" },

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
