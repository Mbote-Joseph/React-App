import React, { Component } from "react";

class DateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mbote-Joseph",
      age: 22,
    };
  }

  render() {
    // const date = new Date();
    return (
      <React.Fragment>
        {" "}
        <h1>{this.state.name}</h1>
        <h2>At the age of : {this.state.age}</h2>
      </React.Fragment>
    );
  }
}

export default DateComponent;
