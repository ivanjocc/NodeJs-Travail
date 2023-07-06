class Game {
  constructor(name, players) {
    this.name = name;
    this.players = players;
  }

  start() {
    console.log(`Starting ${this.name} game with ${this.players} players.`);
    // Aquí puedes agregar la lógica para iniciar el juego
  }

  end() {
    console.log(`Ending ${this.name} game.`);
    // Aquí puedes agregar la lógica para finalizar el juego
  }
}

module.exports = Game;
