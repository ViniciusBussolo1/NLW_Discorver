import Image from 'next/image'
import Logo from '../../../public/Logo.svg'
import Copy from '../../../public/button_incos/Copy.svg'
import Lock from '../../../public/Lock.svg'
import DialogPops from '../../../public/DialogPops.svg'

import { Users } from 'lucide-react'

export function RoomPage() {
  return (
    <div className="w-full h-full flex justify-center items-center pt-8">
      <div className="max-w-[70rem] w-full">
        <header className="w-full flex justify-between items-center">
          <Image src={Logo} alt="Logo do Site" />

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
            <textarea
              placeholder="O que você quer perguntar?"
              className="w-full outline-none resize-none"
            ></textarea>
            <div className="w-full flex justify-between items-center mt-10">
              <div className="flex items-center gap-[0.375rem]">
                <Image src={Lock} alt="Icone de Cadeado" />
                <span className="text-sm leainding-[1.375rem] text-icons">
                  Esta pergunta é anônima
                </span>
              </div>
              <button className="max-w-[6.125rem] w-full rounded-lg bg-blue hover:bg-hover-blue text-white py-2">
                Enviar
              </button>
            </div>
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
