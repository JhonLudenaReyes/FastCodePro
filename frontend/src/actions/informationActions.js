import axios from "axios";

import { SAVE_INFORMATION } from "./types.js";

export const saveInformation = (Data) => (dispatch) => {
  axios
    .post(`/services_fastcode/webapi/categoria_curso_service`, Data)
    .then((res) =>
      dispatch({
        type: SAVE_INFORMATION,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};