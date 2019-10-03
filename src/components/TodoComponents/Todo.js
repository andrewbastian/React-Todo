import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  card: {
    width: '50%',
    minWidth: 275
  }
});

class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      task: ''
    };

  }

  render(props) {
    const {
      classes,
      toggleData,
      submitData,
      clearItem,
      addItemTextField,
      submitForm
    } = this.props;
    return (<Card>
      <CardContent>
        <List className={classes.root}>
          <ListItemText style={{
              textDecoration: this.props.task.completed
                ? 'line-through'
                : 'none'
            }} onClick={this.props.toggleData}>Task:
            <br></br>
            <Divider/>
            <ListItemIcon></ListItemIcon>
            {this.props.task.task}
          </ListItemText>
          <Switch edge='end' onClick={() => this.props.toggleData(this.props.task.id)} onChange={`item${this.props.task.completed
              ? "completed"
              : "task"}`} inputProps={{
              'aria-labelledby' : 'switch-list-label-to-do'
            }}></Switch>
        </List>

      </CardContent>
    </Card>);
  }
};

export default withStyles(styles)(Todo);
