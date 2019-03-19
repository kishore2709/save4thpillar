import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Layout/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    name: ""
  };

  componentDidMount() {
    axios
      .get("/", (req, res) => {})
      .then((req, res) => {
        console.log(res);
        this.setState({ name: res });
      });
  }

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
