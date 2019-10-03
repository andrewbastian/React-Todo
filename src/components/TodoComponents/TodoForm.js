import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MuiTextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Formik, Field, Form} from 'formik';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  MuiTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
});

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      task: ''
    };

  }

  render(props) {
    const {
      classes,
      addItemTextField,
      submitForm
    } = this.props;
    return (<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Formik>
            <Form onSubmit={this.props.submitData} className={classes.container}>
              <Field type="text" name="task" label="Add a task" component={addItemTextField}/>
              <Button type="submit" onClick = {submitForm}> <AddIcon/></Button>
            </Form>
          </Formik>
          <Button onClick={this.props.clearItem}><DeleteIcon/>remove completed tasks</Button>
        </Toolbar>
      </AppBar>

    </div>);
  }
}

export default withStyles(styles)(TodoForm);
