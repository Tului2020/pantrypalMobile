import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { storeDataLocal, retrieveDataLocal, removeDataLocal } from '../AsyncStorageHandler'
import { logout } from '../actions/session_actions';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { updateUser } from '../actions/user_actions';



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
          <View style={styles.deleteButton} onStartShouldSetResponder={() => this.removeIngredient(item.name)}> 
          {/* View does not have onPress, instead it has onStartShouldSetResponder function */}
            {/* <Icon name='minus' size={20} onPress={() => this.removeIngredient(item.name)}/> */}
          </View>
        </TouchableOpacity>
      ))
    )
  }

  tileView() {

  }

  addIngredient(item) {
    const { ingredients, updateIngredients } = this.props;
    const newIngredients = Object.assign({}, ingredients, item);
    updateIngredients(newIngredients);

  }

  removeIngredient(name) {
    // redux
    const { ingredients, updateIngredients } = this.props;
    const newIngredients = ingredients.filter(el => el.name !== name);
    updateIngredients(newIngredients);

    // MongoDB

  }



}

const styles = StyleSheet.create({
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    // borderWidth: 1
  },


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
    // padding: 7,
    fontSize: 18,
    height: 44,
  },

  ingredientsList: {
    // padding: 7,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },

})


const mapStateToProps = ({ entities }) => ({
  ingredients: entities.ingredients
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  updateIngredients: (ingredients) => dispatch(updateUser({ ingredients }, false))
})

const PantryPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PantryPage);


export default PantryPageContainer;



