import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import DistributionGraph from "../components/DistributionGraph";
import { styles } from "../styles/styles";


export function HomeScreen() {


  return (
    <View style={styles.container}>
      <DistributionGraph />
    </View>
  );
}

