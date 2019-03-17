import ReactGA from 'react-ga';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

import Header from './components/header.component';
import Page from './components/page.component';

class App extends Component {
  constructor() {
    super();

    ReactGA.initialize('UA-26734040-4');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Provider store={store}>
        <Header></Header>
        <Page></Page>
      </Provider>
    );
  }
}

export default App;