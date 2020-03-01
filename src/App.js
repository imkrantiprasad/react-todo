import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Im the title of 1",
        completed: false
      },
      {
        id: 2,
        title: "Im the title of 2",
        completed: true
      },
      {
        id: 3,
        title: "Im the title of 3",
        completed: false
      }
    ]
  }

  // Toggle completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
