const { RECEIVE_RECIPES } = require("../actions/user_actions");



const recipesReducer = (oldState=[], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_RECIPES:
      return action.recipes
    default:
      return oldState
  }

}


export default recipesReducer;
