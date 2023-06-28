import { describe, expect, it } from '@jest/globals'
import TicTacToe from "./TicTacToe";

describe('TicTacToe', () => {
    it('should show, is the turn of the X', () => {
        const Game: TicTacToe = new TicTacToe();
        Game.init();

        expect(Game.getMessage()).toBe('Is the turn of the X')
    })

    it('should start with player x', () => {
        const Game: TicTacToe = new TicTacToe();
        Game.init();

        expect(Game.getPlayerTurn()).toBe(true)
    })

    it('after playing X, it should be the turn of O', () => {
        const Game: TicTacToe = new TicTacToe();
        Game.init();

        Game.play(1);

        expect(Game.getPlayerTurn()).toBe(false)
    })

    it('should not be able to play the same position twice', () => {
        const Game: TicTacToe = new TicTacToe();
        Game.init();

        Game.play(1);
        Game.play(1);

        expect(Game.getTabletGame()[1]).toBe('X')
    })

    it('should win the game the player X', () => {
        const Game: TicTacToe = new TicTacToe();
        Game.init();

        Game.play(0);
        Game.play(4);
        Game.play(2);
        Game.play(7);
        Game.play(1);

        expect(Game.getScore().playerX).toBe(1)
        expect(Game.getScore().playerO).toBe(0)
    })

    it('should win the game the player O', () => {
        const Game: TicTacToe = new TicTacToe();
        Game.init();

        Game.play(0);
        Game.play(4);
        Game.play(2);
        Game.play(7);
        Game.play(8);
        Game.play(1);

        expect(Game.getScore().playerX).toBe(0)
        expect(Game.getScore().playerO).toBe(1)
    })

    it('should end in a draw if no one wins and there are no free positions left', () => {
        const Game: TicTacToe = new TicTacToe();
        Game.init();

        Game.play(0);
        Game.play(2);
        Game.play(1);
        Game.play(3);
        Game.play(5);
        Game.play(4);
        Game.play(8);
        Game.play(7)
        Game.play(6);

        expect(Game.getMessage()).toBe('¡The game ended in a draw!')
        expect(Game.getScore().playerX).toBe(0)
        expect(Game.getScore().playerO).toBe(0)
    })
})
