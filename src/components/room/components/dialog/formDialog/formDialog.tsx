import { Dispatch, SetStateAction } from 'react'
import { useFormDialog } from './useForm'
import { FormPropsDialog } from './type'

type FormDialogProps = {
  errorMessage: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
  handleDeleteQuestion: (data: FormPropsDialog) => void
}

export function FormDialog({
  setIsOpen,
  handleDeleteQuestion,
  errorMessage,
}: FormDialogProps) {
  const { errors, handleSubmit, register } = useFormDialog()

  return (
    <>
      <form
        onSubmit={handleSubmit(handleDeleteQuestion)}
        className="max-w-[18.875rem] w-full mt-6"
      >
        <input
          type="password"
          placeholder="Informe a senha para excluir"
          className="w-full py-[0.813rem] px-4 rounded-lg border-[0.125rem] border-grey-blue placeholder:text-sm"
          {...register('senha')}
        />
        {errors.senha ? (
          <span className="text-sm leading-normal text-red">
            {errors.senha.message}{' '}
          </span>
        ) : null}

        {errorMessage ? (
          <span className="text-sm leading-normal text-red">
            {errorMessage}{' '}
          </span>
        ) : null}

        <div className="max-w-[18.875rem] w-full flex items-center gap-2 mt-10">
          <button
            onClick={() => setIsOpen(false)}
            className="max-w-[8.688rem] w-full rounded-lg bg-grey-light py-[0.813rem] hover:bg-[#EAEFF5] text-base leading-normal font-medium text-grey-grey"
          >
            Cancelar
          </button>
          <button className="max-w-[9.688rem] w-full py-[0.813rem] rounded-lg bg-red hover:bg-hover-red text-base leading-normal font-medium text-white">
            Sim, excluir
          </button>
        </div>
      </form>
    </>
  )
}
