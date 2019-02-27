import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class GameCreatedModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {gameId: null};
  }

  static getDerivedStateFromProps(props, state) {
     if(props.game && props.game.gameId !== state.gameId) {
      $('#gameCreatedModal').modal();
       return {gameId: props.game.gameId};
     }
     return state;
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="gameCreatedModal" tabIndex="-1" role="dialog" aria-labelledby="gameCreatedModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="gameCreatedModalLabel">New Game Created</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Game ID: {this.state.gameId}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps, null)(GameCreatedModalComponent);