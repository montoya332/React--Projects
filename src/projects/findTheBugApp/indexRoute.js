import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Switch, Prompt } from 'react-router';
import App from './app';
import youTubeContainer from './youTube/container';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';

const history = createHistory();

export const PublicRoutes = ({ store }) => (
  <Switch>
    <Route path="/youTube" component={youTubeContainer} />
    <Redirect to={{ pathname: '/' }} />
  </Switch>
);

export const AuthPrivateRoutes = withRouter(({ history, store, ...rest }) => (
  <App>
    <PublicRoutes key="public" {...rest} />
  </App>
));

export const AppRoutes = store => (
  <Router history={history}>
    <AuthPrivateRoutes store={store} />
  </Router>
);

export default AppRoutes;
