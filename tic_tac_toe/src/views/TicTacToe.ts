export default class TicTacToe {
    private message: string;
    private gameBoard: string[];
    private playerTurn: boolean;

    constructor() {
        this.message = 'The game is ready!';
        this.gameBoard = [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ];
        this.playerTurn = true;
    }

    private setMessage(message: string) {
        this.message = message
    }

    public getMessage() {
        return this.message
    }

    public getTabletGame() {
        return this.gameBoard
    }

    private playGame() {
        if(this.playerTurn) {
            this.setMessage('Is the turn of the X')
        } else {
            this.setMessage('Is the turn of the O')
        }
        this.playerTurn = !this.playerTurn;
    }

    init() {
        this.playGame()
    };
}