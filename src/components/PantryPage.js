import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { storeDataLocal, retrieveDataLocal, removeDataLocal } from '../AsyncStorageHandler'
import { logout } from '../actions/session_actions';
import Icon from 'react-native-vector-icons/FontAwesome';


class PantryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searching: '', viewType: 'list' }

    // all bindings
    this.updateSearch = this.updateSearch.bind(this);
    this.userLogoutAction = this.userLogoutAction.bind(this);

  }

  render() {

    return (
      // 
      <View style={styles.view}>
        {this.searchComponent()}
        <Button title='Logout' onPress={this.userLogoutAction} />
      </View>
    )
  }

  userLogoutAction() {
    const { navigation, logout } = this.props;
    logout();
    navigation.navigate('LoginPage')
  }

  searchComponent() {
    const { viewType } = this.state;

    return (
      <View>
        <TextInput style={styles.input} placeholder='Search for ingredients...' value={this.state.searching} onChangeText={this.updateSearch} />
        {(viewType === 'list') ? this.listView() : this.tileView()}
      </View>
    )
  }

  updateSearch(newSearchVal) {
    this.setState({ searching: newSearchVal })
  }

  alertItemName = (item) => {
    alert(item.name)
 }

  listView() {
    const { ingredients } = this.props;

    return (
      ingredients.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.ingredientsList}>
          <Text style={styles.text}>
            {item.name}
          </Text>
          <Icon name='minus' size={20}onPress={() => console.log('pressed')}/>
        </TouchableOpacity>
      ))
    )
  }

  tileView() {

  }

  addIngredient() {

  }

  removeIngredient() {

  }



}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    width: 200,
    height: 40,
  },
  view: {
    paddingTop: 40,
    alignItems: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth: 1,
  },

  ingredientsList: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between'
 },
 text: {
    color: '#4f603c'
 }
})


const mapStateToProps = ({ entities }) => ({
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



