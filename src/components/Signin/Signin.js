import React, { Component } from "react";
import axios from "axios";
import "./Signin.css";
import { Redirect, withRouter } from "react-router-dom";

const doAuthenticate = (username, password) => {
  let apiUrl = "https://geoserviceuat-api.jobtrakka.com/oauth/token"; //Todo: remove hard code value

  let postData = {
    grant_type: "password",
    login: username,
    password: password
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  };

  return axios.post(apiUrl, postData);
};

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    console.log(" Signin props=", this.props);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted!");

    doAuthenticate(this.state.username, this.state.password)
      .then(response => {
        console.log("doAuthenticate response=", response);
        this.props.onSigninSucceed(); //callback service
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log("Error happened during login", error);
      });
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, password, redirect } = this.state;

    if (redirect) return <Redirect to="/jobList" />;

    return (
      <form
        className="sign_in_form"
        id="sign_in_form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          placeholder="USERNAME"
          className="email"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <label>
          <input className="rem-check" type="checkbox" name="checkbox-sign" />
          <span className="checkbox-rem" />
          <span className="nameremember">Remember me</span>
        </label>

        <input
          type="submit"
          className="button-lardge"
          defaultValue="Sign in"
          style={{ backgroundColor: "rgba(0,0,0,0)" }}
        />
      </form>
    );
  }
}

export default Signin;
