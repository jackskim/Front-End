import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import CreateProfile from './components/CreateProfile';
import PrivateRoute from './components/PrivateRoute.js';
import Logout from './components/Logout.js';
import Dashboard from './components/Dashboard.js';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <PrivateRoute
        exact
        path="/"
        render={props => <Home {...props} user={user} />}
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
      <Route
        exact
        path="/dashboard:id"
        render={props => <Dashboard {...props} user={user} setUser={setUser} />}
      />
    </div>
  );
}

export default App;
