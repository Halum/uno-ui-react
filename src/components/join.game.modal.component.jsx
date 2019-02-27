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
        <div class="modal fade" id="joinGameModal" tabindex="-1" role="dialog" aria-labelledby="joinGameModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="joinGameModalLabel">Join A Game</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <form>
                <div class="form-group row">
                  <div class="col">
                    <input type="text" class="form-control" id="gameIdInput" placeholder="Game ID"/>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input type="text" class="form-control" id="nameInput" placeholder="Your Name"/>
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
  console.log(store);
  return {
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps, null)(JoinGameModalComponent);