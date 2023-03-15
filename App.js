//Libraries
import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Vibration } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Screens
import { HomeScreen } from './src/screens/HomeScreen.js';
import { SettingsScreen } from './src/screens/SettingsScreen.js'; 
import { MeasurementsScreen } from './src/screens/MeasurementsScreen.js';
import { NavigationContainer } from '@react-navigation/native';
//Utils
import {extractNumbers, average} from './src/utils/functions.js';
//import styles from './src/utils/styles';

  
const Drawer = createDrawerNavigator();
const config = require('./src/config/config.json');


export default function App() {
  const [state, setState] = useState(config);

  
  const handlers = {
    handleVibrate: () => {
      setState({...state, vibrate: !state.vibrate});
    },
    handleSound: () => {
      setState({...state, sound: !state.sound});
    },
    handleFlash: () => {
      setState({...state, flash: !state.flash});
    },
    handleDarkMode: () => {
      setState({...state, darkMode: !state.darkMode});
    }
  };
  

  

  
  

  return (
    
    <View style={styles.container}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings">{props => <SettingsScreen {...props} state={state} handlers={handlers} />}</Drawer.Screen>
        <Drawer.Screen name="Measurements">{props => <MeasurementsScreen {...props} state={state} />}</Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
    </View>
    

  );}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});
