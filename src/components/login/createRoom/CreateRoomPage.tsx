import Link from 'next/link'
import Image from 'next/image'

import { Form } from './components/form'
import { FormPropsCreateRoom } from './components/type'

import ShortUniqueId from 'short-unique-id'
import supabase from '@/services/supabase'

import Ilustracao from '../../../../public/Ilustração.svg'
import Logo from '../../../../public/Logo.svg'

export function CreateRoomPage() {
  const handleSubmitForm = async ({ senha }: FormPropsCreateRoom) => {
    const uid = new ShortUniqueId({ length: 6 })
    const code = uid.rnd()
    const codeMaiusculo = code.toUpperCase()

    const { error } = await supabase.from('Room').insert([
      {
        admin: true,
        codigo: codeMaiusculo,
        senha,
      },
    ])
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
            <div className="w-full flex flex-col gap-6 mb-48">
              <h1 className="text-[1.75rem] leading-normal font-bold text-black">
                Crie sua própria sala
              </h1>

              <Form handleSubmitForm={handleSubmitForm} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
