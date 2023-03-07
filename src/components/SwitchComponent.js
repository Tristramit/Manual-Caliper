import React, {useState} from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function SwitchComponent(props) {
    return (
        <View style={styles.container}>
        <Switch
            trackColor={props.switchColors.trackColor}
            thumbColor={props.switchColors.thumbColor}
            ios_backgroundColor={props.switchColors.ios_backgroundColor}
            onValueChange={props.handleChange}
            value={props.value}

            
        />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
