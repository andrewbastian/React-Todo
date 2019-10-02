import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
const listItems = [
  {
  data: 'Finish this project',
  id: 123,
  doneX: false
},
{
  data: 'Take a nap',
  id: 124,
  completed: false
}
]

  constructor() {
    super()
    this.state={
      neme: 'Andrew',
      toDo: listItems,
      display: listItems
    }
  }
addData = dataName =>{
  const newData = {}
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>



        <h1>Todo List</h1>
        <TodoList/>
        <h2>Add Item</h2>
        <TodoForm />



    </div>

    );
  }
}

export default App;
