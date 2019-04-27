import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';

import socketService from '../../lib/socketService';

class PlayerMenuComponent extends Component {
  constructor(props) {
    super(props);

    this.onClaimUno = this.onClaimUno.bind(this);
    this.onKickClick = this.onKickClick.bind(this);
    this.onShowHideClick = this.onShowHideClick.bind(this);
  }

  onClaimUno(event) {
    event.preventDefault();
    socketService.claimUno(this.props.playerName);
  }

  onKickClick(event) {
    event.preventDefault();

    const {playerId} = this.props.player;
    const {playerName} = this.props;

    socketService.kickPlayer(playerId, playerName);
  }

  onShowHideClick(event) {
    event.preventDefault();
    const canSpectate = get(this.props.player, 'status') === 'complete' && !this.props.showingCards;
    if(!canSpectate) return;

    const {playerId} = this.props.player;
    const {playerName} = this.props;

    socketService.viewCards(playerId, playerName);
  }

  render() {
    return (
      <div className={`btn-group dropleft ${this.props.show ? 'visible' : 'invisible'}`}>
        <i className="fa fa-bars" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
        <div className="dropdown-menu">
          <a href="#" className={`dropdown-item`} onClick={this.onClaimUno}>
            <i className="fa fa-user-secret" />
            <span className="ml-2">Claim 'UNO'</span>
          </a>
          <a href="#" className={`dropdown-item`} onClick={this.onKickClick}>
            <i className="fa fa-thumbs-down" />
            <span className="ml-2">Vote to Kick</span>
          </a>
          <a href="#" className={`dropdown-item`} onClick={this.onShowHideClick}>
            <i className="fa fa-eye" />
            <span className="ml-2">Spectate</span>
          </a>
        </div>
      </div>
    );
  }
};

PlayerMenuComponent.defaultProps = {
  show: true,
};

PlayerMenuComponent.propTypes = {
  playerName: PropTypes.string.isRequired,
  show: PropTypes.bool,
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps)(PlayerMenuComponent);