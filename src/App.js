import React from 'react';
import Home from "./LandingPage/Home"
import {Nav, Footer} from "./LandingPage/Components/index.js"
import LectureStyle from "./LecturePage/LectureStyle"
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
      <Nav />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/lecture/:id"> <LectureStyle /> </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
