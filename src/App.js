import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Provider} from 'react-redux';
import store from './store';

import Header from './components/header.component';
import Page from './components/page.component';

class App extends Component {
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
