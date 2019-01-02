import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './rootReducer';
import routes, {AppRoutes} from './indexRoute';
import createBrowserHistory from 'history/createBrowserHistory';
import 'stylesheets/main.scss';
import './styles.scss';

const history = createBrowserHistory();

injectTapEventPlugin();

const middleware = [ReduxThunk, ReduxPromise];
const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(<Provider store={store}>{AppRoutes(store)}</Provider>, document.querySelector('#react-app'));
