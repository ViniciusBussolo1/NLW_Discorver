import { render, screen, waitFor } from '@testing-library/react'
import { FormQuestions } from './formQuestion'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

const handleSubmitForm = jest.fn()

describe('<FormQuestion>', () => {
  it('should render default correctly', () => {
    render(<FormQuestions handleSubmitForm={handleSubmitForm} />)

    const textArea = screen.getByRole('textbox')

    expect(textArea).toBeVisible()
  })

  it('should show error message when fields are empty', async () => {
    render(<FormQuestions handleSubmitForm={handleSubmitForm} />)

    const buttonSubmit = screen.getByRole('button', {
      name: /enviar/i,
    })

    await userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(
        screen.getByText(/informe uma pergunta para enviar/i),
      ).toBeVisible()
    })
  })

  it('should submit the form correctly', async () => {
    render(<FormQuestions handleSubmitForm={handleSubmitForm} />)

    const mockQuestion = 'teste de pergunta'

    const textArea = screen.getByRole('textbox')
    const buttonSubmit = screen.getByRole('button', {
      name: /enviar/i,
    })

    await userEvent.type(textArea, mockQuestion)
    await userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(
        screen.queryByText(/Informe uma pergunta para enviar/i),
      ).not.toBeInTheDocument()
    })

    expect(textArea).toHaveValue(mockQuestion)

    await waitFor(() => {
      expect(handleSubmitForm).toHaveBeenCalledTimes(1)
      expect(handleSubmitForm).toHaveBeenCalledWith(
        {
          pergunta: mockQuestion,
        },
        expect.anything(),
      )
    })
  })
})
