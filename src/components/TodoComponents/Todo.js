import React from "react";

const Todo = props => {
  return (
    <li
      onClick={() => props.toggleData(props.data.id)}
      className={`item${props.data.doneX ? " doneX" : "data"}`}
    >
      <p>{props.data.data}</p>
    </li>
  );
};

export default Todo;
