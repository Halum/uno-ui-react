import io  from 'socket.io-client';

class SocketService {
  connect(gameId) {
    if(!this.socket || this.socket.disconnected) {
      this.socket = this.socket || io(`/${gameId}`);

      this.socket.on('connect', () => {
        console.log('Connected');
      });
    }
  }

  onGameUpdate(gameId, callback) {
    this.socket && this.socket(gameId, callback);
  }

  onPlayerUpdate(playerId, callback) {
    this.socket && this.socket(playerId, callback);
  }
}

export default new SocketService();