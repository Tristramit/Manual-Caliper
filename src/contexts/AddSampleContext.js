import React, { createContext, useContext, useState } from "react";
import {
  extractNumbers,
  currentTimeString,
  average,
  sizesArray,
} from "../utils/functions";
import * as Location from "expo-location";
import { SettingsContext } from "./SettingsContext";
import { Vibration } from "react-native";

export const SampleContext = createContext();

export const SampleProvider = ({ children }) => {

  const { settings } = useContext(SettingsContext); 
  console.log("settings: ", settings);

  const [size, setSize] = useState();
  const [sizeItems, setSizeItems] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleAddSize = async () => {
    let location = await Location.getCurrentPositionAsync({});
    location = JSON.parse(JSON.stringify(location));
    lat = location.coords.latitude;
    long = location.coords.longitude;
    location = "Latitude: " + lat + " Longitude: " + long;
    setLocation(location);
    setSizeItems([
      ...sizeItems,
      {size: extractNumbers(size),latitude: lat,longitude: long,id: currentTimeString()},
    ]);
    if (settings.vibrate) {
       Vibration.vibrate(50);
    }

    setSize(null);
  };

  const deleteSize = (id) => {
    console.log("deleteSize activated on: ", id);
    setSizeItems(sizeItems.filter((sizeItems) => sizeItems.id !== id));
  };

  //Constants
  //Move to contexts later
  const itemsLength = sizeItems.length;
  const itemsAverage = average(sizesArray(sizeItems));

  return (
    <SampleContext.Provider
      value={{
        size,
        setSize,
        sizeItems,
        setSizeItems,
        location,
        setLocation,
        errorMsg,
        setErrorMsg,
        handleAddSize,
        deleteSize,
        itemsLength,
        itemsAverage,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
};
