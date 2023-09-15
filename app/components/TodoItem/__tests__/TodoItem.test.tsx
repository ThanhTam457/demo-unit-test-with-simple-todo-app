import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import TodoItem from '../../TodoItem/TodoItem'

const mockTodo = {
    "userId": 1,
    "title": "This is for adding",
    "completed": false,
    "id": 1
}

const mockSetTodos = jest.fn()

describe('AddTodo', () => {
    describe('render', () => {
        it('should render the article', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)
            const article = screen.getByRole('article')
            expect(article).toBeInTheDocument()
        })

        it('should render the label', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)
            const label = screen.getByTestId('todo-item')
            expect(label).toBeInTheDocument()
        })

        it('should render the checkbox', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)
            const checkbox = screen.getByRole('checkbox')
            expect(checkbox).toBeInTheDocument()
        })

        it('should render the delete button', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)
            const deleteButton = screen.getByTestId('delete-button')
            expect(deleteButton).toBeInTheDocument()
        })
    })

    describe('behavior', () => {
        it('should update the todo when the checkbox is clicked', async () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)
            const checkbox = screen.getByRole('checkbox') as HTMLInputElement
            expect(checkbox).toBeInTheDocument()
        })

        it('should update the todo when the button is clicked', async () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)
            const submitButton = screen.getByRole('button')
            await userEvent.click(submitButton)
            expect(mockSetTodos).toHaveBeenCalled()
        })
    })
})