'use client'

import { useFormCreateRoom } from './useForm'
import { FormPropsCreateRoom } from './type'

import { Eye, EyeOff } from 'lucide-react'

import Image from 'next/image'
import LogIn from '../../../../../public/button_incos/LogIn.svg'
import { useState } from 'react'

type FormProps = {
  handleSubmitForm: (data: FormPropsCreateRoom) => void
}

export function Form({ handleSubmitForm }: FormProps) {
  const [passwordVisiblity, setPasswordVisiblity] = useState(false)

  const { errors, register, handleSubmit } = useFormCreateRoom()

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="w-full flex flex-col gap-[1.125rem]"
    >
      <div className="w-full flex items-center py-[0.813rem] pl-4 pr-3 rounded-lg border-[0.125rem] border-grey-blue focus-within:outline focus-within:outline-[2px] focus-within:outline-white">
        <input
          type={passwordVisiblity ? 'text' : 'password'}
          placeholder="Insira uma senha"
          className="flex-1 outline-none"
          {...register('senha')}
        />
        {passwordVisiblity ? (
          <Eye
            data-testid="eye-icon"
            width={24}
            height={24}
            className="text-blue"
            onClick={() => setPasswordVisiblity(!passwordVisiblity)}
          />
        ) : (
          <EyeOff
            data-testid="eyeOff-icon"
            width={24}
            height={24}
            className="text-blue"
            onClick={() => setPasswordVisiblity(!passwordVisiblity)}
          />
        )}
      </div>

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
