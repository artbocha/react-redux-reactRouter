import { combineReducers } from 'redux';
import { AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL, SIGN_OUT } from './actionTypes';

const auth = (state = false, action) => {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return true;
    case SIGN_OUT:
    case AUTHORIZATION_FAIL:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isAuthorized: auth
});
