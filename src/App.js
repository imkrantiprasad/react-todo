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
        completed: false
      },
      {
        id: 3,
        title: "Im the title of 3",
        completed: false
      }
    ]
  };
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
