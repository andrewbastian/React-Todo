import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import { withStyles } from '@material-ui/core';
import {Typography, Card} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import {
  fieldToTextField,
  TextFieldProps,
} from 'formik-material-ui';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  MuiTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
});

const listItems = [
  {
  task: 'Finish this project',
  id: 123,
  completed: false
},
{
  task: 'Take a nap',
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
      name: 'Andrew',
      toDo: listItems,
      completed: false,
      // classes: styles(),
    }
    this.addData = this.addData.bind(this);
    this.clearItem = this.clearItem.bind(this);
    this.toggleData = this.toggleData.bind(this);
    this.submitData = this.submitData.bind(this);
    this.addItemTextField = this.addItemTextField.bind(this);
  }



addData = taskName =>{
  const newData = {
    task: taskName,
      id: Date.now(),
      completed: false
  }
  this.setState({
  toDo: [...this.state.toDo, newData],
});
}
addItemTextField = (props: TextFieldProps) => (
  <MuiTextField
    {...fieldToTextField(props)}
    onChange={event => {
      event.preventDefault();
      const {value} = event.target;
      props.form.setFieldValue(
        props.field.name,
        value ? value.handleChanges() : ''
      );
    }}
  />
);

clearItem= ()=>{
  this.setState({
    toDo:this.state.toDo.filter(task => !task.completed)
  })
}
toggleData = id => {
this.setState({
  toDo: this.state.toDo.map(task => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed,

        };
      } else {
      return task;
    }
  })
});
}
handleChanges = e => {
  e.preventDefault()
    this.setState({
        [e.target.name]: e.target.value
    });
}

submitData = e => {
    e.preventDefault();
    this.props.addData(this.state.task);
    this.setState({
        task: ''
    })
};

  render(props) {

    return (
      <div>

        <Typography variant ='h2'>Welcome To Andrew's To-Do App!</Typography>
        <TodoForm
              addData ={this.addData}
              clearItem = {this.clearItem}
               />
<Card>
  <Typography variant ="h2" >Todo List</Typography>
        <TodoList
            toDo={this.state.toDo}
            toggleData ={this.toggleData}
          />
</Card>



    </div>

    );
  }
}

export default withStyles(styles)(App);
