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
        render={props => <ItemList {...props} user={props.user} />}
      />
      <Route 
        exact
        path="/dashboard/updateitem"
        render={props => <UpdateItem {...props} user={props.user} />}
      />
      <Route 
        exact
        path="/dashboard/updateprofile"
        render={props => <UpdateProfile {...props} user={props.user} />}
      />
    </React.Fragment>
  );
}

export default DashboardRouter;
