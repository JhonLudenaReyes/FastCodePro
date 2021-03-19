import axios from "axios";

import {
  GET_LIST_ROLES_BY_ROLE,
  SAVE_ROLE_REGISTER,
  DELETE_ROLE_BY_ID,
} from "./types.js";

//Esta acción obtiene de la base de datos la lista de roles de usuario según los permisos de rol del ususario que está logoneado en el sistema...
export const getListRolesByRole = (role) => (dispatch) => {
  axios
    .get(`/services_fastcode/webapi/roles_service/${role}`)
    .then((res) =>
      dispatch({
        type: GET_LIST_ROLES_BY_ROLE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

//Esta acción recibe como parametro un nuevo rol de usuario y utiliza un webService para almacenarlo en la base de datos...
export const saveRoleRegister = (data) => (dispatch) => {
  axios
    .post(`/services_fastcode/webapi/roles_service`, data)
    .then((res) =>
      dispatch({
        type: SAVE_ROLE_REGISTER,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const deleteRoleById = (roleId) => (dispatch) => {
  axios
    .get(`/services_fastcode/webapi/login_service/${roleId}`)
    .then((res) =>
      dispatch({
        type: DELETE_ROLE_BY_ID,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
