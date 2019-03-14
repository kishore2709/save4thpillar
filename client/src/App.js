import React, { Component } from "react";

import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hi There</h1>
      </div>
    );
  }
}

export default App;
