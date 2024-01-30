import Image from 'next/image'
import { useFormLogin } from './useForm'

import LogIn from '../../../../../public/button_incos/LogIn.svg'

type FormLoginProps = {
  handleSubmitForm: () => void
}

export function FormLogin({ handleSubmitForm }: FormLoginProps) {
  const { errors, register, handleSubmit } = useFormLogin()

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="w-full flex flex-col gap-[1.125rem]"
    >
      <input
        type="text"
        placeholder="Código da sala"
        className="py-[0.813rem] pl-4 pr-3 rounded-lg border-[0.125rem] border-grey-blue focus:border-linear"
        {...register('codigo')}
      />
      {errors.codigo ? (
        <span className="text-sm leading-normal text-red">
          {errors.codigo.message}{' '}
        </span>
      ) : null}
      <button className="w-full flex justify-center items-center gap-[0.625rem] py-[0.813rem] bg-blue hover:bg-hover-blue rounded-lg font-medium text-white ">
        <Image src={LogIn} alt="Icone de login" />
        Entrar na sala
      </button>
    </form>
  )
}
