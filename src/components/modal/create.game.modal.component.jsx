import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './../button.component';
import PropTypes from 'prop-types';
import {createNewGame, joinGame} from './../../actions/initialAction';

class CreateGameModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {playerName: ''};

    this.onCreateClick = this.onCreateClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.getModalBody = this.getModalBody.bind(this);
    this.getModalTitle = this.getModalTitle.bind(this);
  }

  onCreateClick() {
    this.props.createNewGame()
      .then(() => {
        const {gameId} = this.props.game;
        const {playerName} = this.state;

        return this.props.joinGame({gameId, playerName});
      });
  }

  onInputChange(e) {
    const property = e.target.name;
    const value = e.target.value;
    
    this.setState({[property]: value});
  }

  getModalBody() {
    const {gameId} = this.props.game;

    if(gameId) return (<>Game ID: {gameId}</>)
    else return (
      <>
        <div className="form-group row">
          <div className="col">
            <input type="text" className="form-control" onChange={this.onInputChange}
              name="playerName" placeholder="Your Name" value={this.state.playerName}/>
          </div>
        </div>

        <div class="form-group form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">
            Randomize Player
          </label>
        </div>
        <Button content="Create" onClick={this.onCreateClick} 
          className="btn-success col"></Button>
      </>
    );
  }

  getModalTitle() {
    const {gameId} = this.props.game;

    if(gameId) return `Game Created`;
    return 'Create New Game';
  }

  render() {
    const htmlId = this.props.id;

    return (
      <div>
        <div className="modal fade" id={htmlId} tabIndex="-1" role="dialog" aria-labelledby={`${htmlId}Label`} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`${htmlId}Label`}> {this.getModalTitle()} </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.getModalBody()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

CreateGameModalComponent.propTypes = {
  id: PropTypes.string.isRequired
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps, {createNewGame, joinGame})(CreateGameModalComponent);