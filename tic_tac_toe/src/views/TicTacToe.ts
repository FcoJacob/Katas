import { ref } from 'vue'
import type { Ref } from 'vue'
export default class TicTacToe {
    private message: Ref<string>;
    private gameBoard: Ref<string[]>;
    private playerTurn: Ref<boolean>;
    private scoreX: Ref<number>;
    private scoreO: Ref<number>;

    constructor() {
        this.message = ref('The game is ready!');
        this.gameBoard = ref([ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ]);
        this.playerTurn = ref(true);
        this.scoreX = ref(0);
        this.scoreO = ref(0);
    }

    private setMessage(message: string) {
        this.message.value = message
    }

    public getMessage() {
        return this.message.value
    }

    public getTabletGame() {
        return this.gameBoard.value
    }

    public getPlayerTurn() {
        return this.playerTurn.value
    }

    public getScore() {
        return {
            playerX: this.scoreX.value,
            playerO: this.scoreO.value
        }
    }
    
    public setPlayerMovementX(index: number) {
        if(this.gameBoard.value[index] === ' ') {
            this.gameBoard.value[index] = 'X';
            this.playerTurn.value = false;
            this.setMessage('Is the turn of the O')
        }
    }

    public setPlayerMovementO(index: number) {
        if(this.gameBoard.value[index] === ' ') {
            this.gameBoard.value[index] = 'O';
            this.playerTurn.value = true;
            this.setMessage('Is the turn of the X')
        }
    }

    private playGame() {
        if(this.playerTurn.value) {
            this.setMessage('Is the turn of the X')
        }
    }

    init() {
        this.playGame()
    }
}