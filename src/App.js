import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';

function App() {
  return (
    <div className="App">
      <Route 
        exact
        path="/login"
        render={props => <Login {...props} /> }
      />
      <Route
        exact
        path="/signup"
        render={props => <SignUp {...props} /> }
      />
    </div>
  );
}

export default App;