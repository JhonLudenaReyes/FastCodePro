import {
  GET_LIST_ROLES_BY_ROLE,
  SAVE_ROLE_REGISTER,
  EDIT_ROLE_REGISTER,
  SAVE_ROLE_LIST,
  DELETE_ROLE_BY_ID,
} from "../actions/types.js";

const isEmpty = require("is-empty");

//Inicializa el estado inicial del store para los roles de usuario...
const initialState = {
  listRolesByRole: [],
  verification: false,
  role: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    //Almacena en listRolesByRole los roles de usuario por rol en el store...
    case GET_LIST_ROLES_BY_ROLE:
      return {
        ...state,
        listRolesByRole: action.payload,
      };
    //Cambia el estado de verification para confirmar que se hayan guardado los datos correctamente...
    case SAVE_ROLE_REGISTER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case EDIT_ROLE_REGISTER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case SAVE_ROLE_LIST:
      return {
        ...state,
        role: action.payload,
      };
    case DELETE_ROLE_BY_ID:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    default:
      return state;
  }
}
