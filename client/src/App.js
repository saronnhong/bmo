import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";


class App extends Component {
  render() {
    return (
      <div className="bmo">
        <div className="row">
          <div className="col-md-3 menuItems">
            <div className="taskList">Task List 1</div>
          </div>
          <div className="col-md-9 componentArea">
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
