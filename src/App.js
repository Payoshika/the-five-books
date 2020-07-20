import React from 'react';
import Home from "./LandingPage/Home"
import LectureStyle from "./LecturePage/LectureStyle"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/lecture/:id"> <LectureStyle /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
