import React from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native';



class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.userLoginAction = this.userLoginAction.bind(this);
    this.pressHandler = this.pressHandler.bind(this);
    this.usernameInput = this.usernameInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.state = {username: '', password: ''}

  }

  render() {
    return (
      <View style={styles.view}>
        {/* <Image source={require('../images/pantrypal.png')} style={styles.img}/> */}
        <View style={styles.view}>
          <TextInput value={this.state.username} placeholder='Username' style={styles.input} onChangeText={this.usernameInput}/>
          <TextInput value={this.state.password} placeholder='Password' style={styles.input} onChangeText={this.passwordInput} secureTextEntry={true}/>
        </View>
        <Button title='Login' onPress={this.userLoginAction}/>
        <Button title='Demo' onPress={this.pressHandler}/>
      </View>
    )
  }

  usernameInput(username) {
    this.setState({username})
  }

  passwordInput(password) {
    this.setState({password})
  }


  pressHandler() {
    const { navigation } = this.props;
    navigation.navigate('PantryPage')
  }

  userLoginAction() {
    mongoose
      .connect(loginInfo.mongoURI,  { useNewUrlParser: true })
    // console.log([this.state.username, this.state.password])
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
    width: 200,
    height: 40,  
  },
  loginView: {
    position: 'absolute',
    marginTop: 40
    // flex: 2
  },  

  view: {
    paddingTop: 40,
    alignItems: 'center'
  }
})



export default LoginPage;


