import io  from 'socket.io-client';

const url = ``;
class SocketService {
  connect(gameId) {
    if(!this.socket || this.socket.disconnected) {
      this.socket = this.socket || io(`${url}/${gameId}`);

      this.socket.on('connect', () => {
        console.log('Connected');
      });

      this.socket.on(gameId, console.log);
      this.socket.on('count-down', console.log);
    }
  }

  onGameUpdate(gameId, callback) {
    // it seems not needed
    this.socket && this.socket.on(gameId, callback);
  }

  onPlayerUpdate(playerId, callback) {
    console.log('update')
    this.socket && this.socket.on(playerId, callback);
  }

  takeCard(playerId) {
    this.socket.emit('take-card', playerId);
  }

  timesUp(playerId) {
    this.socket.emit('times-up', playerId);
  }

  playCard(playerId, card) {
    const data = {playerId, card};
    
    this.socket.emit('play-card', data);
  }

  skipCard(playerId) {
    this.socket.emit('skip-card', playerId);
  }
}

export default new SocketService();