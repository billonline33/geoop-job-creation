import React, { Component } from "react";
import "./App.css";
import Signin from "./components/Signin/Signin";
import { BrowserRouter, Route, withRouter, Redirect } from "react-router-dom";
import jobInput from "./components/JobInput/JobInput";
import jobList from "./components/JobList/JobList";
import { PrivateRoute } from "./components/PrivateRoute";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Signin} />
          <Route path="/signin" component={Signin} />
          <PrivateRoute path="/jobList" component={jobList} />
          <PrivateRoute path="/jobInput" component={jobInput} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.authenticationReducer.isLoggedIn
});

App = connect(mapStateToProps)(App);

export default App;
