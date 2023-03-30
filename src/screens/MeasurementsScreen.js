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
          //Also there's a library that listens to the keyboard so there's no need for input and could also run in background

          onChangeText={(text) => setSize(text)}
          autoFocus={true}
          showSoftInputOnFocus={false}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
