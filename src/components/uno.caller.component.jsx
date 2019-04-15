import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button.component';
import socketService from './../lib/socketService';

class UnoCallerComponent extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const {playerId} = this.props.player;

    if(playerId) {
      socketService.callUno(playerId);
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
          <Button content="UNO" onClick={this.onButtonClick} className="btn-success" wrapperClassName="pt-3"/>
      </div>
    );
  }
};

const mapStoreToProps = store => {
  return {
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps)(UnoCallerComponent);