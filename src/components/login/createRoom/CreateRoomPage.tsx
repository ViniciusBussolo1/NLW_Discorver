import Image from 'next/image'
import LogIn from '../../../../public/button_incos/LogIn.svg'
import Ilustracao from '../../../../public/Ilustração.svg'
import Logo from '../../../../public/Logo.svg'

import { useFormCreateRoom } from './useForm'
import Link from 'next/link'

export function CreateRoomPage() {
  const { errors, register, handleSubmit, handleSubmitForm } =
    useFormCreateRoom()

  return (
    <main className="w-screen h-screen flex flex-col">
      <header>
        <Link href="/">
          <Image src={Logo} alt="Logo do site" className="mt-9 ml-40" />
        </Link>
      </header>

      <div className="h-full flex justify-between">
        <div className="max-w-[40.125rem] w-full">
          <Image src={Ilustracao} alt="Ilustração" className="mt-[2.198rem]" />
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="max-w-[22.688rem] w-full flex flex-col gap-10">
            <div className="w-full flex flex-col gap-6 mb-48">
              <h1 className="text-[1.75rem] leading-normal font-bold text-black">
                Crie sua própria sala
              </h1>

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
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
