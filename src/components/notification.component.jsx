import React from 'react';
import { connect } from 'react-redux';
import {AlertList} from "react-bs-notifier";

class NotificationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: [
        {id:1, type:'info', headline:'Hello', message:'world'},
        // ,
      ]
    }

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(alert) {
    this.setState({
      alerts: this.state.alerts.filter(item => item.id !== alert.id)
    })
  }

  render() {
    return (
      <AlertList alerts={this.state.alerts} position="bottom-right" timeout={30000} onDismiss={this.onDismiss}/>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps)(NotificationComponent);