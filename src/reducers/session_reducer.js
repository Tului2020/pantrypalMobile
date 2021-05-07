import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  // RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  currentUser: {}
};

const session_reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        currentUser: { id: action.currentUser.id }
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        currentUser: undefined
      };
    default:
      return state;
  }
}

export default session_reducer;
