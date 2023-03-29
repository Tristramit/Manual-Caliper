import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { arrayToCsv } from "../utils/functions";
import { styles } from "../styles/styles";


export function ShareScreen(props) {


  const [state, setState] = useState();
  const fileUri = FileSystem.cacheDirectory + "test.csv";

  // const { handleAddSize } = useSampleStore();

  const csv = arrayToCsv(props.sizeItems);

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
      {/* <Text style={styles.paragraph}>{fileUri}</Text> */}
      <Button title="Share" onPress={handleSharePress} />
      {/* <Button title="Get Location" onPress={handleAddSize} /> */}
    </View>
  );
}

