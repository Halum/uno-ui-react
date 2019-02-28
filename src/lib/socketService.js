import io  from 'socket.io-client';

class SocketService {
  connect(gameId) {
    if(!this.socket || this.socket.disconnected) {
      this.socket = this.socket || io(`http://localhost:3500/${gameId}`);

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
    this.socket && this.socket.on(playerId, callback);
  }
}

export default new SocketService();