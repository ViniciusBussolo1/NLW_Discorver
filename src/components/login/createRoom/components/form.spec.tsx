import { render, logRoles, screen, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Form } from './form'

const handleSubmitForm = jest.fn()

describe('<Form />', () => {
  it('should render default correctly', () => {
    render(<Form handleSubmitForm={handleSubmitForm} />)

    const inputPassword = screen.getByPlaceholderText(/insira uma senha/i)

    expect(inputPassword).toBeVisible()
  })

  it('should show message error when fields was empty', async () => {
    render(<Form handleSubmitForm={handleSubmitForm} />)

    const buttonSubmit = screen.getByRole('button', {
      name: /icone de login criar sala/i,
    })

    await userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(screen.getByText('Informe a senha da sala')).toBeVisible()
    })
  })

  it.only('should submit the form correctly', async () => {
    render(<Form handleSubmitForm={handleSubmitForm} />)

    const mockPassword = '12345'

    const inputPassword = screen.getByPlaceholderText(/insira uma senha/i)

    const buttonSubmit = screen.getByRole('button', {
      name: /icone de login criar sala/i,
    })

    await userEvent.type(inputPassword, mockPassword)
    await userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(
        screen.queryByText('Informe a senha da sala'),
      ).not.toBeInTheDocument()
    })

    expect(inputPassword).toHaveValue(mockPassword)

    await waitFor(() => {
      expect(handleSubmitForm).toHaveBeenCalledTimes(1)
      expect(handleSubmitForm).toHaveBeenCalledWith(
        {
          senha: mockPassword,
        },
        expect.anything(),
      )
    })
  })
})
