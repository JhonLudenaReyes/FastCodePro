import { SAVE_PERMIT, SAVE_ACTION } from "../actions/types.js";

//const isEmpty = require("is-empty");

//Inicializa el estado inicial del store para los roles de usuario...
const initialState = {
  permit: {},
  action: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_PERMIT:
      return {
        ...state,
        permit: action.payload,
      };
    case SAVE_ACTION:
      return {
        ...state,
        action: action.payload,
      };
    default:
      return state;
  }
}
