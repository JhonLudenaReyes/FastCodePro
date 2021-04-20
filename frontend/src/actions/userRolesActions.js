import axios from "axios";

import {
  GET_LIST_USER_ROLES_BY_ROLE,
  SAVE_USER_ROLE_REGISTER,
  EDIT_USER_ROLE_REGISTER,
  SAVE_USER_ROLE_LIST,
} from "./types.js";

//Esta acción obtiene de la base de datos la lista de roles de usuario según los permisos de rol del ususario que está logoneado en el sistema...
export const getListUserRolesByRole = (role) => (dispatch) => {
  axios
    .get(`/services_fastcode/webapi/roles_user_two_service/${role}`)
    .then((res) =>
      dispatch({
        type: GET_LIST_USER_ROLES_BY_ROLE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const saveUserRoleRegister = (data) => (dispatch) => {
  axios
    .post(`/services_fastcode/webapi/roles_user_service`, data)
    .then((res) =>
      dispatch({
        type: SAVE_USER_ROLE_REGISTER,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const saveUserRoleList = (userRole) => (dispatch) => {
  dispatch({
    type: SAVE_USER_ROLE_LIST,
    payload: userRole,
  });
};

export const editUserRoleRegister = (data) => (dispatch) => {
  axios
    .put(`/services_fastcode/webapi/roles_user_two_service`, data)
    .then((res) =>
      dispatch({
        type: EDIT_USER_ROLE_REGISTER,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
