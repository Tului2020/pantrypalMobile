import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginPage from './LoginPage';
import PantryPage from './PantryPage';
import RecipesPage from './RecipesPage';

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
