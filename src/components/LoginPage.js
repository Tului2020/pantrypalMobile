import React from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';


import { login } from '../actions/session_actions';
import axios from 'axios';
import computerIPAddress from '../../IPAddress'
import {storeDataLocal, retrieveDataLocal, removeDataLocal} from '../AsyncStorageHandler'



class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // all bindings
    this.userLoginAction = this.userLoginAction.bind(this);
    this.pressHandler = this.pressHandler.bind(this);
    this.emailInput = this.emailInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.changeStoragePhrase = this.changeStoragePhrase.bind(this);

    // declaring state
    this.state = {email: 'demo@gmail.com', password: '123456', tempPhrase: ''}

  }

  render() {
    // debugger
    return (
      <View style={styles.view}>
        {/* <Image source={require('../images/pantrypal.png')} style={styles.img}/> */}
        <View style={styles.view}>
          <TextInput value={this.state.email} placeholder='Email' style={styles.input} onChangeText={this.emailInput}/>
          <TextInput value={this.state.password} placeholder='Password' style={styles.input} onChangeText={this.passwordInput} secureTextEntry={true}/>
        </View>
        <Button title='Login' onPress={this.userLoginAction}/>
        <Button title='Demo' onPress={this.pressHandler}/>

        {/* <TextInput value={this.state.tempPhrase} placeholder='TempStorage' style={styles.input} onChangeText={this.changeStoragePhrase}/> */}

        {/* <Button title='Save Data' onPress={() => storeDataLocal(this.state.tempPhrase)}/>
        <Button title='See Data' onPress={() => retrieveDataLocal()}/>
        <Button title='Remove Data' onPress={() => removeDataLocal()}/> */}


      </View>
    )
  }

  changeStoragePhrase(storagePhrase) {
    this.setState({tempPhrase: storagePhrase})
  }




  emailInput(email) {
    this.setState({email})
  }

  passwordInput(password) {
    this.setState({password})
  }


  pressHandler() {
    this.setState({email: 'demo@gmail.com', password: '123456'})
    this.userLoginAction();
  }

  userLoginAction() {
    let { email, password } = this.state
    let user = { email, password };

    const {navigation, login} = this.props;
    login(user)

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





const mapStateToProps = ({errors, session}) => {
  return {
    errors: errors.session,
    isAuthenticated: session.isAuthenticated
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



