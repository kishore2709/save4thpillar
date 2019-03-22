import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, loginUser } from "./actions/authActions";

import store from "./store";
import Navbar from "./components/Layout/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// Token checking
if (localStorage.jwtToken) {
  // set authToken header auth
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // checking expiration Token
  const currentTime = Date.now() / 1000;
  if (decoded.URI < currentTime) {
    store.dispatch(loginUser());
    //  TODO: clear current profile

    // Redirect to login
    window.location.href = "/login";
  }
}

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
