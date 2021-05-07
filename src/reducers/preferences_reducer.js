const { RECEIVE_PREFERENCES } = require("../actions/user_actions");



const preferencesReducer = (oldState=[], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PREFERENCES:
      return action.preferences
    default:
      return oldState
  }

}


export default preferencesReducer;
