import axios from "axios";

import { GET_LIST_USER_ROLES_BY_ROLE } from "./types.js";

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
