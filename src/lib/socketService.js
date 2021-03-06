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
    this.socket && this.socket.on(gameId, callback);
  }

  onPlayerUpdate(playerId, callback) {
    this.socket && this.socket.on(playerId, callback);
  }

  callUno(playerId) {
    this.socket.emit('call-uno', playerId);
  }

  playCard(playerId, card) {    
    this.socket.emit('play-card', {playerId, card});
  }

  skipCard(playerId) {
    this.socket.emit('skip-card', playerId);
  }

  takeCard(playerId) {
    this.socket.emit('take-card', playerId);
  }

  timesUp(playerId) {
    this.socket.emit('times-up', playerId);
  }

  viewCards(playerId, playerName) {
    this.socket.emit('view-cards', {playerId, playerName});
  }
}

export default new SocketService();