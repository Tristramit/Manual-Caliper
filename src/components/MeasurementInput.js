import React, { useState, useContext } from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { SampleContext } from "../contexts/AddSampleContext.js";
import { styles } from "../styles/styles.js";

export function MeasurementInput() {
  const { size, setSize, sizeItems, handleAddSize, itemsAverage } =
    useContext(SampleContext);

  return (
    <View>
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
