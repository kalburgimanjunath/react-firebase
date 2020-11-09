import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./firebase";
import { connect } from "react-redux";
class LoginIn extends React.Component {
  componentWillMount() {}
  handleSubmit = e => {
    e.preventDefault();
    const email = this.getEmail.value;
    const password = this.getPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Signed in");
        this.props.dispatch({ type: "NO_ERROR_RECEIVED" });
        this.props.history.push("/home");
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            required
            ref={input => (this.getEmail = input)}
            placeholder="Enter user email"
          />
          <br />
          <br />
          <input
            type="password"
            ref={input => (this.getPassword = input)}
            placeholder="Enter user password"
          />
          <br />
          <br />
          <button>Sign In</button>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors
});

export default withRouter(connect(mapStateToProps)(LoginIn));
