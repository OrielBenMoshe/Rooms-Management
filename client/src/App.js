import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Verification from "./components/Verification/Verification";
import OpenningPage from "./components/OpenningPage/OpenningPage";
import UserProfile from "./components/userProfile/UserProfile";
import Lobby from "./components/Lobby/Lobby";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

import { UserProvider } from "./Context";


function App() {
  const user = {
    user_id: '5fde115b712de221240ff0e6',
    name: 'דניאל בן דוד',
    phone: '050-3334444',
    email: 'danielBenDa@gmail.com',
    password: '1234',
    regularCustomer: true,
    credit: 8,
    client_reservation: [1,2,3]
  };

  const roomsArray = [
    {
      room_name: "שופר",
      capacity: 4,
      price: 2,
    },
    {
      room_name: "נבל",
      capacity: 7,
      price: 2,
    },
    {
      room_name: "כינור",
      capacity: 7,
      price: 2,
    },
    {
      room_name: "מחול",
      capacity: 10,
      price: 3,
    },
  ];

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
              <li>
                <Link to="/Verification">Verification</Link>
              </li>
            </ul>
            <hr />
            <UserProvider value={user}>
              <Switch>
                <Route exact path="/">
                  <OpenningPage />
                </Route>
                <Route path="/UserProfile">
                  <UserProfile />
                </Route>
                <Route path="/Lobby">
                  <Lobby />
                </Route>
                <Route path="/Verification">
                  <Verification />
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
