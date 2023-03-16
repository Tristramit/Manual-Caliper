
import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export function ShareScreen() {
  const [state, setState] = useState();
  const fileUri = FileSystem.cacheDirectory + "test.csv";
  const csv = `Size,Latitude,Longitude
  17.13,39.4624999,-0.3726951
  30.34,39.4624999,-0.3726951
  37.82,39.4624999,-0.3726951
  54.13,39.4624999,-0.3726951`;

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
      mimeType: 'text/csv',
      dialogTitle: 'Share CSV',
      UTI: 'text/csv',
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});