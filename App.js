//Libraries
import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Vibration, Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SplashScreen from 'expo-splash-screen';
//Components
import Size from './src/components/Size';
//Screens
import { HomeScreen } from './src/screens/HomeScreen.js';
import { SettingsScreen } from './src/screens/SettingsScreen.js'; 
import { MeasurementsScreen } from './src/screens/MeasurementsScreen.js';
import { NavigationContainer } from '@react-navigation/native';
//Utils
import {extractNumbers, average} from './src/utils/functions.js';

  
const Drawer = createDrawerNavigator();


export default function App() {
  

  return (
    
    <View style={styles.container}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Measurements" component={MeasurementsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </View>
    

  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  sizesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeSizeWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
