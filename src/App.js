import React, { Component } from "react";
import "./App.css";
import Signin from "./components/Signin/Signin";
import { BrowserRouter, Route, withRouter, Redirect } from "react-router-dom";
import jobInput from "./components/JobInput/JobInput";
import jobList from "./components/JobList/JobList";

const doAuth = {
  isAuthenticated: false,
  authenticate: function() {
    this.isAuthenticated = true;
    console.log("authenticate here");
  },
  singOut: function() {
    this.isAuthenticated = false;
    console.log("signOut");
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log("Component=", Component);
  // console.log("rest=", rest);
  return (
    <Route
      {...rest}
      render={props =>
        doAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSigninSucceed() {
    doAuth.isAuthenticated = true;
  }

  handleSignOut() {
    doAuth.isAuthenticated = false;
    console.log(doAuth);
    console.log("00002", this);
    //this.props.history.push("/signin");
  }

  render() {
    console.log("App.js props=", this.props);
    console.log("doAuth.isAuthenticated", doAuth.isAuthenticated);
    const MySignin = props => {
      return <Signin onSigninSucceed={this.handleSigninSucceed} {...props} />;
    };

    const AuthButton = () =>
      doAuth.isAuthenticated === true ? (
        <p>
          <button onClick={this.handleSignOut}>Sign Out</button>
        </p>
      ) : (
        <p />
      );

    return (
      <BrowserRouter>
        <div className="App">
          <AuthButton />
          <Route exact path="/" render={MySignin} />
          <Route path="/signin" render={MySignin} />
          <PrivateRoute path="/jobList" component={jobList} />
          <PrivateRoute path="/jobInput" component={jobInput} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
