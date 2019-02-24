import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="navbar-brand">Halum Uno</div>
        </nav>
      </div>
    );
  }
};

const mapStoreToProps = store => {
  return {

  };
};

export default connect(mapStoreToProps, null)(HeaderComponent);