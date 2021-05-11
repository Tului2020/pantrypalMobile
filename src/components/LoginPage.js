import React from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';


import { login } from '../actions/session_actions';
import axios from 'axios';
import computerIPAddress from '../../IPAddress'



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
    this.setState({username: 'demo@gmail.com', password: '123456'})
  }

  userLoginAction() {
  let user = {
    email: this.state.username,
    password: this.state.password
  };

  this.props.login(user)
    .then(res => console.log(res))
    .catch(err => console.log(err))
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
  },  

  view: {
    paddingTop: 40,
    alignItems: 'center'
  }
})





const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    isAuthenticated: state.session.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
  }
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export default LoginFormContainer;




