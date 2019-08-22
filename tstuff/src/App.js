import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';

function App() {
  return (
    <div className="App">
      <Route 
        exact
        path="/login"
        render={props => <Login {...props} /> }
      />
    </div>
  );
}

export default App;
