import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import {joinGame} from './../actions/initialAction';
import Button from './button.component';

class JoinGameModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
      playerName: ''
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

  }

  static getDerivedStateFromProps(props, state) {
    if(props.show) {
      $('#joinGameModal').modal();
      return {show: props.show};
    }
     return state;
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="joinGameModal" tabIndex="-1" role="dialog" aria-labelledby="joinGameModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="joinGameModalLabel">Join A Game</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                  <Button content="Join" className="btn-success col"></Button>
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
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps, {joinGame})(JoinGameModalComponent);