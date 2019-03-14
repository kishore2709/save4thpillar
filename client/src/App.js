import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
