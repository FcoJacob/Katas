import { describe, test } from 'vitest'
import {render, screen, waitFor, within} from '@testing-library/vue'
import TicTacToe from "@/views/TicTacToe.vue";
import userEvent from '@testing-library/user-event'

describe('TicTacToe.vue', () => {
    test('should show text title game, Tic Tac Toe!', () => {
        render(TicTacToe)
        const text = screen.getByRole('heading', { name: 'Tic Tac Toe!' });

        expect(text).toBeInTheDocument()
    })

    test('should display a table with nine buttons, as a three-row by three-column matrix.', () => {
        render(TicTacToe)

        const tableGame = screen.getByTestId('game-zone')
        const boxInTable = within(tableGame).queryAllByRole('buttonTabletGame').length

        expect(boxInTable).toBe(9)
    })

    test('should not be able to play if you do not click start game.', async () => {
        render(TicTacToe)

        const actionX = screen.queryAllByRole('buttonTabletGame', { name: '' });
        await userEvent.click(actionX[0])

        expect(screen.queryByText('X')).not.toBeInTheDocument()
    })

    test('you should not be able to click on a position that is already filled by a player', async () => {
        render(TicTacToe)

        const startGameBtn = screen.getByRole('button', { name: 'Start Game' });
        await userEvent.click(startGameBtn)
        const action = screen.queryAllByRole('buttonTabletGame', { name: '' });
        await userEvent.click(action[0])
        expect(screen.queryByText('X')).toBeInTheDocument()
        await userEvent.click(action[0])

        expect(screen.queryByText('O')).not.toBeInTheDocument()
    })

    test('should be able to see the button to restart a game, when a player wins', async () => {
        render(TicTacToe)

        const startGameBtn = screen.getByRole('button', { name: 'Start Game' });
        await userEvent.click(startGameBtn)
        const action = screen.queryAllByRole('buttonTabletGame', { name: '' });
        await userEvent.click(action[0])
        await userEvent.click(action[4])
        await userEvent.click(action[1])
        await userEvent.click(action[8])
        await userEvent.click(action[2])
        const returnGameBtn = screen.getByRole('button', { name: 'Return Game?' });

        expect(returnGameBtn).toBeInTheDocument()
    })

    test('should start a new game by clicking on return game', async () => {
        render(TicTacToe)

        const startGameBtn = screen.getByRole('button', { name: 'Start Game' });
        await userEvent.click(startGameBtn)
        const action = screen.queryAllByRole('buttonTabletGame', { name: '' });
        await userEvent.click(action[0])
        await userEvent.click(action[4])
        await userEvent.click(action[1])
        await userEvent.click(action[8])
        await userEvent.click(action[2])
        const returnGameBtn = screen.getByRole('button', { name: 'Return Game?' });
        await userEvent.click(returnGameBtn)

        expect(screen.getByText('Is the turn of the X')).toBeInTheDocument()
    })

    describe('when the turn is of the player X', () => {
        test('should show text corresponding turn of player X', async () => {
            render(TicTacToe)
        
            const startGameBtn = screen.getByRole('button', { name: 'Start Game' });
            await userEvent.click(startGameBtn)
        
            expect(screen.queryByText('The game is ready!')).not.toBeInTheDocument()
            expect(screen.getByText('Is the turn of the X')).toBeInTheDocument()
        })

        test('should won the game if have 3 positions consecutive', async () => {
            render(TicTacToe)
            
            const startGameBtn = screen.getByRole('button', { name: 'Start Game' });
            await userEvent.click(startGameBtn)
            const action = screen.queryAllByRole('buttonTabletGame', { name: '' });
            await userEvent.click(action[0])
            await userEvent.click(action[4])
            await userEvent.click(action[1])
            await userEvent.click(action[8])
            await userEvent.click(action[2])
            const scoreX = screen.getByTestId('scoreX')
            const result = within(scoreX).getByText('1')

            expect(screen.getByText('X win!!')).toBeInTheDocument()
            expect(result).toBeInTheDocument()
        })
    })

    describe('when the turn is of the player O', () => {
        test('should show text corresponding turn of player O, after of turn of player X', async () => {
            render(TicTacToe)
        
            const startGameBtn = screen.getByRole('button', { name: 'Start Game' });
            await userEvent.click(startGameBtn)
            expect(screen.queryByText('The game is ready!')).not.toBeInTheDocument()
            expect(screen.queryByText('Is the turn of the X')).toBeInTheDocument()
            const actionX = screen.queryAllByRole('buttonTabletGame', { name: '' });
            await userEvent.click(actionX[0])

            expect(screen.queryByText('X')).toBeInTheDocument()
            expect(screen.queryByText('Is the turn of the X')).not.toBeInTheDocument()
            expect(screen.getByText('Is the turn of the O')).toBeInTheDocument()
        })

        test('should won the game if have 3 positions consecutive', async () => {
            render(TicTacToe)
            
            const startGameBtn = screen.getByRole('button', { name: 'Start Game' });
            await userEvent.click(startGameBtn)
            const action = screen.queryAllByRole('buttonTabletGame', { name: '' });
            await userEvent.click(action[0])
            await userEvent.click(action[4])
            await userEvent.click(action[1])
            await userEvent.click(action[2])
            await userEvent.click(action[5])
            await userEvent.click(action[6])
            const scoreO = screen.getByTestId('scoreO')
            const result = within(scoreO).getByText('1')

            expect(screen.getByText('O win!!')).toBeInTheDocument()
            expect(result).toBeInTheDocument()
        })
    })    
})