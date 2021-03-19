//import axios from "axios";
import {
  CLEAR_CURRENT_PROFILE
} from "./types.js";

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
