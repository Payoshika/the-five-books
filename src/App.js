import React from 'react';
import Home from "./LandingPage/Home"
import {Nav, Footer} from "./LandingPage/Components/index.js"
import {Lecture1, Lecture2} from "./LecturePage/index.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrap">
        <Nav />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/lecture/1"> <Lecture1 /> </Route>
            <Route path="/lecture/2"> <Lecture1 /> </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
