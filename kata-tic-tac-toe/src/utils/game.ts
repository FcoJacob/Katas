export default class Game {
  private message: string;
  private gameBoard: string[][];
  private playerTurn: boolean;

  constructor() {
      this.message = '';
      this.gameBoard = [];
      this.playerTurn = true;
  }

  private writeMessage(message: string) {
    this.message = message
    console.log(this.message);
  }

  private startGame() {
    if(this.playerTurn) {
      this.writeMessage('It is the turn of the X: ')
    } else {
      this.writeMessage('It is the turn of the O: ')
    }
  }

  init() {
    this.writeMessage('The game has begun!')
    this.gameBoard = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]
    this.startGame()
  };
}

