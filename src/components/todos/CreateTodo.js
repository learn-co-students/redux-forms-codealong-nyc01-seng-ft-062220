import React, { Component } from 'react'
import {connect} from 'react-redux'
import addToDo from '../../actions/addToDo'

class CreateTodo extends Component {

  state = {
    toDo: ""
  }

  changeHandler = (e) => {
    this.setState({toDo: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state.toDo)
    this.setState({toDo: ""})
  }

  render() {
    
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.toDo} onChange={this.changeHandler}/>
          </p>
          <input type="submit" />
        </form>
        {this.props.todos.map(todo => {
          return(
          <li>{todo}</li>
          )
        })}
      </div>
    );
  }
};

const mdp = (dispatch) => {
  return {
    addToDo: (data) => dispatch(addToDo(data))
  }
}

const msp = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(msp, mdp)(CreateTodo);
