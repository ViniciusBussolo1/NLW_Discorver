'use client'

import Image from 'next/image'
import Logo from '../../../public/Logo.svg'
import Ilustracao from '../../../public/Ilustração.svg'
import LogIn from '../../../public/button_incos/LogIn.svg'
import Users from '../../../public/button_incos/Users.svg'
import Link from 'next/link'

import { useState } from 'react'
import { useFormEnterTheRoom } from './useForm'

export function Login() {
  const [createRoom, setCreateRoom] = useState(false)

  const { errors, register, handleSubmit, handleSubmitForm } =
    useFormEnterTheRoom()

  return (
    <main className="w-screen h-screen flex flex-col">
      <header>
        <Link href="/" onClick={() => setCreateRoom(false)}>
          <Image src={Logo} alt="Logo do site" className="mt-9 ml-40" />
        </Link>
      </header>
      <div className="h-full flex justify-between">
        <div className="max-w-[40.125rem] w-full">
          <Image src={Ilustracao} alt="Ilustração" className="mt-[2.198rem]" />
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="max-w-[22.688rem] w-full flex flex-col gap-10">
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-[1.75rem] leading-normal font-bold text-black">
                Entre como participante
              </h1>

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
            </div>

            <div className="w-full flex justify-between items-center">
              <div className="w-[9.847rem] h-[1px] bg-grey-blue"></div>
              <span className="text-grey-blue">ou</span>
              <div className="w-[9.847rem] h-[1px] bg-grey-blue"></div>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-[1.75rem] leading-normal font-bold text-black">
                Crie sua própria sala, de forma fácil
              </h1>
              <button className="w-full  py-[0.813rem] rounded-lg border-[0.125rem] border-blue font-medium text-blue">
                <Link
                  href="/CreateRoom"
                  className="flex justify-center items-center gap-[0.625rem]"
                >
                  <Image src={Users} alt="Icone de usuarios" />
                  Criar sala
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
