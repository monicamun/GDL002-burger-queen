import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActivitySelection from "./ActivitySelection";
import Orders from "./Orders";
import Kitchen from "./Kitchen";
// import {breakfast} from "./menu.json";
// console.log(breakfast)
function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <div className="row">&nbsp;</div>
        <div className="row d-flex justify-content-center">
          <div className="col-md">
            <Router>
              <div>
                <Route exact path="/" component={Login} />
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

export default App;
