import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import {joinGame} from './../actions/initialAction';
import Button from './button.component';
import { toggleJoinGameModal } from './../actions/uiAction';

class JoinGameModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.ui.showJoinGameModal,
      gameId: '12345',
      playerName: 'Sajjad'
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onJoinClick = this.onJoinClick.bind(this);
  }

  onInputChange(e) {
    const property = e.target.name;
    const value = e.target.value;
    
    this.setState({[property]: value});
  }

  onJoinClick() {
    const {gameId, playerName} = this.state;
    this.props.joinGame({gameId, playerName});
    this.props.toggleJoinGameModal();
  }

  static getDerivedStateFromProps(props, state) {
    const show = props.ui.showJoinGameModal;
    const action = show ? 'show' : 'hide';

    if(show !== state.show) {
      $('#joinGameModal').modal(action);
    }
    return {show};
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="joinGameModal" tabIndex="-1" role="dialog" aria-labelledby="joinGameModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="joinGameModalLabel">Join A Game</h5>
                <button type="button" onClick={()=>this.props.toggleJoinGameModal()} className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group row">
                    <div className="col">
                      <input type="text" className="form-control" onChange={this.onInputChange}
                        name="gameId" placeholder="Game ID" value={this.state.gameId}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input type="text" className="form-control" onChange={this.onInputChange}
                        name="playerName" placeholder="Your Name" value={this.state.playerName}/>
                    </div>
                  </div>
                  <Button content="Join" onClick={this.onJoinClick} 
                    className="btn-success col"></Button>
                </form>
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
    game: store.initializer.game,
    ui: store.ui
  };
};

export default connect(mapStoreToProps, {joinGame, toggleJoinGameModal})(JoinGameModalComponent);