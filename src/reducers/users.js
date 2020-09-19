import { GET_USERS_LIST } from "../actions/userActions";

const initialState = {
  getUsersList: false,
  errorUsersList: false,
  title: "Wahidev Academy ~ ATM",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default users;
