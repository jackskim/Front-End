import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import PrivateRoute from './components/PrivateRoute.js';
import Logout from './components/Logout.js';

function App() {
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
        component={Login}
      />
      <Route
        exact
        path="/signup"
        component={SignUp}
      />
      <Route
        exact
        path="/logout"
        component={Logout}
      />
    </div>
  );
}

export default App;
