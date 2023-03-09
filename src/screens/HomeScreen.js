import * as React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import SoundComponent from "../components/SoundComponent";

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={container}>
      <Text>Home Screen</Text>
      {/* <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} /> */}
      <SoundComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
