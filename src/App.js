
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from 'react-router-dom';

import OpenningPage from "./components/OpenningPage/OpenningPage";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import Lobby from "./components/Lobby/Lobby";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import { UserProvider } from './UserContext';

function App() {

  const user = {
    name: 'דניאל',
    surName: 'בן דוד',
    city: 'בנימין' ,
    credit: 100
    };

  return (
  
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">OpenningPage</Link>
            </li>
            <li>
              <Link to="/PersonalArea">PersonalArea</Link>
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
              <Route path="/PersonalArea">
                <PersonalArea />
              </Route>
              <Route path="/Lobby">
                <Lobby />
              </Route>
            </Switch>
          </UserProvider>
        </div>
      </Router>
    </ThemeProvider>

  );
}

export default App;
