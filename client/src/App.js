import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Navbar from "./components/Layout/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div>{this.state.name}</div>
            <Navbar />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
