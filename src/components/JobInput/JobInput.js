import React, { Component } from "react";

class JobInput extends Component {
  render() {
    console.log("JobInput.js props=", this.props);
    return (
      <div>
        <h1>This is JobInput page</h1>
        <p>Show the job input here </p>
      </div>
    );
  }
}

export default JobInput;
