import React from 'react';
import { connect } from 'react-redux';
import {View, Text, Image, TextInput, Button, StyleSheet} from 'react-native';
import {storeDataLocal, retrieveDataLocal, removeDataLocal} from '../AsyncStorageHandler'
import { logout } from '../actions/session_actions';


class PantryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {searching: ''}

    // all bindings
    this.updateSearch = this.updateSearch.bind(this);
    this.userLogoutAction = this.userLogoutAction.bind(this);

  }

  render() {
    return (
      // 
      <View style={styles.view}>
        {this.searchComponent()}
        <Button title='Logout' onPress={this.userLogoutAction}/>
      </View>
    )
  }

  userLogoutAction() {
    const {navigation, logout} = this.props;
    logout();
    navigation.navigate('LoginPage')
  }

  searchComponent() {
    return (
      <View>
        <TextInput style={styles.input} placeholder='Search for ingredients...' value={this.state.searching} onChangeText={this.updateSearch}/>
      </View>
    )
  }

  updateSearch(newSearchVal) {
    this.setState({searching: newSearchVal})
  }

  // componentDidMount() {
  //   debugger
  // }



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



