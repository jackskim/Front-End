import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import CreateProfile from './components/CreateProfile';
import PrivateRoute from './components/PrivateRoute.js';
import Logout from './components/Logout.js';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <PrivateRoute
        exact
        path="/"
        component={Home}
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
        component={Logout}
      />
      <Route
        exact
        path="/createprofile"
        render={props => <CreateProfile {...props} user={user} />}
      />
    </div>
  );
}

export default App;