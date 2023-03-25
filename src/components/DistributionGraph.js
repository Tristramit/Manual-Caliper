import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import {
  VictoryBar,
  VictoryHistogram,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
} from "victory-native";
import { sizesArray } from "../utils/functions";



export default function DistributionGraph(props) {
  const values = props.values ? props.values : [];
  const binSize = 4;
  const bins = {};
  if (props.values) {
    sizesArray(props.values).forEach((value) => {
      // Round size down to nearest bin size
      const bin = Math.floor(value / binSize) * binSize;
      // If bin exists, increment count, otherwise create bin
      bins[bin] = bins[bin] ? bins[bin] + 1 : 1;
    });
  }

  // Calculate percentages
  const totalCount = values.length;
  const binData = Object.entries(bins).map(([bin, count]) => {
    const percentage = parseFloat(((count / totalCount) * 100).toFixed(2));
    return { Bin: Number(bin), Percentage: percentage };
  });

  const binArray = Object.keys(bins).map((item) => Number(item));


  return (
    <View style={styles.container}>
      <VictoryChart
        width={360}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
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
