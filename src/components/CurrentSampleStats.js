import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SampleContext } from "../contexts/AddSampleContext.js";

export function CurrentSampleStats() {
  const { sizeItems, itemsAverage } = useContext(SampleContext);

  return (
    <View>
      <Text>Number of samples is: {sizeItems.length} </Text>
      <Text>The Current Average is: {itemsAverage} </Text>
    </View>
  );
}
