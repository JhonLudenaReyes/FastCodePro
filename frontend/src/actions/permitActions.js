//import axios from "axios";

import { SAVE_PERMIT, SAVE_ACTION } from "./types.js";

export const savePermit = (permit) => (dispatch) => {
  dispatch({
    type: SAVE_PERMIT,
    payload: permit,
  });
};

export const saveAction = (action) => (dispatch) => {
  dispatch({
    type: SAVE_ACTION,
    payload: action,
  });
};
