import ReactGA from 'react-ga';
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'react-redux-notify/dist/ReactReduxNotify.css';

import {Provider} from 'react-redux';
import store from './store';
import './App.css';

import Page from './components/page.component';
import { Notify } from 'react-redux-notify';

class App extends Component {
  constructor() {
    super();

    ReactGA.initialize('UA-26734040-4');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Provider store={store}>
        <Page/>
        <Notify position="BottomLeft" showCloseAllBtn={false} />
      </Provider>
    );
  }
}

export default App;