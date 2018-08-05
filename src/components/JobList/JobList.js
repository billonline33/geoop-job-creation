import React, { Component } from "react";

class JobList extends Component {
  constructor(props) {
    super(props);
  }

  handleSignOut() {
    this.props.history.push("/signin");
  }

  render() {
    console.log("JobList.js props=", this.props);
    return (
      <div>
        <h1>This is JobList page</h1>
        <p>Show the job list here </p>
        <button onClick={this.handleSignOut.bind(this)}>Sign Out</button>
      </div>
    );
  }
}

export default JobList;
