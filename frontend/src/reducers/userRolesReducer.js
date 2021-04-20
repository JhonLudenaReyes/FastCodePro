import {
  GET_LIST_USER_ROLES_BY_ROLE,
  SAVE_USER_ROLE_REGISTER,
  EDIT_USER_ROLE_REGISTER,
  SAVE_USER_ROLE_LIST,
} from "../actions/types.js";

const isEmpty = require("is-empty");

//Inicializa el estado inicial del store para los roles de usuario...
const initialState = {
  verification: false,
  listUserRolesByRole: [],
  userRole: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    //Almacena en listRolesByRole los roles de usuario por rol en el store...
    case GET_LIST_USER_ROLES_BY_ROLE:
      return {
        ...state,
        listUserRolesByRole: action.payload,
      };
    case SAVE_USER_ROLE_REGISTER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case EDIT_USER_ROLE_REGISTER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case SAVE_USER_ROLE_LIST:
      return {
        ...state,
        userRole: action.payload,
      };
    default:
      return state;
  }
}
