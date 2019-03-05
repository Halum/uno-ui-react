import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import socketService from './../../lib/socketService';

class ColorChooserModalComponent extends Component {
  constructor() {
    super();
    this.state = {}

    this.onColorClick = this.onColorClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const action = props.show ? 'show' : 'hide';
    $('#colorChooserModal').modal(action);
    return state;
  }

  onColorClick(color) {
    const symbol = this.props.symbol;
    const {playerId} = this.props.player;
    this.props.onClose();
    return socketService.playCard(playerId, {color, symbol});
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="colorChooserModal" tabIndex="-1" role="dialog" aria-labelledby="colorChooserModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="colorChooserModalLabel">Choose Color</h5>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row pb-3">
                    <div className="col-6">
                      <div className="card bg-danger" onClick={() => this.onColorClick('red')}><div className="card-body"></div></div>
                    </div>
                    <div className="col-6">
                      <div className="card bg-success" onClick={() => this.onColorClick('green')}><div className="card-body"></div></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="card bg-primary" onClick={() => this.onColorClick('blue')}><div className="card-body"></div></div>
                    </div>
                    <div className="col-6">
                      <div className="card bg-warning" onClick={() => this.onColorClick('yellow')}><div className="card-body"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => {
  return {
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps)(ColorChooserModalComponent);