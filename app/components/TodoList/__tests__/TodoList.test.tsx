import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import TodoList from '../TodoList'

const mockSetTodos = jest.fn()

const mockTodos = [
    {
        "userId": 1,
        "title": "Hello! 👋",
        "completed": false,
        "id": 1
    },
    {
        "userId": 1,
        "title": "Get Coffee ☕☕☕",
        "completed": false,
        "id": 2
    },
]

describe('TodoList', () => {
    describe('render', () => {
        it('should be have message when there are no todos', () => {
            render(<TodoList todos={[]} setTodos={mockSetTodos} />)
            const message = screen.getByText('No Todos Available')
            expect(message).toBeInTheDocument()
        })

        it('should have 2 item when there are 2 todos', () => {
            render(<TodoList todos={mockTodos} setTodos={mockSetTodos} />)
            const items = screen.getAllByRole('article')
            expect(items).toHaveLength(2)
        })

        it('should have the first item with the correct text', () => {
            render(<TodoList todos={mockTodos} setTodos={mockSetTodos} />)
            const item = screen.getAllByTestId('todo-item')[0]
            expect(item).toBeInTheDocument()
        })
    })
})