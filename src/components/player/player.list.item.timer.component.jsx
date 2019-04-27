import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketService from './../../lib/socketService';

class PlayerListItemTimer extends Component {
  constructor(props) {
    super(props);

    this.timerRunning = false;
    this.penaltySubmitted = false;
    this.timer = null;

    this.state = {
      countDown: 0
    };

    this.updateTimerView = this.updateTimerView.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.updateTimerView, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTimerView() {
    const {turn, playerId} = this.props.player;
    let {countDown} = this.state;

    if(turn) {
      // player has the turn, start timer from 100 and 10 for adjustment
      // start the timer only when countdown is not running
      if(!countDown && !this.timerRunning) countDown = 10;
      // timer running, reduce timer
      else countDown--;

      this.timerRunning = true;

      if(!countDown && !this.penaltySubmitted) {
        // timer is up, take a card for penalty
        // submit penalty only once
        socketService.timesUp(playerId);
        this.penaltySubmitted = true;
      }
    } else {
      countDown = 0
      this.timerRunning = false;
      this.penaltySubmitted = false;
    }
    
    if(countDown !== this.state.countDown) {
      this.setState({countDown});
    }
  }

  render() {
    return (
      <li className={'list-group-item'}>
        <div className="progress" style={{height: "5px"}}>
          <div className="progress-bar bg-info" role="progressbar" style={{width: `${this.state.countDown * 10}%`}} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </li>
    );
  }
};

const mapStoreToProps = store => {
  return {
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps)(PlayerListItemTimer);