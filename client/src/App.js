import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from 'react-router-dom';

import OpenningPage from "./components/OpenningPage/OpenningPage";
import UserProfile from "./components/userProfile/UserProfile";
import Lobby from "./components/Lobby/Lobby";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import { UserProvider } from './Context';

function App() {

  const user = {
    name: 'דניאל',
    surName: 'בן דוד',
    city: 'בנימין' ,
    credit: 8,
    pasword: '1234',
  };

  const roomsArray = [
    {
      room_name: "שופר",
      capacity: 4,
      price: 2
    },
    {
      room_name: "נבל",
      capacity: 7,
      price: 2
    },
    {
      room_name: "כינור",
      capacity: 7,
      price: 2
    },
    {
      room_name: "מחול",
      capacity: 10,
      price: 3
    },
  ]
  

  return (
  
    <ThemeProvider theme={theme}>
      <div dir="rtl">
      <CssBaseline /> 
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">OpenningPage</Link>
            </li>
            <li>
              <Link to="/UserProfile">UserProfile</Link>
            </li>
            <li>
              <Link to="/Lobby">Lobby</Link>
            </li>
          </ul>
          <hr />  
          <UserProvider value={user}>
            <Switch>
              <Route exact path="/">
                <OpenningPage/>
              </Route>
              <Route path="/UserProfile">
                <UserProfile />
              </Route>
              <Route path="/Lobby">
                <Lobby />
              </Route>
            </Switch>
          </UserProvider>
        </div>
      </Router>
      </div>
    </ThemeProvider>

  );
}

export default App;
