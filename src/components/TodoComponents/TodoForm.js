import React from 'react';
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
  addItemTextField:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
      addData
    } = this.props;
    return (

      <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>

          <Formik onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
        addData(values.task);
      }, 500);
    }}
    render={({submitForm, isSubmitting, values, setFieldValue}) => (

            <Form onSubmit={this.props.submitData}>
              <Field type="text" name="task" label="Add a task" component={addItemTextField}/>
              <Button type="submit" disabled={isSubmitting} onClick = {submitForm}> <AddIcon/></Button>
            </Form>
            )}
          />
          <Button onClick={this.props.clearItem}><DeleteIcon/>remove completed tasks</Button>

      </Toolbar>
      </AppBar>

    </div>);
  }
}

export default withStyles(styles, { withTheme: true })(TodoForm);
