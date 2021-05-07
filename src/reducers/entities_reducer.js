import { combineReducers } from 'redux';
import exclusionsReducer from './exclusions_reducer';
import ingredientsReducer from './ingredients_reducer';
import preferencesReducer from './preferences_reducer';
import recipesReducer from './recipes_reducers';
import savedRecipesReducer from './saved_recipes_reducer';


const entitiesReducer = combineReducers({
  preferences: preferencesReducer,
  exclusions: exclusionsReducer,
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
  saved_recipes: savedRecipesReducer
});

export default entitiesReducer;

