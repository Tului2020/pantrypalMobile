import React from 'react';
import { connect } from 'react-redux';
import {View, Text, Image, TextInput, Button, StyleSheet} from 'react-native';
import {storeDataLocal, retrieveDataLocal, removeDataLocal} from '../AsyncStorageHandler'
import { logout } from '../actions/session_actions';


class PantryPage extends React.Component {
  constructor(props) {
    super(props);

    // all bindings
    this.userLogoutAction = this.userLogoutAction.bind(this);

  }

  render() {
    return (
      // 
      <View style={styles.view}>
        <Text>This is the Pantry Page</Text>
        <Button title='Logout' onPress={this.userLogoutAction}/>
      </View>
    )
  }

  userLogoutAction() {
    const {navigation, logout} = this.props;
    logout();
    navigation.navigate('LoginPage')
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
  },
  view: {
    paddingTop: 80,
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
    logout: () => dispatch(logout()),
  }
}

const PantryPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PantryPage);


export default PantryPageContainer;



