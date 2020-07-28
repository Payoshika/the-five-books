import React from 'react';
import Home from "./LandingPage/Home"
import {Nav, Footer} from "./LandingPage/Components/index.js"
import UserRegister from "./UserPage/UserRegister.js"
import {Lecture1, Lecture2} from "./LecturePage/index.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loggedInStatus : "not_logged_in",
      user : {}
    }
    this.checkLoginStatus = this.checkLoginStatus.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  checkLoginStatus(){
    const url = "http://localhost:3000/logged_in"
    axios.get(url, {withCredentials: true})
    .then(response => this.handleLogin(response.data))
    .catch(error => console.log("ログインチェックエラー", error))
  }

  handleLogin(data){
    this.setState({
      loggedInStatus : "logged_in",
      user: data.user
    })
    console.log("ログインできました", this.state.user);
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "not_logged_in",
      user: {}
    })
    console.log("ログアウトできました");
  }

  componentWillMount(){
    this.checkLoginStatus()
  }

  render(){
    return (
      <Router>
        <div className="wrap">
          <Nav
            user = {this.state.user}
            />
            <Switch>
              <Route
                exact
                path="/"
                render = {props => (<Home {...props}
                loggedInStatus= {this.state.loggedInStatus}
                user = {this.state.user}
                handleLogin = {this.handleLogin}
                handleLogout={this.handleLogout}/>)}
                >
              </Route>
              <Route
                path="/user"
                render = {props => (<UserRegister {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                user = {this.state.user}
                handleLogin = {this.handleLogin}
                />)}
                >
              </Route>
              <Route
                path="/lecture/1"
                render = {props => (<Lecture1 {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                user = {this.state.user}
                />)}
                >
              </Route>
              <Route
                path="/lecture/2"
                render = {props => (<Lecture2 {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                user = {this.state.user}
                />)}
                >
              </Route>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
