import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

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

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor() {
    super()
    this.state={
      neme: 'Andrew',
      toDo: listItems,
      display: listItems
    }
  }
  toggleData = id => {
  this.setState({
    toDo: this.state.toDo.map(data => {
      if (data.id === id) {
        return {
          ...data,
          doneX: !data.doneX
          };
        } else {
        return data;
      }
    })
  });
}

addData = dataName =>{
  const newData = {
    data: dataName,
      id: Date.now(),
      doneX: false
  }
  this.setState({
  toDo: [...this.state.toDo, newData],
  display: [...this.state.toDo, newData],

});
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>



        <h1>Todo List</h1>
        <TodoList
            display={this.state.display}
          />
        <h2>Add Item</h2>
        <TodoForm  addData ={this.addData} />



    </div>

    );
  }
}

export default App;
