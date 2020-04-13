import React, { Component } from "react";
import "./App.css";

import Animals from "../Animals/Animals.js";
import Plants from "../Plants/Plants.js";
import Home from "../Home/Home.js";

import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/plants">Plants</Link>
              </li>
              <li>
                <Link to="/animals">Animals</Link>
              </li>
            </ul>

            <div>
              <Route exact path="/" component={Home} />
              <Route path="/plants" component={Plants} />
              <Route path="/animals" component={Animals} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
