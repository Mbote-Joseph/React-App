import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
    };
  }

  render() {
    return (
      this.state.loggedIn && (
        <div>
          <h1>You are successfully Logged In</h1>
        </div>
      )
    );
  }
}

export default Login;
