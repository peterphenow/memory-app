import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      //   console.log('action?.data', action?.data);
      // set login data to local storage so user can stay logged in when site is refreshed
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
