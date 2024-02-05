'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useCopyToClipboard } from 'usehooks-ts'

import Logo from '../../../public/Logo.svg'
import Copy from '../../../public/button_incos/Copy.svg'
import DialogPops from '../../../public/DialogPops.svg'

import { Users, User, Check, Trash } from 'lucide-react'

import { FormPropsQuestion } from './components/form/type'
import { FormQuestions } from './components/form/formQuestion'
import { Dialog } from './components/dialog/dialog'

import { useQuery } from '@tanstack/react-query'

import supabase from '@/services/supabase'

type RoomPageProps = {
  code: string
}

export function RoomPage({ code }: RoomPageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copiedCode, copy] = useCopyToClipboard()

  const adminCode = localStorage.getItem('admin')

  const getQuestions = async () => {
    const { data } = await supabase
      .from('QuestionsRoom')
      .select()
      .eq('codigo', code)

    return data
  }

  const { data, refetch } = useQuery({
    queryKey: ['questions'],
    queryFn: getQuestions,
  })

  const handleSubmitForm = async ({ pergunta }: FormPropsQuestion) => {
    const { data } = await supabase.from('QuestionsRoom').insert([
      {
        question: pergunta,
        codigo: code,
        lida: false,
      },
    ])

    refetch()
  }

  const handleMarkAsRead = async (id: string) => {
    const { data } = await supabase
      .from('QuestionsRoom')
      .update({ lida: true })
      .eq('id', id)

    refetch()
  }

  return (
    <>
      {adminCode ? (
        <div className="w-full h-full flex justify-center items-center pt-8">
          <div className="max-w-[70rem] w-full">
            <header className="w-full flex justify-between items-center">
              <Link href="/">
                <Image src={Logo} alt="Logo do Site" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copy(`${code}`)}
                  className="max-w-[8.375rem] w-full flex justify-center items-center gap-[0.625rem] py-[0.688rem] px-4 rounded-lg border-[0.125rem] border-blue font-medium text-blue"
                >
                  #{code}
                  <Image src={Copy} alt="Icone do copiar" />
                </button>
                <Link
                  href="/createRoom"
                  className="max-w-[10.813rem] w-full flex items-center gap-[0.625rem] py-[0.813rem] px-7 rounded-lg bg-blue hover:bg-hover-blue font-medium text-white"
                >
                  <Users width={22} height={22} className="text-white" />
                  Criar Sala
                </Link>
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
              {data?.length === 0 ? (
                <div className="max-w-[17.313rem] w-full flex flex-col justify-center items-center gap-3">
                  <Image src={DialogPops} alt="Imagem de um dialogo" />
                  <h3 className="text-lg font-semibold text-black leading-normal">
                    Nenhuma pergunta por aqui...
                  </h3>
                  <span className="w-full text-sm leaidng-normal text-grey-grey text-center">
                    Faça sua primeira pergunta e envie o código dessa sala para
                    outras pessoas!
                  </span>
                </div>
              ) : (
                <div
                  data-testid="question-list"
                  className="w-full flex flex-col gap-2"
                >
                  {data
                    ?.slice()
                    .sort((a, b) => {
                      if (a.lida && !b.lida) {
                        return 1 // Mover perguntas lidas para o final
                      } else if (!a.lida && b.lida) {
                        return -1 // Manter perguntas não lidas no início
                      } else {
                        return 0 // Manter a ordem atual entre perguntas lidas e não lidas
                      }
                    })
                    .map((item) => {
                      return (
                        <>
                          {item.lida === false ? (
                            <div
                              key={item.id}
                              className="w-full bg-lightBlue py-6 pl-6 pr-8 flex flex-col gap-3 rounded-md"
                            >
                              <div className="w-full flex justify-start items-center gap-4">
                                <div className="w-[3.25rem] h-[3.25rem] bg-blue rounded-full flex justify-center items-center text-white">
                                  <User height={26} width={26} />
                                </div>
                                <span className="text-base leading-normal text-black">
                                  {item.question}
                                </span>
                              </div>
                              <div className="w-full flex justify-end items-center">
                                <div className="flex items-center gap-6">
                                  <div
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => handleMarkAsRead(item.id)}
                                  >
                                    <Check
                                      height={24}
                                      width={24}
                                      className="text-blue"
                                    />
                                    <span className="text-base leading-normal text-grey-grey">
                                      Marcar como lida
                                    </span>
                                  </div>

                                  <div
                                    onClick={() => setIsOpen(true)}
                                    className="flex items-center gap-2 cursor-pointer"
                                  >
                                    <Trash
                                      height={24}
                                      width={24}
                                      className="text-red"
                                    />
                                    <span className="text-base leading-normal text-grey-grey">
                                      Excluir
                                    </span>
                                  </div>
                                  <Dialog
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    codigo={item.codigo}
                                    id={item.id}
                                    refetch={refetch}
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              key={item.id}
                              className="w-full bg-grey-grey/10 py-6 pl-6 pr-8 flex flex-col gap-3 rounded-md"
                            >
                              <div className="w-full flex justify-start items-center gap-4">
                                <div className="w-[3.25rem] h-[3.25rem] bg-grey-blue rounded-full flex justify-center items-center text-white">
                                  <User height={26} width={26} />
                                </div>
                                <span className="text-base leading-normal text-black">
                                  {item.question}
                                </span>
                              </div>
                              <div className="w-full flex justify-end items-center">
                                <div className="flex items-center gap-6">
                                  <div className="flex items-center gap-2 cursor-pointer">
                                    <Check
                                      height={24}
                                      width={24}
                                      className="text-blue"
                                    />
                                    <span className="text-base leading-normal text-grey-grey">
                                      Pergunta lida
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center pt-8">
          <div className="max-w-[70rem] w-full">
            <header className="w-full flex justify-between items-center">
              <Link href="/">
                <Image src={Logo} alt="Logo do Site" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copy(`${code}`)}
                  className="max-w-[8.375rem] w-full flex justify-center items-center gap-[0.625rem] py-[0.688rem] px-4 rounded-lg border-[0.125rem] border-blue font-medium text-blue"
                >
                  #{code}
                  <Image src={Copy} alt="Icone do copiar" />
                </button>
                <Link
                  href="/createRoom"
                  className="max-w-[10.813rem] w-full flex items-center gap-[0.625rem] py-[0.813rem] px-7 rounded-lg bg-blue hover:bg-hover-blue font-medium text-white"
                >
                  <Users width={22} height={22} className="text-white" />
                  Criar Sala
                </Link>
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
              {data?.length === 0 ? (
                <div className="max-w-[17.313rem] w-full flex flex-col justify-center items-center gap-3">
                  <Image src={DialogPops} alt="Imagem de um dialogo" />
                  <h3 className="text-lg font-semibold text-black leading-normal">
                    Nenhuma pergunta por aqui...
                  </h3>
                  <span className="w-full text-sm leaidng-normal text-grey-grey text-center">
                    Faça sua primeira pergunta e envie o código dessa sala para
                    outras pessoas!
                  </span>
                </div>
              ) : (
                <div
                  data-testid="question-list"
                  className="w-full flex flex-col gap-2"
                >
                  {data
                    ?.slice()
                    .sort((a, b) => {
                      if (a.lida && !b.lida) {
                        return 1 // Mover perguntas lidas para o final
                      } else if (!a.lida && b.lida) {
                        return -1 // Manter perguntas não lidas no início
                      } else {
                        return 0 // Manter a ordem atual entre perguntas lidas e não lidas
                      }
                    })
                    .map((item) => {
                      return (
                        <>
                          {item.lida === false ? (
                            <div
                              key={item.id}
                              className="w-full bg-lightBlue py-6 pl-6 pr-8 flex flex-col gap-3 rounded-md"
                            >
                              <div className="w-full flex justify-start items-center gap-4">
                                <div className="w-[3.25rem] h-[3.25rem] bg-blue rounded-full flex justify-center items-center text-white">
                                  <User height={26} width={26} />
                                </div>
                                <span className="text-base leading-normal text-black">
                                  {item.question}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div
                              key={item.id}
                              className="w-full bg-grey-grey/10 py-6 pl-6 pr-8 flex flex-col gap-3 rounded-md"
                            >
                              <div className="w-full flex justify-start items-center gap-4">
                                <div className="w-[3.25rem] h-[3.25rem] bg-grey-blue rounded-full flex justify-center items-center text-white">
                                  <User height={26} width={26} />
                                </div>
                                <span className="text-base leading-normal text-black">
                                  {item.question}
                                </span>
                              </div>
                              <div className="w-full flex justify-end items-center">
                                <div className="flex items-center gap-6">
                                  <div className="flex items-center gap-2 cursor-pointer">
                                    <Check
                                      height={24}
                                      width={24}
                                      className="text-blue"
                                    />
                                    <span className="text-base leading-normal text-grey-grey">
                                      Pergunta lida
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
