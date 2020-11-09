import React from "react";
import firebase from "./firebase";
import { Link, withRouter } from "react-router-dom";
export default class SignUp extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const email = this.getEmail.value;
    const password = this.getPassword.value;
    console.log(email + password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log("signed in");
        // history.replace("/home");
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  render() {
    return (
      <div>
        <h2 className="sign_in">Sign Up</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={input => (this.getEmail = input)}
            placeholder="Enter email"
          />
          <br />
          <br />
          <input
            type="password"
            ref={input => (this.getPassword = input)}
            placeholder="Enter Password"
          />
          <br />
          <br />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}
