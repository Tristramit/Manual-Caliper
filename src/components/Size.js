import React, { useState, useContext } from "react";
import { View, Text} from "react-native";
import { SampleContext } from "../contexts/AddSampleContext";
import { ListItem, Button, useTheme, Dialog } from "@rneui/themed";

const Size = (props) => {
  const { theme } = useTheme();
  const [dialogVisible, setDialogVisible] = useState(false);
  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };
  const { deleteSize } = useContext(SampleContext);


  return (
    <ListItem.Swipeable
      key={props.id}
      bottomDivider={true}
      containerStyle={{ backgroundColor: theme.colors.white, width: "100%" }}
      leftContent={(reset) => (
        <View>
          <Button
            title="Info"
            onPress={toggleDialog}
            icon={{ name: "info", color: "white" }}
            buttonStyle={{ minHeight: "100%" }}
          />
          <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
            <Dialog.Title title={`Measurement ${props.text}`} />
            {console.log(props)}
            <Text>Longitude is: {props.longitude}</Text>
            <Text>Latitude is: {props.latitude}</Text>
            <Text>ID is: {props.id} </Text>
          </Dialog>
        </View>
      )}
      rightContent={(reset) => (
        <Button
          title="Delete"
          onPress={() => deleteSize(props.id)}
          icon={{ name: "delete", color: "white" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
        />
      )}
    >
      <ListItem.Content>
        <ListItem.Title style={{ color: theme.colors.black }}>
          {props.text}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

export default Size;
