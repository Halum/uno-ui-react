import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from './../button.component';
import PropTypes from 'prop-types';
import {createNewGame, joinGame} from './../../actions/initialAction';
import {ClippyIcon} from 'react-octicons';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CreateGameModalComponent = props => {
  const [playerName, setPlayerName] = useState('');
  const [randomizePlayers, setRandomizePlayers] = useState(false);
  const [progressiveUno, setProgressiveUno] = useState(false);
  const [copyTitle, setCopyTitle] = useState('Copy');

  function onCreateClick() {
    props.createNewGame({randomizePlayers, progressiveUno})
      .then((data) => {
        const {gameId} = data.payload;
        return props.joinGame({gameId, playerName});
      });
  }

  function getCopySuccessMessage() {
    return (
      <div className="alert alert-info" role="alert">
        Game ID copied to clipboard.
      </div>
    )
  }

  function getModalBody() {
    const {gameId} = props.game;

    if(gameId) return (
      <>
        <div className="form-group row">
          <label htmlFor="staticGameId" className="col-sm-2 col-form-label font-weight-bold text-nowrap">Game ID:</label>
          <span className="col-sm-8">
            <input type="text" className="form-control" id="staticGameId" value={gameId} readOnly/>
          </span>
          <span className="col-sm-2">
            <CopyToClipboard text={gameId} onCopy={() => {setCopyTitle('Copied')}}>
              <button type="button" className="btn btn-info" title={copyTitle}>
                <ClippyIcon/>
              </button>
            </CopyToClipboard>
          </span>
        </div>
        {copyTitle === 'Copied' 
          ? getCopySuccessMessage()
          : ''
        }
      </>)
    else return (
      <>
        <div className="form-group row">
          <div className="col">
            <input type="text" className="form-control" onChange={e => setPlayerName(e.target.value)}
              name="playerName" placeholder="Your Name" value={playerName}/>
          </div>
        </div>

        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" onChange={e => setProgressiveUno(e.target.checked)} 
              name="randomizePlayers" checked={progressiveUno}/>
            Progresseve Uno
          </label>
        </div>

        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" onChange={e => setRandomizePlayers(e.target.checked)} 
              name="randomizePlayers" checked={randomizePlayers}/>
            Randomize Player
          </label>
        </div>

        <Button content="Create" onClick={onCreateClick} 
          className="btn-success col"></Button>
      </>
    );
  }

  function getModalTitle() {
    const {gameId} = props.game;

    if(gameId) return `Game Created`;
    return 'Create New Game';
  }
    
  const htmlId = props.id;
  return (
    <div className="modal fade" id={htmlId} tabIndex="-1" role="dialog" aria-labelledby={`${htmlId}Label`} aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${htmlId}Label`}> {getModalTitle()} </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {getModalBody()}
          </div>
        </div>
      </div>
    </div>
  );
}

CreateGameModalComponent.propTypes = {
  id: PropTypes.string.isRequired
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps, {createNewGame, joinGame})(CreateGameModalComponent);