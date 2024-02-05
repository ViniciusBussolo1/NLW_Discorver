'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

import Logo from '../../../public/Logo.svg'
import Ilustracao from '../../../public/Ilustração.svg'

import { FormLogin } from './components/form/formLogin'
import { FormPropsLogin } from './components/form/type'

import { Users } from 'lucide-react'

import supabase from '@/services/supabase'

export function Login() {
  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  const handleSubmitForm = async ({ codigo }: FormPropsLogin) => {
    const { data, error } = await supabase
      .from('Room')
      .select()
      .eq('codigo', codigo)

    const codigoRoom = data?.some((item) => item.codigo === codigo)

    if (codigoRoom) {
      router.push(`room/${codigo}`)
    } else {
      setErrorMessage('Código invalido')
    }
  }

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
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-[1.75rem] leading-normal font-bold text-black">
                Entre como participante
              </h1>
              <FormLogin
                handleSubmitForm={handleSubmitForm}
                errorMessage={errorMessage}
              />
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
                  href="/createRoom"
                  className="flex justify-center items-center gap-[0.625rem]"
                >
                  <Users width={18} height={18} className="text-blue" />
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
