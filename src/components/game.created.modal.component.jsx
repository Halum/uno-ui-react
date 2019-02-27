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
        <div class="modal fade" id="gameCreatedModal" tabindex="-1" role="dialog" aria-labelledby="gameCreatedModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="gameCreatedModalLabel">New Game Created</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
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