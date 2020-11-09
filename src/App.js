import React from 'react';
import Home from "./LandingPage/Home"
import {Nav, Footer} from "./LandingPage/Components/index.js"
import {UserRegister, UserPage, UserPage9999, UserProfileEdit, UserPasswordUpdate, UserPasswordRegeneration} from "./UserPage"
import MyCourse from "./LecturePage/MyCourse/MyCourse"
import {Lecture1, Lecture2, Lecture3, Lecture4, Lecture5, Lecture9999,  FutureLectures, ComingLectures, BookGuide} from "./LecturePage/index.js"
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
      name : "",
      email : ""
    }
    this.checkLoginStatus = this.checkLoginStatus.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  checkLoginStatus(){
    const apiURL = process.env.REACT_APP_API_URL
    axios.get(`${apiURL}/logged_in`, {withCredentials: true})
    .then(response => {
      this.handleLogin(response.data)
    }
    )
    .catch(error => console.log("ログインチェックエラー", error))
  }

  handleLogin(data){
    this.setState({
      loggedInStatus : "logged_in",
      name: data.user.name,
      email: data.user.email
    })
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "not_logged_in",
      user: {}
    })
    console.log("ログアウトできました");
  }

  componentDidMount(){
    this.checkLoginStatus()
  }

  render(){
    return (
      <Router>
        <div className="wrap">
          <Nav
            name = {this.state.name}
            email = {this.state.email}
            />
            <Switch>
              <Route
                exact
                path="/"
                render = {props => (<Home {...props}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                handleLogin = {this.handleLogin}
                handleLogout={this.handleLogout}/>)}
                >
              </Route>
              <Route
                path="/user"
                render = {props => (<UserRegister {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                handleLogin = {this.handleLogin}
                />)}
                >
              </Route>
              <Route
                path={`/userpage`}
                render = {props => (<UserPage {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                handleLogin = {this.handleLogin}
                handleLogout = {this.handleLogout}
                />)}
                >
              </Route>
              <Route
                path={`/userpage9999`}
                render = {props => (<UserPage9999 {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                handleLogin = {this.handleLogin}
                handleLogout = {this.handleLogout}
                />)}
                >
              </Route>
              <Route
                path={`/UserProfileEdit`}
                render = {props => (<UserProfileEdit {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                handleLogin = {this.handleLogin}
                handleLogout = {this.handleLogout}
                />)}
                >
              </Route>
              <Route
                path={`/UserPasswordUpdate`}
                render = {props => (<UserPasswordUpdate {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                handleLogin = {this.handleLogin}
                handleLogout = {this.handleLogout}
                />)}
                >
              </Route>
              <Route
                path={`/UserPasswordRegeneration`}
                render = {props => (<UserPasswordRegeneration {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                handleLogin = {this.handleLogin}
                handleLogout = {this.handleLogout}
                />)}
                >
              </Route>
              <Route
                path={`/MyCourse`}
                render = {props => (<MyCourse {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                handleLogin = {this.handleLogin}
                handleLogout = {this.handleLogout}
                />)}
                >
              </Route>
              <Route
                path="/lecture/1"
                render = {props => (<Lecture1 {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                />)}
                >
              </Route>
              <Route
                path="/lecture/2"
                render = {props => (<Lecture2 {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                />)}
                >
              </Route>
              <Route
                path="/lecture/3"
                render = {props => (<Lecture3 {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                />)}
                >
              </Route>
              <Route
                path="/lecture/4"
                render = {props => (<Lecture4 {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                />)}
                >
              </Route>
              <Route
                path="/lecture/5"
                render = {props => (<Lecture5 {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                />)}
                >
              </Route>
              <Route
                path="/lecture/9999"
                render = {props => (<Lecture9999 {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                />)}
                >
              </Route>
              <Route
                path="/future_lectures"
                render = {props => (<FutureLectures {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                />)}
                >
              </Route>
              <Route
                path="/coming_lectures"
                render = {props => (<ComingLectures {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
                name = {this.state.name}
                email = {this.state.email}
                />)}
                >
              </Route>
              <Route
                path="/book_guide"
                render = {props => (<BookGuide {...props}
                checkLoginStatus={this.checkLoginStatus}
                loggedInStatus= {this.state.loggedInStatus}
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
