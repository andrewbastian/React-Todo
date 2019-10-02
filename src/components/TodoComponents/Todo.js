import React from "react";

const Todo = props => {
  return (
    <div
      onClick={props.onClick}
      className={`item${props.item.doneX ? " doneX" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
