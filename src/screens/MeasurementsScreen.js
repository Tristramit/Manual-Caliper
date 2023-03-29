import React, { useMemo, useContext } from "react";
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
import Size from "../components/Size.js";
import { styles } from "../styles/styles.js";
import { SampleContext } from "../contexts/AddSampleContext.js";
import { extractNumbers } from "../utils/functions";


export function MeasurementsScreen(props) {
  const {
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
    itemsAverage,
  } = useContext(SampleContext);
console.log("sizeItems", sizeItems);
console.log("itemsAverage", itemsAverage);

  const memoizedSizeItems = useMemo(() => {
    return sizeItems.map((item) => (
      <Size
        text={item.size}
        key={item.id}
        id={item.id}
        longitude={item.longitude}
        latitude={item.latitude}
        // deleteSize={deleteSize}
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
          <Text>Number of samples is: {sizeItems.length} </Text>
          <Text>The Current Average is: {itemsAverage} </Text>
          <View style={styles.items}>{memoizedSizeItems}</View>
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
          //Should change this so screen doesn't rerender on every keystroke

          onChangeText={(text) => setSize(text)}
          autoFocus={true}
          showSoftInputOnFocus={false}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
