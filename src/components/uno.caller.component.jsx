import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button.component';

class UnoCallerComponent extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
          <Button content="UNO" className="btn-success" wrapperClassName="pt-3"/>
      </div>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps)(UnoCallerComponent);