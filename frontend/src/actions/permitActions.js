//import axios from "axios";

import { SAVE_PERMIT } from "./types.js";

export const savePermit = (permit) => (dispatch) => {
  dispatch({
    type: SAVE_PERMIT,
    payload: permit,
  });
};
