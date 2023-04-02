import React, { useState, useContext } from "react";
import { View } from "react-native";
import { SampleContext } from "../contexts/AddSampleContext.js";
import { Dialog, Button, Paragraph, Text } from "@rneui/themed";

export function ResetButtonDialog() {
  const { setSizeItems } = useContext(SampleContext);
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const handleReset = () => {
    setSizeItems([]);
    hideDialog();
  };

  return (
    <View>
      <Button onPress={showDialog} title="Delete Sample" accessibilityLabel="Delete Samples" />
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Reset</Dialog.Title>
        <Text>
          Are you sure you want to delete all samples?
        </Text>
        <Dialog.Actions>
          <Dialog.Button onPress={hideDialog}>Cancel</Dialog.Button>
          <Dialog.Button onPress={handleReset}>Reset</Dialog.Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}


