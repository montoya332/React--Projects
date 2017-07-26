import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Switch } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ticTacToeContainer from './container';

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from 'react-router-dom';

const history = createHistory();

const App = (props) => (<div><AppBar position="static"> <Toolbar> <Typography type="title" color="inherit">  Tic Tac Toe  App  </Typography>  </Toolbar></AppBar>{props.children}</div> );

export const AppRoutes = store => (
	<Router history={history}>
		<App>
			<Switch>
				<Route path="/" component={ticTacToeContainer} />
			</Switch>
		</App>
	</Router>
);

export default AppRoutes;

