import React from 'react';

class TodoForm extends React.Component {
constructor() {
    super();
    this.state = {
        data: ''
    };
}

handleChanges = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

submitData = e => {
    e.preventDefault();
    this.props.addData(this.state.data);
    this.setState({
        data: ''
    })
};

render(){
    return(
        <div>
            <form onSubmit={this.submitData}>
                <input
                    type="text"
                    value={this.state.data}
                    name="data"
                    onChange={this.handleChanges}
                />
              <button type="submit">+</button>
            </form>
        </div>
    );
}
}


export default TodoForm;
