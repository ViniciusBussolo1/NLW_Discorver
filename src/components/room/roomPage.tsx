'use client'

import Image from 'next/image'
import Logo from '../../../public/Logo.svg'
import Copy from '../../../public/button_incos/Copy.svg'
import DialogPops from '../../../public/DialogPops.svg'

import { Users } from 'lucide-react'

import { FormPropsQuestion } from './components/form/type'
import { FormQuestions } from './components/form/formQuestion'

import supabase from '@/services/supabase'
import Link from 'next/link'

type RoomPageProps = {
  code: string
}

export function RoomPage({ code }: RoomPageProps) {
  const handleSubmitForm = async ({ pergunta }: FormPropsQuestion) => {
    const { data } = await supabase.from('QuestionsRoom').insert([
      {
        question: pergunta,
        codigo: code,
      },
    ])
  }

  return (
    <div className="w-full h-full flex justify-center items-center pt-8">
      <div className="max-w-[70rem] w-full">
        <header className="w-full flex justify-between items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo do Site" />
          </Link>

          <div className="flex items-center gap-2">
            <button className="max-w-[8.375rem] w-full flex items-center gap-[0.625rem] py-[0.688rem] px-4 rounded-lg border-[0.125rem] border-blue font-medium text-blue">
              #323232
              <Image src={Copy} alt="Icone do copiar" />
            </button>
            <button className="max-w-[10.813rem] w-full flex items-center gap-[0.625rem] py-[0.813rem] px-7 rounded-lg bg-blue hover:bg-hover-blue font-medium text-white">
              <Users width={22} height={22} className="text-white" />
              Criar Sala
            </button>
          </div>
        </header>

        <div className="mt-16 flex flex-col gap-6">
          <h1 className="text-[1.75rem] leading-normal font-bold text-black">
            Faça sua pergunta
          </h1>
          <div className="flex flex-col px-4 py-3 border-[0.125rem] border-grey-blue rounded-tr-lg rounded-br-lg rounded-bl-lg">
            <FormQuestions handleSubmitForm={handleSubmitForm} />
          </div>
        </div>

        <div className="w-full flex justify-center items-start mt-14">
          <div className="max-w-[17.313rem] w-full flex flex-col justify-center items-center gap-3">
            <Image src={DialogPops} alt="Imagem de um dialogo" />
            <h3 className="text-lg font-semibold text-black leading-normal">
              Nenhuma pergunta por aqui...
            </h3>
            <span className="w-full text-sm leaidng-normal text-grey-grey text-center">
              Faça sua primeira pergunta e envie o código dessa sala para outras
              pessoas!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
