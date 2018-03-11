import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './containers/App';
import Posts from './containers/Posts';
import AddPost from './containers/AddPost';
import Profile from './containers/Profile';
import Login from './containers/Login';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Posts } />
      <Route path="/posts" component={ Posts } />
      <Route path="/add-post" component={ AddPost } />
      <Route path="/profile" component={ Profile } />
      <Route path="/login" component={ Login } />
    </Route>
  </Router>
);

export default Routes;
