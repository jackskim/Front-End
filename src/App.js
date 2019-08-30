import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import CreateProfile from './components/CreateProfile';
import PrivateRoute from './components/PrivateRoute.js';
import Logout from './components/Logout.js';
import Card from './components/Card';
import ItemCardInfo from './components/ItemCardInfo';

function App() {
  const [user, setUser] = useState({});
  const [item, setItem] = useState({});

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
      <Route
        path="/cards/:id" 
        component={Card}
      />
      <Route
        path="/itemcardinfo/:id"
        render={props => <ItemCardInfo {...props} setItem={setItem} />}
      />
    </div>
  );
}

export default App;
