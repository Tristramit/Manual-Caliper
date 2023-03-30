import React, {useContext} from "react";
import { StyleSheet, View } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import { sizesArray } from "../utils/functions";
import { styles } from "../styles/styles";
import { SampleContext } from "../contexts/AddSampleContext.js";


export default function DistributionGraph() {
  const {sizeItems} = useContext(SampleContext);

  const binSize = 4;
  const bins = {};
  if (sizeItems) {
    sizeItems.forEach((value) => {
      // Round size down to nearest bin size
      const bin = Math.floor(value.size / binSize) * binSize;
      // If bin exists, increment count, otherwise create bin
      bins[bin] = bins[bin] ? bins[bin] + 1 : 1;
    });
  }

  // Calculate percentages
  const totalCount = sizeItems.length;
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

