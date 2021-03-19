import { SAVE_INFORMATION } from "../actions/types.js";

const initialState = {
  verification: Number,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_INFORMATION:
      return {
        ...state,
        verification: action.payload,
      };
    default:
      return state;
  }
}
