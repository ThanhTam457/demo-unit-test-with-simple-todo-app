import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AddTodo from '../AddTodo'

const mockSetTodos = jest.fn()

describe('AddTodo', () => {
    describe('render', () => {
        it('should render the input', () => {
            render(<AddTodo setTodos={mockSetTodos} />)
            const input = screen.getByPlaceholderText('New Todo')
            expect(input).toBeInTheDocument()
        })

        it('should render the disabled button', () => {
            render(<AddTodo setTodos={mockSetTodos} />)
            const button = screen.getByRole('button', { name: 'Submit' })
            expect(button).toBeDisabled()
        })
    })

    describe('behavior', () => {
        it('should be able to type in the input', async () => {
            render(<AddTodo setTodos={mockSetTodos} />)
            const input = screen.getByPlaceholderText('New Todo')
            await userEvent.type(input, 'Hello World')
            expect(input).toHaveValue('Hello World')
        })

        it('should have the button enabled when there is text in the input', async () => {
            render(<AddTodo setTodos={mockSetTodos} />)
            const input = screen.getByPlaceholderText('New Todo')
            await userEvent.type(input, 'Hello World')
            const button = screen.getByRole('button', { name: 'Submit' })
            expect(button).toBeEnabled()
        })

        it('should empty the input when the button is clicked', async () => {
            render(<AddTodo setTodos={mockSetTodos} />)
            const input = screen.getByPlaceholderText('New Todo')
            await userEvent.type(input, 'Hello World')
            const button = screen.getByRole('button', { name: 'Submit' })
            await userEvent.click(button)
            expect(input).toHaveValue('')
        })

        it('should call the setTodos function when the button is clicked', async () => {
            render(<AddTodo setTodos={mockSetTodos} />)
            const input = screen.getByPlaceholderText('New Todo')
            await userEvent.type(input, 'Hello World')
            const button = screen.getByRole('button', { name: 'Submit' })
            await userEvent.click(button)
            expect(mockSetTodos).toHaveBeenCalled()
        })
    })
})