import { render, logRoles, screen, waitFor } from '@testing-library/react'

import { FormCreateRoom } from './formCreateRoom'

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Form } from 'react-hook-form'

const handleSubmitForm = jest.fn()

describe('<FormCreateRoom />', () => {
  it('should render default correctly', () => {
    render(<FormCreateRoom handleSubmitForm={handleSubmitForm} />)

    const inputPassword = screen.getByPlaceholderText(/insira uma senha/i)

    expect(inputPassword).toBeVisible()
  })

  it('should show message error when fields was empty', async () => {
    render(<FormCreateRoom handleSubmitForm={handleSubmitForm} />)

    const buttonSubmit = screen.getByRole('button', {
      name: /icone de login criar sala/i,
    })

    await userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(screen.getByText('Informe a senha da sala')).toBeVisible()
    })
  })

  it('should submit the form correctly', async () => {
    render(<FormCreateRoom handleSubmitForm={handleSubmitForm} />)

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

  it('should change the input type when clicking on the icon', async () => {
    render(<FormCreateRoom handleSubmitForm={handleSubmitForm} />)

    const inputPassword = screen.getByPlaceholderText(
      /insira uma senha/i,
    ) as HTMLInputElement

    const eyeOffIcon = screen.getByTestId('eyeOff-icon')

    expect(inputPassword.type).toBe('password')

    await userEvent.click(eyeOffIcon)

    expect(inputPassword.type).toBe('text')

    const eyeIcon = screen.getByTestId('eye-icon')

    await userEvent.click(eyeIcon)

    expect(inputPassword.type).toBe('password')
  })
})
