import * as React from "react";
import { View, StyleSheet } from "react-native";
import DistributionGraph from "../components/DistributionGraph";
import { styles } from "../styles/styles";

export function HomeScreen(props) {

  return (
    <View style={styles.container}>
      <DistributionGraph values={props.sizeItems}/>
    </View>
  );
}

