import { describe, test } from 'vitest'
import {render, screen, within} from '@testing-library/vue'
import TicTacToe from "@/views/TicTacToe.vue";

describe('TicTacToe.vue', () => {
    test('should show text title game, Tic Tac Toe!', () => {
        render(TicTacToe)
        const text: HTMLElement = screen.getByRole('heading', { name: 'Tic Tac Toe!' });

        expect(text).toBeInTheDocument()
    })

    test('should display a table with nine buttons, as a three-row by three-column matrix.', () => {
        render(TicTacToe)

        const tableGame: HTMLElement = screen.getByTestId('game-zone')
        const boxInTable: number = within(tableGame).queryAllByRole('button').length

        expect(boxInTable).toBe(9)
    })
})