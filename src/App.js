import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import PrivateRoute from './components/PrivateRoute.js';
import Logout from './components/Logout.js';
import ItemCardList from './components/ItemCardList.js';

function App() {
  return (
    <div className="App">
      < ItemCardList />
    </div>
  );
}

export default App;


