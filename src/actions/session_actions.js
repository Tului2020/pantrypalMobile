import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';
import { updateUser } from './user_actions';
import {storeDataLocal, retrieveDataLocal, removeDataLocal} from '../AsyncStorageHandler'


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";


export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});


export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const receiveUserInfo = (user) => {
  return {
    type: RECEIVE_USER_INFO,
    user,
  };
};

export const signup = user => dispatch => (
  APIUtil.signup(user).then((userInfo) => {
    dispatch(login(user))
  }, err => (
    dispatch(receiveErrors(err.response.data))
  ))
);



export const login = user => dispatch => {
  console.log('clicked')
  APIUtil.login(user)
    .then(res => {
      console.log('success')
      const { token, userInfo } = res.data;
      storeDataLocal(token, 'jwtToken');
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(Object.assign({}, decoded, userInfo)))
      dispatch(updateUser(userInfo, false))
    })
    .catch(err => {
      // console.log(err)
      debugger
      console.log('error has happened')
      dispatch(receiveErrors(err));
    })
} 




export const logout = () => dispatch => {
  removeDataLocal('jwtToken')
  APIUtil.setAuthToken(false)
  dispatch(logoutUser())
};

export const getUserInfo = () => dispatch => {
  return APIUtil.getUserInfo().then((res) =>
    dispatch(receiveUserInfo(res.data))
  );
};