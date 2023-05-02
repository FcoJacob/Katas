import { describe, test, expect, vi } from 'vitest'
import Game from '../utils/game'

describe('game tic tac toe', () => {
    const game = new Game();

    test('should display a message informing that the game has started', () => {
        const logSpy = vi.spyOn(global.console, 'log');
        
        game.init();
        expect(logSpy).toHaveBeenCalledWith('The game has begun!');
    });

    test('should play X first', () => {
        const logSpy = vi.spyOn(global.console, 'log');

        game.init();
        expect(logSpy).toHaveBeenCalledWith('It is the turn of the X: ');
    })
})