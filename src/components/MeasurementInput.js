import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { SampleContext } from "../contexts/AddSampleContext.js";
import { styles } from "../styles/styles.js";

// This function is used to extract numbers from a string without rerendering the component
let sizeText = '';
  const textChangeHandler = (char) => {
    sizeText += char.slice(-1);

  }
export function MeasurementInput() {
  const { size, setSize, sizeItems, handleAddSize, itemsAverage } =
    useContext(SampleContext);
  
  const submitHandler = () => {
    setSize(sizeText);
   
  }
  // This useEffect is used to extract numbers from a string without rerendering the component
  // It might be deprecated in the future
  useEffect(() => {
    if (size && size.length > 0) {
      handleAddSize();
      sizeText = '';
    }
  }, [size]);
  

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeSizeWrapper}
      >
        <TextInput
          blurOnSubmit={false}
          style={styles.input}
          value={sizeText}
          onSubmitEditing={() => submitHandler()}
          onChangeText={(char) => (textChangeHandler(char))}
          autoFocus={true}
          showSoftInputOnFocus={false}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
