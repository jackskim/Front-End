import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
