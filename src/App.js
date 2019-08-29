import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import CreateProfile from './components/CreateProfile';
import PrivateRoute from './components/PrivateRoute.js';
import Logout from './components/Logout.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import jwtDecode from 'jwt-decode';
import axiosWithAuth from './axiosWithAuth.js';  

function App() {
  const [user, setUser] = useState({});

  useEffect(()=> {
    const token = localStorage.getItem('token');
    if(!token) return;
    const decoded = jwtDecode(token);

    if(!decoded || user.id) return;
    (async () => {
      try {
        const response = await axiosWithAuth().get(`https://umts-backend.herokuapp.com/api/auth/users/${decoded.__uuid}`);
        setUser(response.data.user);
      } catch(error) {
        console.log(error);
      }
    })();
  },[user.id]);


  return (
    <div className="App">
      <PrivateRoute
        exact
        path="/"
        component={props => <Home {...props} user={user} />}
      />
      <Route
        exact
        path="/login"
        render={props => <Login {...props} setUser={setUser} />}
      />
      <Route
        exact
        path="/signup"
        render={props => <SignUp {...props} setUser={setUser} />}
      />
      <Route
        exact
        path="/logout"
        render={props => <Logout {...props} setUser={setUser} />}
      />
      <Route
        exact
        path="/createprofile"
        render={props => <CreateProfile {...props} user={user} />}
      />
      <PrivateRoute
        path="/dashboard"
        component={props => <Dashboard {...props} user={user} setUser={setUser} />}
      />
    </div>
  );
}

export default App;
