import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class PantryPage extends React.Component {
  render() {
    return (
      // 
      <View>

        <Text>This is the Pantry Page</Text>
        <Button title='button' onPress={() => {
          console.log(AsyncStorage.getItem('jwtToken'))
          console.log('successful button click')
          }}/>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  img: {
    width: `100%`,
    height: `80%`,
    marginTop: `20%`,
    marginRight: 10,
  }
})



export default PantryPage;


