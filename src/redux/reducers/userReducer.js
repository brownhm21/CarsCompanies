import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, userError: action.payload };
      case USER_LOGOUT:
        return {};
      default:
        return state;
    }
  };
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { userrLoading: true };
    case USER_LOGIN_SUCCESS:
      return { userrLoading: false, userrInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { userrLoading: false, userrError: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
