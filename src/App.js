import React from 'react';
import Home from "./LandingPage/Home"
import {Nav, Footer} from "./LandingPage/Components/index.js"
import {Lecture1, Lecture2} from "./LecturePage/index.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import axios from "axios"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const userRegister = (name, email, password, password_confirmation) => {
    console.log("function at app.js starts");
    console.log("props are coming", name, email)
    const userRegisterUrl = "http://localhost:3001/user"
    let userData = {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    }
    axios.post(userRegisterUrl, userData)
    .then(
      response => console.log(response)
    )
    .catch(error => console.log(error))
  }

  return (
    <Router>
      <div className="wrap">
        <Nav userRegister={(name, email, password, password_confirmation)=>userRegister(name, email, password, password_confirmation)}/>
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/lecture/1"> <Lecture1 /> </Route>
            <Route path="/lecture/2"> <Lecture2 /> </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
