import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route 
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
    </div>
  );
}

export default App;
