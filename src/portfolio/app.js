import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Page from './page';
import './styles.scss';
import 'stylesheets/now-ui-kit.scss';
import './now-ui-kit';

const App = props => (
  <div className="profile-page sidebar-collapse">
    <Page />
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector('#react-app')
);
