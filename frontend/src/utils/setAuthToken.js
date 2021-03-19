import axios from "axios";

const setAuthToken = user => {
  if (user) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = user;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;