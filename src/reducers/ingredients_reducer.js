const { RECEIVE_INGREDIENTS } = require("../actions/user_actions");



const ingredientsReducer = (oldState=[], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_INGREDIENTS:
      return action.ingredients
    default:
      return oldState
  }

}


export default ingredientsReducer;
