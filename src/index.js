import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { authReducer } from "./redux/reducers/authReducer";

import { postReducer } from "./redux/reducers/postReducer";

const reducer = combineReducers({
  authed: authReducer,
  posts: postReducer
});
const store = createStore(
  authReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
