// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';
class TodoList extends React.Component {
constructor() {
    super();

    this.state = {
        task: ''
    };

}


render(props){
    return(
        <div className="toDo-list">
            <ul>
                {this.props.display.map(task => (
                    <Todo key={task.id} task={task} toggleData={this.props.toggleData} />
                ))}
            </ul>
        </div>
    )
}}


export default TodoList;
