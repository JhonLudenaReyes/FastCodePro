import { GET_LIST_USER_ROLES_BY_ROLE } from "../actions/types.js";

//const isEmpty = require("is-empty");

//Inicializa el estado inicial del store para los roles de usuario...
const initialState = {
  listUserRolesByRole: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    //Almacena en listRolesByRole los roles de usuario por rol en el store...
    case GET_LIST_USER_ROLES_BY_ROLE:
      return {
        ...state,
        listUserRolesByRole: action.payload,
      };
    default:
      return state;
  }
}
