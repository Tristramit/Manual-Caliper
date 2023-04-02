import React, {useContext} from "react";
import { View } from "react-native";
import DistributionGraph from "../components/DistributionGraph";
import { styles } from "../styles/styles";
import { Divider, Text } from "@rneui/themed";
import { CurrentSampleStats } from "../components/CurrentSampleStats";
import { ResetButtonDialog } from "../components/ResetButtonDialog.js";

export function HomeScreen() {


  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontWeight:'bold', padding:10}}>Current Sample Stats</Text>
      <CurrentSampleStats />
      <Divider width={3} style={{padding:10}}/>
      <Text style={[styles.title, {paddingTop:25, textAlign:'center', fontWeight:'bold'}]}>Distribution Graph</Text>
      <DistributionGraph />
      <ResetButtonDialog />

    </View>
  );
}

