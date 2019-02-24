import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PlayersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>This is players</div>
    );
  }
};

const mapStoreToProps = store => {
  return {

  };
};

export default connect(mapStoreToProps, null)(PlayersComponent);