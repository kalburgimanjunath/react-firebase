// import { AUTHED_FALSE, AUTHED_TRUE } from "../actionTypes";
export function authReducer(state, action) {
  switch (action.type) {
    case "AUTHED_TRUE":
      return true;
    case "AUTHED_FALSE":
      return false;
    default:
      return state;
  }
}
