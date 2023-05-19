import { describe, test } from 'vitest'
import {render, screen, within} from '@testing-library/vue'
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
        const boxInTable = within(tableGame).queryAllByRole('button').length

        expect(boxInTable).toBe(9)
    })

    test('should show text corresponding turn of player X', async () => {
        render(TicTacToe)
    
        const startGameBtn = screen.getByRole('button', { name: 'Start Game' });
        await userEvent.click(startGameBtn)
    
        expect(screen.queryByText('The game is ready!')).not.toBeInTheDocument()
        expect(screen.getByText('Is the turn of the X')).toBeInTheDocument()
    })

    test('should show text corresponding turn of player O', async () => {
        render(TicTacToe)
    
        const startGameBtn = screen.getByRole('button', { name: 'Start Game' });
        await userEvent.click(startGameBtn)
        await userEvent.click(startGameBtn)
    
        expect(screen.queryByText('The game is ready!')).not.toBeInTheDocument()
        expect(screen.queryByText('Is the turn of the X')).not.toBeInTheDocument()
        expect(screen.getByText('Is the turn of the O')).toBeInTheDocument()
    })
})