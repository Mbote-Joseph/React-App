import React from "react";

function ToDoList(props) {
  return (
    <div>
      <input
        type="checkbox"
        value="{props.item.task}"
        // checked={props.item.completed}
      />
      {props.item.task}:- Time {props.item.time}
    </div>
  );
}

export default ToDoList;
