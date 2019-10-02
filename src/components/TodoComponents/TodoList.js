// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    return(
        <div className="toDo-list">
            <ul>
                {props.display.map(data => (
                    <Todo key={data.id} data={data} toggleData={props.toggleData} />
                ))}
            </ul>
        </div>
    )
};


export default TodoList;
