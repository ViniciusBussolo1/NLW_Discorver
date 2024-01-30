import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Ilustracao from '../../../public/Ilustração.svg'
import Logo from '../../../public/Logo.svg'

import { FormPropsCreateRoom } from './components/form/type'
import { FormCreateRoom } from './components/form/formCreateRoom'

import ShortUniqueId from 'short-unique-id'
import supabase from '@/services/supabase'

export function CreateRoomPage() {
  const router = useRouter()

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
    router.push(`room/${codeMaiusculo}`)
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

              <FormCreateRoom handleSubmitForm={handleSubmitForm} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}