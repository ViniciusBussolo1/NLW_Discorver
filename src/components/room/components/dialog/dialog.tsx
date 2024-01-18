import { Dispatch, SetStateAction, useState } from 'react'

import { FormDialog } from './formDialog/formDialog'
import { FormPropsDialog } from './formDialog/type'

import { RefetchOptions } from '@tanstack/react-query'

import supabase from '@/services/supabase'

type DialogProps = {
  id: string
  codigo: string | null
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  refetch: (options?: RefetchOptions | undefined) => void
}

export function Dialog({
  isOpen,
  setIsOpen,
  codigo,
  id,
  refetch,
}: DialogProps) {
  const [errorMessage, setErrorMessage] = useState('')

  const handleDeleteQuestion = async ({ senha }: FormPropsDialog) => {
    if (codigo != null) {
      const { data: Room, error } = await supabase
        .from('Room')
        .select()
        .eq('codigo', codigo)

      const senhaRoom = Room?.some((item) => item.senha === senha)

      if (senhaRoom === true) {
        const { data } = await supabase
          .from('QuestionsRoom')
          .delete()
          .eq('id', id)

        setIsOpen(false)
        refetch()
      } else {
        setErrorMessage('Senha invalida')
      }
    }
  }

  return (
    <>
      {isOpen === true ? (
        <div className="bg-overlay/80 fixed inset-0">
          <div className="fixed top-[50%] left-[50%] max-w-[36.875rem] w-full translate-x-[-50%] translate-y-[-50%] rounded-[0.375rem] bg-white py-16 focus:outline-none flex flex-col justify-center items-center">
            <h1 className="text-black text-2xl leading-[2.125rem] font-bold">
              Excluir pergunta
            </h1>

            <span className="text-base leading-[1.625rem] text-grey-grey mt-3">
              Tem certeza que você deseja excluir esta pergunta?
            </span>

            <FormDialog
              setIsOpen={setIsOpen}
              handleDeleteQuestion={handleDeleteQuestion}
              errorMessage={errorMessage}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
