import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './../button.component';
import PropTypes from 'prop-types';
import {createNewGame, joinGame} from './../../actions/initialAction';
import {ClippyIcon} from 'react-octicons';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class CreateGameModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      randomizePlayers: false,
      copyTitle: 'Copy'
    };

    this.onCreateClick = this.onCreateClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.getModalBody = this.getModalBody.bind(this);
    this.getModalTitle = this.getModalTitle.bind(this);
  }

  onCreateClick() {
    const {randomizePlayers} = this.state;

    this.props.createNewGame({randomizePlayers})
      .then(() => {
        const {gameId} = this.props.game;
        const {playerName} = this.state;

        return this.props.joinGame({gameId, playerName});
      });
  }

  onInputChange(e) {
    const property = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
    this.setState({[property]: value});
  }

  getModalBody() {
    const {gameId} = this.props.game;

    if(gameId) return (
      <>
        <div className="form-group row">
          <label htmlFor="staticGameId" className="col-sm-2 col-form-label font-weight-bold text-nowrap">Game ID:</label>
          <span className="col-sm-8">
            <input type="text" className="form-control" id="staticGameId" value={gameId} readOnly/>
          </span>
          <span className="col-sm-2">
            <CopyToClipboard text={gameId} onCopy={() => {this.setState({copyTitle:'Copied'})}}>
              <button type="button" className="btn btn-info" title={this.state.copyTitle}>
                <ClippyIcon/>
              </button>
            </CopyToClipboard>
          </span>
        </div>
      </>)
    else return (
      <>
        <div className="form-group row">
          <div className="col">
            <input type="text" className="form-control" onChange={this.onInputChange}
              name="playerName" placeholder="Your Name" value={this.state.playerName}/>
          </div>
        </div>

        <div className="form-group form-check">
          <input className="form-check-input" type="checkbox" onChange={this.onInputChange} 
            name="randomizePlayers" checked={this.state.randomizePlayers}/>
          <label className="form-check-label">
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