import {
  GET_USERS_LIST,
  GET_USER_DETAIL,
  POST_USER_CREATE
} from "../actions/userActions";

const initialState = {
  getUsersList: false,
  errorUsersList: false,
  getUserDetail: false,
  errorUserDetail: false,
  getResponeDataUser: false,
  errorResponeDataUser: false,
  title: "Wahidev Academy ~ ATM"
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage
      };

    case POST_USER_CREATE:
      return {
        ...state,
        getResponeDataUser: action.payload.data,
        errorResponeDataUser: action.payload.errorMessage
      };

    default:
      return state;
  }
};

export default users;
