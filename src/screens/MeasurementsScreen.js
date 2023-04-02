import React, { useMemo, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from "react-native";
import Size from "../components/Size.js";
import { styles } from "../styles/styles.js";
import { SampleContext } from "../contexts/AddSampleContext.js";
import { MeasurementInput } from "../components/MeasurementInput.js";
import { CurrentSampleStats } from "../components/CurrentSampleStats.js";

export function MeasurementsScreen() {
  const { size, setSize, sizeItems, handleAddSize, itemsAverage } =
    useContext(SampleContext);

  const memoizedSizeItems = useMemo(() => {
    return sizeItems.map((item) => (
      <Size
        text={item.size}
        key={item.id}
        id={item.id}
        longitude={item.longitude}
        latitude={item.latitude}
      />
    ));
  }, [sizeItems]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.sizesWrapper}>
          <CurrentSampleStats />
          
         <View style={styles.items}>{memoizedSizeItems}</View>
        </View>
      </ScrollView>
      <MeasurementInput />
    </View>
  );
}
