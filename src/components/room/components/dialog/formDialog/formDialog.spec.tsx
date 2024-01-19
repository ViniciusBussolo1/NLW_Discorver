import { render, screen, waitFor } from '@testing-library/react'
import { FormDialog } from './formDialog'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

const handleDeleteQuestion = jest.fn()
const setIsOpen = jest.fn()

describe('<FormDialog />', () => {
  it('should render default correctly', () => {
    render(
      <FormDialog
        errorMessage="Senha invalida"
        handleDeleteQuestion={handleDeleteQuestion}
        setIsOpen={setIsOpen}
      />,
    )

    const input = screen.getByPlaceholderText(/informe a senha para excluir/i)
    const buttonSubmit = screen.getByRole('button', {
      name: /sim, excluir/i,
    })

    expect(input).toBeVisible()
    expect(buttonSubmit).toBeVisible()
  })

  it('should show error message when fields are empty', async () => {
    render(
      <FormDialog
        errorMessage="Senha invalida"
        handleDeleteQuestion={handleDeleteQuestion}
        setIsOpen={setIsOpen}
      />,
    )

    const buttonSubmit = screen.getByRole('button', {
      name: /sim, excluir/i,
    })

    await userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(screen.getByText(/informe sua senha para excluir/i)).toBeVisible()
    })
  })

  it('should submit the form correctly', async () => {
    render(
      <FormDialog
        errorMessage="Senha invalida"
        handleDeleteQuestion={handleDeleteQuestion}
        setIsOpen={setIsOpen}
      />,
    )

    const mockPassword = '123'

    const input = screen.getByPlaceholderText(/informe a senha para excluir/i)
    const buttonSubmit = screen.getByRole('button', {
      name: /sim, excluir/i,
    })

    await userEvent.type(input, mockPassword)
    await userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(
        screen.queryByText(/informe sua senha para excluir/i),
      ).not.toBeInTheDocument()
    })

    expect(input).toHaveValue(mockPassword)

    await waitFor(() => {
      expect(handleDeleteQuestion).toHaveBeenCalledTimes(1)
      expect(handleDeleteQuestion).toHaveBeenCalledWith(
        {
          senha: mockPassword,
        },
        expect.anything(),
      )
    })
  })
})
