import React,{ Component } from 'react';
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity, Container, Text,} from 'react-native';
//import MapView from 'react-native-maps';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Polyline from '@mapbox/polyline';
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
//import Location from "./components/location.js";


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/log-in"}><Image source= "./images/Logo1.jpg"></Image></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/log-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/location"}>Location</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/log-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/location" component={Location} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;