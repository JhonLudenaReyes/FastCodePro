import { SAVE_PERMIT } from "../actions/types.js";

//const isEmpty = require("is-empty");

//Inicializa el estado inicial del store para los roles de usuario...
const initialState = {
  permit: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_PERMIT:
      return {
        ...state,
        permit: action.payload,
      };
    default:
      return state;
  }
}
