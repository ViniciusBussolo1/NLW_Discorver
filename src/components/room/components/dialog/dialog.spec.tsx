import { render, screen } from '@testing-library/react'
import { Dialog } from './dialog'

import '@testing-library/jest-dom'

const refetch = jest.fn()
const setIsOpen = jest.fn()

describe('<Dialog />', () => {
  it('should render dialog when isOpen is true', () => {
    const isOpen = true
    render(
      <Dialog
        codigo="dasdas"
        isOpen={isOpen}
        refetch={refetch}
        setIsOpen={setIsOpen}
        id="14782"
      />,
    )

    const title = screen.getByRole('heading', {
      name: /excluir pergunta/i,
    })

    const span = screen.getByText(
      /tem certeza que você deseja excluir esta pergunta\?/i,
    )

    expect(title).toBeVisible()
    expect(span).toBeVisible()
  })

  it('should not render dialog when isOpen is false', () => {
    const isOpen = false
    render(
      <Dialog
        codigo="dasdas"
        isOpen={isOpen}
        refetch={refetch}
        setIsOpen={setIsOpen}
        id="14782"
      />,
    )

    const title = screen.queryByText('Excluir pergunta')

    const span = screen.queryByText(
      'tem certeza que você deseja excluir esta pergunta',
    )

    expect(title).not.toBeInTheDocument()
    expect(span).not.toBeInTheDocument()
  })
})
