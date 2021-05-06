import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import PantryPage from '../components/PantryPage'
import LoginPage from '../components/LoginPage'
import RecipesPage from '../components/RecipesPage'

const screens = {
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
      headerShown: false,
    }
  },
  PantryPage: {
    screen: PantryPage,
  },
  RecipesPage: {
    screen: RecipesPage,
    navigationOptions: {
      headerShown: false,
    }
  }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);


