import React, { Component } from "react";
class PostForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form>
          <input required type="text" placeholder="Enter your Post Title" />
          <br />
          <textarea
            required
            rows="5"
            cols="25"
            placeholder="Enter your Message"
          />
          <br />
          <button>Post</button>
        </form>
        <AllPosts posts={this.props.posts} />
      </div>
    );
  }
}
export default PostForm;
