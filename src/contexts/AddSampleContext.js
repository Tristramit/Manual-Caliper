// This context is used to add a sample to the list of samples
// At first I used Zustand but I found it to be overkill for what I needed


import React, { createContext, useContext, useState } from "react";
import {
  extractNumbers,
  currentTimeString,
  average,
  sizesArray,
  calculateAverageSize
} from "../utils/functions";
import * as Location from "expo-location";
import { SettingsContext } from "./SettingsContext";
import { Vibration } from "react-native";

export const SampleContext = createContext();

export const SampleProvider = ({ children }) => {

  const { settings } = useContext(SettingsContext); 

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
      {size: extractNumbers(size),latitude: lat,longitude: long,id: currentTimeString()}
    ]);
    if (settings.vibrate) {
       Vibration.vibrate(50);
    }

    setSize(null);
  };

  const deleteSize = (id) => {
    setSizeItems(sizeItems.filter((sizeItems) => sizeItems.id !== id));
  };

  //Constants
  const itemsLength = sizeItems.length;
  const itemsAverage = calculateAverageSize(sizeItems);

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
