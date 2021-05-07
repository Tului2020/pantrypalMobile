const { RECEIVE_EXCLUSIONS } = require("../actions/user_actions");



const exclusionsReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_EXCLUSIONS:
      return action.exclusions
    default:
      return oldState
  }

}


export default exclusionsReducer;
