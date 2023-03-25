import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, Button, useTheme, Dialog } from "@rneui/themed";

const Size = (props) => {
  const { theme } = useTheme();
  const [dialogVisible, setDialogVisible] = useState(false);
  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  return (
    <ListItem.Swipeable
      key={props.id}
      bottomDivider={true}
      containerStyle={{ backgroundColor: theme.colors.white, width: "100%" }}
      leftContent={(reset) => (
        
        <View>
          <Button
            title="Info"
            onPress={ toggleDialog}
            icon={{ name: "info", color: "white" }}
            buttonStyle={{ minHeight: "100%" }}
          />
          <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
            <Dialog.Title title={`Measurement ${props.text}`}/>
            <Text>Longitude is: {props.longitude}</Text>
            <Text>Latitude is: {props.latitude}</Text>
            <Text>ID is: {props.id} </Text>
          </Dialog>
        </View>
      )}
      rightContent={(reset) => (
        <Button
          title="Delete"
          onPress={() => props.deleteSize(props.id)}
          icon={{ name: "delete", color: "white" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
        />
      )}
    >
      {/* <Icon name="My Icon" /> */}
      <ListItem.Content>
        <ListItem.Title style={{ color: theme.colors.black }}>
          {console.log("props.text is: ", props.text)}
          {props.text}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

export default Size;
