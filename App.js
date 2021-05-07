import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginPage from './src/components/LoginPage';
import PantryPage from './src/components/PantryPage';
import RecipesPage from './src/components/RecipesPage';
import RootReducer from './src/reducers/root_reducer';

const Stack = createStackNavigator();
const store = createStore(RootReducer)

console.log(store.getState())

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
            />
            <Stack.Screen
              name="PantryPage"
              component={PantryPage}
            />
            <Stack.Screen
              name="RecipesPage"
              component={RecipesPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

    )
  }

}




export default App;