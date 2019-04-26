import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button.component';
import CreateGameModal from './modal/create.game.modal.component';
import JoinGameModal from './modal/join.game.modal.component';
import { createNewGame, leaveGame } from './../actions/initialAction';
import { toggleJoinGameModal } from './../actions/uiAction';
import get from 'lodash.get';
import packageJson from './../../package.json';
import $ from 'jquery';
import socketService from './../lib/socketService';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.createGameModalId = 'createGameModal';

    this.onCreateGameClick = this.onCreateGameClick.bind(this);
    this.onJoinGameClick = this.onJoinGameClick.bind(this);
    this.onLeaveGameClick = this.onLeaveGameClick.bind(this);
  }

  onCreateGameClick() {
    $(`#${this.createGameModalId}`).modal('show');
  }

  onJoinGameClick() {
    this.props.toggleJoinGameModal();
  }

  onLeaveGameClick() {
    const {gameId} = this.props.game;
    const {playerId} = this.props.player;

    this.props
      .leaveGame(gameId, playerId)
      .then(() => socketService.disconnect());
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand h1">Halum UNO <small className="text-muted">&ndash; {packageJson.version}</small>
            <a className="text-muted ml-4" target="_blank" href="https://en.wikipedia.org/wiki/Uno_(card_game)" rel="noopener noreferrer">Rules</a>
          </div>
          <div>
            { get(this.props.player, 'status') === undefined
              ? <Button content="Join Game"
                  className="btn-outline-success" wrapperClassName="pl-3"
                  onClick={this.onJoinGameClick}>
                </Button>
              : ''
            }
            { get(this.props.game, 'gameId') === undefined
              ?  <Button content="Create Game" 
                  className="btn-outline-warning" wrapperClassName="pl-3"
                  onClick={this.onCreateGameClick}>
                </Button>
              : ''
            }
            { get(this.props.player, 'status') !== undefined
              ?  <Button content="Leave Game" 
                  className="btn-outline-danger" wrapperClassName="pl-3"
                  onClick={this.onLeaveGameClick}>
                </Button>
              : ''
            }
          </div>
        </nav>
        <CreateGameModal id={this.createGameModalId} />
        <JoinGameModal />
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

export default connect(mapStoreToProps, { createNewGame, toggleJoinGameModal, leaveGame })(HeaderComponent);