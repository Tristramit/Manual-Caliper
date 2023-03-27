import React, { useState, useEffect, useMemo } from "react";
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
import useSampleStore from "../store/sampleStore.js";

export function MeasurementsScreen(props) {
  //const useSampleStore = useSampleStore();

  const memoizedSizeItems = useMemo(() => {
    return props.sizeItems.map((item) => (
      <Size
        text={item[0]}
        key={item[3]}
        id={item[3]}
        longitude={item[1]}
        latitude={item[2]}
        deleteSize={props.deleteSize}
      />
    ));
  }, [props.sizeItems]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.sizesWrapper}>
          <Text>Number of samples is: {props.sizeItems.length} </Text>
          <Text>The Current Average is: {props.itemsAverage} </Text>
          <View style={styles.items}>{memoizedSizeItems}</View>
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
    paddingTop: 30,
    paddingHorizontal: 20,
    // alignItems: "center",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
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
    // alignItems: "center",
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
