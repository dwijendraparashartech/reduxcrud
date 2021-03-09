import React, { Component } from "react";
import AllPost from "./AllPost.js";
import PostForm from "./PostForm.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <AllPost />
        <h1>Hello React!</h1>
      </div>
    );
  }
}

export default App;
