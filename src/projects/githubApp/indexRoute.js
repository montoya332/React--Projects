import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Switch,Prompt } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import HomeContainer from './homeContainer';
import AlgorithmContainer from './algorithm/container';
import ticTacToeContainer from './ticTacToe/container';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from 'react-router-dom';

const history = createHistory();

const App = (props) => (<div><AppBar position="static"> <Toolbar> <Typography type="title" color="inherit">  React Projects  </Typography>  </Toolbar></AppBar>{props.children}</div> );

export const PublicRoutes = ({store}) => (
	<Switch>
		<Route exact path="/" component={HomeContainer} />
		<Route path="/algorithm" component={AlgorithmContainer} />
		<Route path="/ticTacToe" component={ticTacToeContainer} />
		<Redirect to={{ pathname: '/' }} />
	</Switch>
	);

export const PrivateRoutes = props => (
	<Switch>
		<Route path="/home" component={App} />
	</Switch>
	);

export const AuthPrivateRoutes = withRouter(({ history, store, ...rest }) => {
	const signedInUser = false;
	const appRoutes = [<PublicRoutes key="public" {...rest} />];
	// if (signedInUser) {
	// 	appRoutes.push(<PrivateRoutes key="private" {...rest} />);
	// }
	return <App>{appRoutes}</App>;
});

export const AppRoutes = store => (
	<Router history={history}>
		<AuthPrivateRoutes store={store} />
	</Router>
);

export default AppRoutes;
