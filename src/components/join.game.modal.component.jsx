import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class JoinGameModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                      <input type="text" className="form-control" id="gameIdInput" placeholder="Game ID"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input type="text" className="form-control" id="nameInput" placeholder="Your Name"/>
                    </div>
                  </div>
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

export default connect(mapStoreToProps, null)(JoinGameModalComponent);