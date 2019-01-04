import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Switch } from 'react-router';
import Container from './container';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const history = createHistory();

export const AppRoutes = store => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Container} />
      <Redirect to={{ pathname: '/' }} />
    </Switch>
  </Router>
);

export default AppRoutes;
