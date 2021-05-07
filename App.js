import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Stacks from './src/components/Stacks';

class App extends React.Component {

  render() {
    return (
      <View style={styles.test}>
        <Stacks/>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  test: {
    width: `100%`,
    height: `100%`,
    backgroundColor: 'white'
  }
})



export default App;