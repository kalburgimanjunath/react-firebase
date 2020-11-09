import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}
export default generateId;
class Post extends React.Component {
  
  handleLogout() {}
  handleSubmit = e => {
    e.preventDefault();
    const title = this.titleInput.value;
    if (title.length < 0) {
      return;
    }
    const message = this.messageInput.value;
    if (message.length < 0) {
      return;
    }
    const id = generateId();
    const newPost = {
      id,
      title,
      message,
      editing: false,
      errorMessage: ""
    };
    console.log(this.props)
    this.props.dispatch({
        type: 'ADD_POST',
        data: newPost
    })
    console.log(title + message);
  };
  render() {
    return (
      <div>
        <div className="post-container">
          <div className="logout-container">
            <h2 className="righter" />
            <button className="logout" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
          <div className="first-stuff">
            <h2 className="post_heading">Post Content</h2>
          </div>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              required
              type="text"
              ref={input => (this.titleInput = input)}
              placeholder="Enter Title for Post"
            />
            <br />
            <br />
            <textarea
              required
              ref={input => (this.messageInput = input)}
              placeholder="Enter the post"
              cols="28"
              rows="5"
            />
            <br />
            <button>Post</button>
          </form>
          {this.props.errors ? (
            <p style={{ color: "#ff7777" }}>{this.props.errors.message}</p>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>({
  posts:state.posts
});
export default connect(mapStateToProps)(Post);
