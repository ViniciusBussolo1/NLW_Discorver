'use client'

import { useFormCreateRoom } from './useForm'
import Image from 'next/image'

import LogIn from '../../../../../public/button_incos/LogIn.svg'
import { FormPropsCreateRoom } from './type'

type FormProps = {
  handleSubmitForm: (data: FormPropsCreateRoom) => void
}

export function Form({ handleSubmitForm }: FormProps) {
  const { errors, register, handleSubmit } = useFormCreateRoom()

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="w-full flex flex-col gap-[1.125rem]"
    >
      <input
        type="password"
        placeholder="Insira uma senha"
        className="py-[0.813rem] pl-4 pr-3 rounded-lg border-[0.125rem] border-grey-blue focus:border-linear"
        {...register('senha')}
      />
      {errors.senha ? (
        <span className="text-sm leading-normal text-red">
          {errors.senha.message}{' '}
        </span>
      ) : null}
      <button className="w-full flex justify-center items-center gap-[0.625rem] py-[0.813rem] bg-blue hover:bg-hover-blue rounded-lg font-medium text-white ">
        <Image src={LogIn} alt="Icone de login" />
        Criar sala
      </button>
    </form>
  )
}
