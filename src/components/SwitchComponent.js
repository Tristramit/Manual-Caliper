import React from "react";
import { View, Switch } from "react-native";
import { styles } from "../styles/styles";

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
