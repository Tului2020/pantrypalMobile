import React from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.pressHandler = this.pressHandler.bind(this);
    this.state = {username: '', password: ''}

  }

  render() {
    return (
      <View  style={styles.view}>
        <Image source={require('../images/pantrypal.png')} style={styles.img}/>
        <View>
          <TextInput value={this.state.username} placeholder='Username' style={[styles.input, styles.username]}/>
          <TextInput value={this.state.password} placeholder='Password' style={[styles.input, styles.password]}/>
        </View>
        <Button title='Login' onPress={this.pressHandler}/>
      </View>
    )
  }

  usernameInput() {
    this.setState({username})
  }


  pressHandler() {
    const { navigation } = this.props;
    navigation.navigate('PantryPage')
  }

}

const styles = StyleSheet.create({
  img: {
    width: `100%`,
    height: `80%`,
    marginTop: `20%`,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    width: `50%`,
    height: 40,
    position: 'absolute',    
  },


  view: {
    paddingTop: 40,
    alignItems: 'center'
  }
})



export default LoginPage;


