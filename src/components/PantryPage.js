import React from 'react';
import { connect } from 'react-redux';
import {View, Text, Image, TextInput, Button, StyleSheet, FlatList} from 'react-native';
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
        {this.listView()}
      </View>
    )
  }

  updateSearch(newSearchVal) {
    this.setState({searching: newSearchVal})
  }



  listView() {
    const { ingredients } = this.props;
    console.log(ingredients.map(el => ({key: el.name})))


    return (
      <FlatList
        data={ingredients.map(el => ({key: el.name}))}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    )
  }

  tileView() {

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
  },
  ingredientsContainer: {
    flex: 1,
    paddingTop: 22
   },
   item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


const mapStateToProps = ({entities}) => ({
  ingredients: entities.ingredients
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})

const PantryPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PantryPage);


export default PantryPageContainer;



