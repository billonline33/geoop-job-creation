import React, { Component } from "react";
import "./Signin.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../../actions/userActions";
import { bindActionCreators } from "redux";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.loginUser(username, password);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, password } = this.state;
    const { redirect } = this.props;

    if (this.props.isLoggedIn) return <Redirect to="/jobList" />;

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

const mapStateToProps = state => ({
  isLoggedIn: state.authenticationReducer.isLoggedIn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginUser: userActions.loginUser }, dispatch);

Signin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);

export default Signin;
