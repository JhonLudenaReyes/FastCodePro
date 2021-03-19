import {
  SAVE_REGISTER,
  UPDATE_PASSWORD,
  GET_ALL_REGISTERS,
  GET_LIST_USERS_BY_ROLE,
  SAVE_USER_REGISTER,
  GET_USER,
  DELETE_USER_BY_ID,
  GET_ACTION_TO_DO,
  EDIT_USER_REGISTER,
} from "../actions/types.js";

const isEmpty = require("is-empty");

const initialState = {
  verification: false,
  actionToDo: false,
  registers: [],
  listUsersByRole: [],
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_REGISTER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case GET_ALL_REGISTERS:
      return {
        ...state,
        registers: action.payload,
      };
    case GET_LIST_USERS_BY_ROLE:
      return {
        ...state,
        listUsersByRole: action.payload,
      };
    case SAVE_USER_REGISTER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case EDIT_USER_REGISTER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER_BY_ID:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case GET_ACTION_TO_DO:
      return {
        ...state,
        actionToDo: action.payload,
      };
    default:
      return state;
  }
}
