import * as React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



export function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        
      </View>
    );
  }

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
    },
});