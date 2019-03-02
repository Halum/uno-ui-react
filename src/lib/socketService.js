import io  from 'socket.io-client';
import config from './../config';

const url = `${config.server}:${config.port}`;
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

  playCard(playerId, card) {
    const data = {playerId, card};
    
    this.socket.emit('play-card', data);
  }
}

export default new SocketService();