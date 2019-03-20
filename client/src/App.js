import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Layout/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div>{this.state.name}</div>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
