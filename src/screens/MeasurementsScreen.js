
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Platform, Vibration } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { extractNumbers, average } from '../utils/functions.js';
import Size from '../components/Size.js';
import { SettingsScreen } from './SettingsScreen.js';




export function MeasurementsScreen(props) {
    const [size, setSize] = useState();
    const [sizeItems, setSizeItems] = useState([]);

  
  
    const handleAddSize = () => {
      {/*Keyboard.dismiss();*/}
      setSizeItems([...sizeItems, extractNumbers(size)]);
      
      if (props.state.vibrate) {
        Vibration.vibrate(100);
      }
      if (props.sound) {
        //play sound
      }
      if (props.flash) {
        //flash screen
      }

      setSize(null);
      console.log('vibrate is: ' + props.state.vibrate);
      console.log('sound is: ' + props.state.sound);
      console.log('flash is: ' + props.state.flash);
    }

      
  
    const completeSize = (index) => {
      let itemsCopy = [...sizeItems];
      itemsCopy.splice(index, 1);
      setSizeItems(itemsCopy)
    }

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'
    >
    <View style={styles.sizesWrapper}>
      <Text style={styles.sectionTitle}>Measurements</Text>
      <Text>Number of samples is: {sizeItems.length}</Text>
      <Text>The Current Average is: {average(sizeItems)} </Text>
      <View style={styles.items}>



        {/* This is where the sizes will go */}
        {
          sizeItems.map((item, index) => {
            return (
              <TouchableOpacity key={index}  onPress={() => completeSize(index)}>
                <Size text={item} /> 
                {/* <LocationComp /> */}
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
      
    </ScrollView>

    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeSizeWrapper}
      onSubmitEditing={() => handleAddSize()}
    >
      <TextInput blurOnSubmit={false} 
      style={styles.input} 
      value={size}
      onChangeText={text => setSize((text))}
      autoFocus={true} 
      showSoftInputOnFocus={false} /> 

    </KeyboardAvoidingView>
    
  </View>
    );
  }

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
  