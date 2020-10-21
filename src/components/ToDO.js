import React from "react";
import ToDoData from "./ToDoData";
import ToDoList from "./ToDoList";

function ToDO() {
  const itemList = ToDoData.map((item) => (
    <ToDoList key={item.id} item={item} />
  ));
  return (
    <React.Fragment>
      <h3>
        <u>The List of tasks to complete Today</u>
      </h3>
      {itemList}
    </React.Fragment>
  );
}

export default ToDO;
