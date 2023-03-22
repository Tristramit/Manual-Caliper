import * as React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import DistributionGraph from "../components/DistributionGraph";

export function HomeScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <DistributionGraph values={props.sizeItems}/>
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
