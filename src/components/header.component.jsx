import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button.component';
import CreateGameModal from './modal/create.game.modal.component';
import JoinGameModal from './join.game.modal.component';
import { createNewGame } from './../actions/initialAction';
import { toggleJoinGameModal } from './../actions/uiAction';
import get from 'lodash.get';
import packageJson from './../../package.json';
import $ from 'jquery';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.createGameModalId = 'createGameModal';
    this.state = {};

    this.onCreateGameClick = this.onCreateGameClick.bind(this);
    this.onJoinGameClick = this.onJoinGameClick.bind(this);
  }

  onCreateGameClick() {
    $(`#${this.createGameModalId}`).modal('show');
  }

  onJoinGameClick() {
    this.props.toggleJoinGameModal();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand h1">Halum Uno <small className="text-muted">&ndash; {packageJson.version}</small></div>
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
          </div>
        </nav>
        <CreateGameModal id={this.createGameModalId} />
        <JoinGameModal show={this.state.showJoinGameModal}></JoinGameModal>
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

export default connect(mapStoreToProps, { createNewGame, toggleJoinGameModal })(HeaderComponent);