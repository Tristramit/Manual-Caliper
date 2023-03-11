//====================================================================To Do: ====================================================================
// 1. Add a button to the right of the size/Swipe left that will allow the user to delete the size and update the average
//

// ===============================================================================================================================================

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Size = (props) => {

  return (
    <TouchableOpacity 
      key={props.index}
      onPress={() => props.deleteSize(props.index)}>
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText} numberOfLines={1} >{props.text}</Text>
      </View>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.location}</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}





// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 2,
//   },
//   itemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // flexWrap: 'wrap'
//   },
//   itemText: {
//     maxWidth: '80%',
//     textAlign: 'right',
//   },
// });

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: 20,
    
  },
  itemText: {
    maxWidth: '93%',
    fontSize: 16,
    marginBottom: 5,
    marginRight: 10,
  },
});

export default Size;