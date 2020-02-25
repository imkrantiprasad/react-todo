import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return <p>{this.props.todo.title}</p>;
  }
}

export default TodoItem;
