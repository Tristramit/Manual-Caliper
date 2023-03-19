import React from "react";
import { AppRegistry,
  StyleSheet,
  Text,
  View } from "react-native";
import {
  VictoryBar,
  VictoryHistogram,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
} from "victory-native";


const values = [
  60.67, 64.86, 60.8, 75.7, 68.61, 67.69, 63.81, 62.16, 74.95, 71.52, 64.1,
  59.12, 62.75, 70.53, 62.51, 78.02, 68.98, 74.08, 60.25, 70.67, 67.81, 71.04,
  58.9,
];

// const valuesObj = values.map((item) => ({Size: item}));
const binSize = 4;
const bins = {};

// Loop through values and assign to bins
values.forEach((value) => {
  // Round size down to nearest bin size
  const bin = Math.floor(value / binSize) * binSize;
  // If bin exists, increment count, otherwise create bin
  bins[bin] = bins[bin] ? bins[bin] + 1 : 1;
});



// Calculate percentages
const totalCount = values.length;
const binData = Object.entries(bins).map(([bin, count]) => {
  const percentage = parseFloat(((count / totalCount) * 100).toFixed(2));
  return { Bin: Number(bin), Percentage: percentage };
});

const binArray = Object.keys(bins).map((item) => Number(item));




export default function DistributionGraph(props) {
  
  return (
    <View style={styles.container}>

      <VictoryChart width={360} theme={VictoryTheme.material} domainPadding={20}>
        {/* <VictoryAxis tickValues={[56,60,64,68,72,76]} tickFormat={[56,60,64,68,72,76]} /> */}
        <VictoryAxis tickValues={binArray} tickFormat={binArray} />
        <VictoryBar
          data={binData}
          x="Bin"
          y="Percentage"
          padding={10}
          barRatio={1}
          alignment="middle"
          labels={({ datum }) => `${datum.Percentage}%`}

        />
        

      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    width: 350,
  },
});
