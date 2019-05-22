import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActivitySelection from "./ActivitySelection";
import Orders from "./Orders";
import Kitchen from "./Kitchen";
import firebase from "firebase";
import "firebase/auth";

class App extends React.Component {
  constructor() {
    super();
    let user = firebase.auth().currentUser;
    this.state = {
      user
    };
  }

  setUser = () => {
    let user = firebase.auth().currentUser;
    this.setState({ user });
  };

  render() {
    return (
      <div className="App">
        <Navigation user={this.state.user} setUser={this.setUser} />
        <div className="container">
          <div className="row">&nbsp;</div>
          <div className="row d-flex justify-content-center">
            <div className="col-md">
              <Router>
                <div>
                  <Route
                    exact
                    path="/"
                    component={() => (
                      <Login setUser={this.setUser} user={this.state.user} />
                    )}
                  />
                  <Route path="/selection" component={ActivitySelection} />
                  <Route path="/orders" component={Orders} />
                  <Route path="/kitchen" component={Kitchen} />
                </div>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
