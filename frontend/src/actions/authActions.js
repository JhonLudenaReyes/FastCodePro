import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
//import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .get(`/services_fastcode/webapi/login_service/${userData.email}/${userData.password}`)
    .then(res => {
      // Save to localStorage
      const user = res.data
      // Set token to localStorage
      //const { token } = res.data;
      //console.log(user)
      localStorage.setItem("jwtToken", user);
      // Set token to Auth header
      setAuthToken(user);
      // Decode token to get user data
      //const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(user));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: ""
      })
    );
};

// Set logged in user
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};