import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button.component';
import GameCreatedModal from './game.created.modal.component';
import { createNewGame } from './../actions/initialAction';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onCreateGameClick = this.onCreateGameClick.bind(this);
  }

  onCreateGameClick() {
    this.props.createNewGame();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand h1">Halum Uno</div>
          <Button content="Create Game" 
            className="btn-outline-success"
            onClick={this.onCreateGameClick}></Button>
        </nav>
        <GameCreatedModal></GameCreatedModal>
      </div>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps, { createNewGame })(HeaderComponent);