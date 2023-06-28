import type { Score } from './types'

export default class TicTacToe {
    private message: string;
    private gameBoard: string[];
    private playerTurn: boolean;
    private scoreX: number;
    private scoreO: number;
    private returnGame: boolean;

    constructor() {
        this.message = 'The game is ready!';
        this.gameBoard = [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ];
        this.playerTurn = true;
        this.scoreX = 0;
        this.scoreO = 0;
        this.returnGame = false;
    }

    private setMessage(message: string) {
        this.message = message
    }

    private setPlayerMovementX(index: number) {
        if(this.gameBoard[index] === ' ') {
            this.gameBoard[index] = 'X';
        }
    }

    private setPlayerMovementO(index: number) {
        if(this.gameBoard[index] === ' ') {
            this.gameBoard[index] = 'O';
        }
    }

    private checkWinner(player: string): boolean {
        const winningCombinations: number[][] = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6]
        ];

        for (const combinations of winningCombinations) {
          const [a, b, c] = combinations;
          if (this.gameBoard[a] === player && this.gameBoard[a] === this.gameBoard[b] && this.gameBoard[a] === this.gameBoard[c]) {
            return true;
          }
        }
        return false;
    }

    private checkAllPositionsFilled(): void {
        const allBoxFilledIn = this.gameBoard.every(value => value !== ' ');
        if (allBoxFilledIn) {
            this.setMessage('¡The game ended in a draw!')
            this.returnGame = true;
        }
    }

    private playPlayerX(index: number): void {
        this.setMessage('Is the turn of the X')
        this.setPlayerMovementX(index)
        if (this.checkWinner('X')) {
            this.setMessage('X win!!')
            this.scoreX += 1
            this.returnGame = true;
        } else {
            this.playerTurn = false
            this.setMessage('Is the turn of the O')
        }
    }

    private playPlayerO(index: number): void {
        this.setMessage('Is the turn of the O')
        this.setPlayerMovementO(index)
        if(this.checkWinner('O')) {
            this.setMessage('O win!!')
            this.scoreO += 1
            this.returnGame = true;
        } else {
            this.playerTurn = true
            this.setMessage('Is the turn of the X')
        }
    }

    public play(index: number): void {
        this.playerTurn ? this.playPlayerX(index) : this.playPlayerO(index);
        this.checkAllPositionsFilled()
    }

    public getReturnGame(): boolean {
        return this.returnGame;
    }

    public getMessage(): string {
        return this.message
    }

    public getTabletGame(): Array<string> {
        return this.gameBoard
    }

    public getPlayerTurn(): boolean {
        return this.playerTurn
    }

    public getScore(): Score {
        return {
            playerX: this.scoreX,
            playerO: this.scoreO
        }
    }

    init(): void {
        this.message = 'The game is ready!';
        this.gameBoard = [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ];
        this.playerTurn = true;
        this.returnGame = false;
        this.setMessage('Is the turn of the X')
    }
}
