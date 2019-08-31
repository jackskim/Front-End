import React from 'react';
import { Route } from 'react-router-dom';
import ItemList from './ItemList.js';
import UpdateItem from './UpdateItem.js';
import UpdateProfile from './UpdateProfile.js';

function DashboardRouter(props) {

  return (
    <React.Fragment>
      <Route 
        exact
        path="/dashboard/itemlist"
        render={renderProps => <ItemList {...renderProps} user={props.user} />}
      />
      <Route 
        exact
        path="/dashboard/updateitem/:itemid"
        render={renderProps => <UpdateItem {...renderProps} />}
      />
      <Route 
        exact
        path="/dashboard/updateprofile"
        render={renderProps => <UpdateProfile {...renderProps} user={props.user} setUser={props.setUser} />}
      />
    </React.Fragment>
  );
}

export default DashboardRouter;
