import React from "react";
import "./style.css";
import PostForm from "./PostForm";
import AllPost from "./AllPost";
import {
  BrowserRouter as Router,
  Redirect,
  useHistory,
  useLocation,
  Route
} from "react-router-dom";
import LoginIn from "./LoginIn";
import SignUp from "./SignUp";
import Post from "./Post";
export default function App() {
  return (
    <div>
      <h1>Post It!</h1>
      <Router>
        <div>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Post} />
          <Route exact path="/">
            <LoginIn />
          </Route>
        </div>
      </Router>
    </div>
  );
}
