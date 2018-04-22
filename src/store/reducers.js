import { AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL, SIGN_OUT } from './actionTypes';

const auth = (state = false, action) => {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return { username: action.payload };
    case SIGN_OUT:
    case AUTHORIZATION_FAIL:
      return { errorMessage: action.payload };
    default:
      return state;
  }
};

export default auth;
