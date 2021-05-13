import React from 'react';
import {View, Text, Image, TextInput, Button, StyleSheet} from 'react-native';
import * as AsyncStorageAll from '@react-native-community/async-storage';
const AsyncStorage = AsyncStorageAll.default


class PantryPage extends React.Component {
  render() {
    return (
      // 
      <View>

        <Text>This is the Pantry Page</Text>
        <Button title='button' onPress={() => {
          console.log('successful button click')
          }}/>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    width: 200,
    height: 40,  
  },
  img: {
    width: `100%`,
    height: `80%`,
    marginTop: `20%`,
    marginRight: 10,
  }
})



export default PantryPage;


