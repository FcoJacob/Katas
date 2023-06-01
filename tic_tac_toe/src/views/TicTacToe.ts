import { ref, type Ref } from 'vue'
import type { Score } from './types'
export default class TicTacToe {
    private message: Ref<string>;
    private gameBoard: Ref<string[]>;
    private playerTurn: Ref<boolean>;
    private scoreX: Ref<number>;
    private scoreO: Ref<number>;
    private returnGame: Ref<boolean>;

    constructor() {
        this.message = ref('The game is ready!');
        this.gameBoard = ref([ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ]);
        this.playerTurn = ref(true);
        this.scoreX = ref(0);
        this.scoreO = ref(0);
        this.returnGame = ref(false);
    }

    private setMessage(message: string) {
        this.message.value = message
    }
    
    private setPlayerMovementX(index: number) {
        if(this.gameBoard.value[index] === ' ') {
            this.gameBoard.value[index] = 'X';
        }
    }

    private setPlayerMovementO(index: number) {
        if(this.gameBoard.value[index] === ' ') {
            this.gameBoard.value[index] = 'O';
        }
    }

    private checkWinner(player: string): boolean {
        const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6]
        ];
      
        for (const combinations of winningCombinations) {
          const [a, b, c] = combinations;
          if (this.gameBoard.value[a] === player && this.gameBoard.value[a] === this.gameBoard.value[b] && this.gameBoard.value[a] === this.gameBoard.value[c]) {
            return true;
          }
        }
        return false;
    }

    private checkPositionsFilled(): boolean {
        return this.gameBoard.value.every(value => value !== ' ');
    }

    private playPlayerX(index: number) {
        this.setMessage('Is the turn of the X')
        this.setPlayerMovementX(index)
        if(this.checkWinner('X')) {
            this.setMessage('X win!!')
            this.scoreX.value += 1
            this.returnGame.value = true;
        } else {
            this.playerTurn.value = false
            this.setMessage('Is the turn of the O')
        }
    }

    private playPlayerO(index: number) {
        this.setMessage('Is the turn of the O')
        this.setPlayerMovementO(index)
        if(this.checkWinner('O')) {
            this.setMessage('O win!!')
            this.scoreO.value += 1
            this.returnGame.value = true;
        } else {
            this.playerTurn.value = true
            this.setMessage('Is the turn of the X')
        }
    }

    public play(index: number) {
        this.playerTurn.value ? this.playPlayerX(index) : this.playPlayerO(index);
        if(this.checkPositionsFilled()) {
            this.setMessage('¡The game ended in a draw!')
            this.returnGame.value = true;
        }
    }

    public getReturnGame(): boolean {
        return this.returnGame.value;
    }

    public getMessage(): string {
        return this.message.value
    }

    public getTabletGame(): Array<string> {
        return this.gameBoard.value
    }

    public getPlayerTurn(): boolean {
        return this.playerTurn.value
    }

    public getScore(): Score {
        return {
            playerX: this.scoreX.value,
            playerO: this.scoreO.value
        }
    }

    init() {
        this.message.value = 'The game is ready!';
        this.gameBoard.value = [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ];
        this.playerTurn.value = true;
        this.returnGame.value = false;
        this.setMessage('Is the turn of the X')
    }
}