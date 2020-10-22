import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    return (
      <div>
        <p>Pure Component does not re-render provided the state is the same</p>
      </div>
    );
  }
}

export default PureComp;
