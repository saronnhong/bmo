import React, { Component } from "react";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="bmo">
        <div className="row">
          <div className="col-md-2 menuItems">
            <div className="taskList">Task List</div>
        </div>
          <div className="col-md-10 componentArea">
            area 2
        </div>
        </div>


      </div>
    );
  }
}

export default App;
