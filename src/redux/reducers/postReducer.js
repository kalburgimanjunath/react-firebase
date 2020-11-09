export function postReducer(state = [], action) {
  switch (action.type) {
    case "ADD_POST":
      console.log("reducer state" + state);
      return [...state, action.data];
    default:
      return state;
  }
  console.log(state);
}
