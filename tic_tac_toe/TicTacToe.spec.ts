import { describe, expect, it } from '@jest/globals'
import TicTacToe from "./TicTacToe";

describe('TicTacToe.vue', () => {
    it('should show, is the turn of the X', () => {
        const Game: TicTacToe = new TicTacToe();
        Game.init();

        expect(Game.getMessage()).toBe('Is the turn of the X')
    })
})
