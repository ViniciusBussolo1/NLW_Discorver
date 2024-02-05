import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RoomPage } from './roomPage'

import '@testing-library/jest-dom'

import supabase from '@/services/supabase'

const queryClient = new QueryClient()

describe('<RoomPage />', () => {
  it('should render default correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RoomPage code="UE7HTS" />
      </QueryClientProvider>,
    )

    const buttonCode = screen.getByRole('button', {
      name: /#ue7hts icone do copiar/i,
    })

    const buttonCreateRoom = screen.getByRole('link', {
      name: /criar sala/i,
    })

    expect(buttonCode).toBeVisible()
    expect(buttonCreateRoom).toBeVisible()
  })

  it('should renders initial state without questions', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RoomPage code="UE7HTS" />
      </QueryClientProvider>,
    )

    const NoQuestionsMessage = await screen.findByText(
      /Nenhuma pergunta por aqui/i,
    )

    expect(NoQuestionsMessage).toBeVisible()
  })
})
