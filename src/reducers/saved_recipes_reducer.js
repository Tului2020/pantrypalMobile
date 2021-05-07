const { RECEIVE_SAVED_RECIPES } = require("../actions/user_actions");



const savedRecipesReducer = (oldState=[], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SAVED_RECIPES:
      return action.saved_recipes
    default:
      return oldState
  }

}


export default savedRecipesReducer;
