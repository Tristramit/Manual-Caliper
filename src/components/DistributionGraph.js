import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const values = [60.67, 64.86, 60.8, 75.7, 68.61, 67.69, 63.81, 62.16, 74.95, 71.52, 64.1, 59.12, 62.75, 70.53, 62.51, 78.02, 68.98, 74.08, 60.25, 70.67, 67.81, 71.04, 58.9];
const binSize = 4;
const bins = {};

// Loop through values and assign to bins
values.forEach(value => {
  const bin = Math.floor(value / binSize) * binSize;
  bins[bin] = bins[bin] ? bins[bin] + 1 : 1;
});

// Calculate percentages
const totalCount = values.length;
const binData = Object.entries(bins).map(([bin, count]) => {
  const percentage = parseFloat((count / totalCount * 100).toFixed(2));
  return { Bin: Number(bin), Percentage: percentage };
});

console.log(binData);



const data = binData;

export default function DistributionGraph() {
    return (
      <View style={styles.container}>
        <VictoryChart width={360} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="Bin" y="Percentage" padding={10} />
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
    width: 350
  }
});