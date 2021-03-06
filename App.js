import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import LoginPage from './src/components/LoginPage';
import PantryPage from './src/components/PantryPage';
import RecipesPage from './src/components/RecipesPage';
import configureStore from './src/store/store';


const Stack = createStackNavigator();
const store = configureStore()
global.store = store

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PantryPage"
              component={PantryPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RecipesPage"
              component={RecipesPage}
              options={{headerShown: true}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

    )
  }

}




export default App;