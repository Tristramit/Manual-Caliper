//This screen is only for testing the share function, it could be used in a different screen later


import React, { useEffect, useState, useContext } from "react";
import { Button, Text, View } from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { arrayToCsv } from "../utils/functions";
import { styles } from "../styles/styles";
import { SampleContext } from "../contexts/AddSampleContext.js";


export function ShareScreen(props) {
  const {sizeItems} = useContext(SampleContext);


  const [state, setState] = useState();
  const fileUri = FileSystem.cacheDirectory + "test.csv";


  const csv = arrayToCsv(sizeItems);

  useEffect(() => {
    Sharing.isAvailableAsync().then((available) => {
      if (available) {
        setState("Sharing is available");
      } else {
        setState("Sharing is NOT available");
      }
    });
  }, []);

  const handleSharePress = () => {
    const options = {
      mimeType: "text/csv",
      dialogTitle: "Share CSV",
      UTI: "text/csv",
    };

    FileSystem.writeAsStringAsync(fileUri, csv)
      .then(() => {
        setState("Wrote csv file");
      })
      .catch((err) => {
        setState("Error writing csv file");
        console.log(JSON.stringify(err));
      });

    Sharing.shareAsync(fileUri, options)
      .then(() => {
        setState("Shared");
      })
      .catch((err) => {
        setState("Error sharing csv");
        console.log(JSON.stringify(err));
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{state}</Text>
      <Button title="Share" onPress={handleSharePress} />
    </View>
  );
}

