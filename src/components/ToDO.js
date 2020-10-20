import React from "react";

function ToDO() {
  return (
    <React.Fragment>
      {" "}
      <input type="checkbox" name="JS" />
      <label>JavaScript</label> <input type="checkbox" name="html" />
      <label>HTML</label>
      <input type="checkbox" name="css" />
      <label>CSS</label>
      <input type="checkbox" name="python" />
      <label>Python</label>
      <input type="checkbox" name="java" />
      <label>Java</label>
    </React.Fragment>
  );
}

export default ToDO;
