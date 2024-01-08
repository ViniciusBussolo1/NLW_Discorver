import Image from 'next/image'
import Logo from '../../../public/Logo.svg'
import Ilustracao from '../../../public/Ilustração.svg'
import LogIn from '../../../public/button_incos/LogIn.svg'
import Users from '../../../public/button_incos/Users.svg'

export function Login() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <header>
        <Image src={Logo} alt="Logo do site" className="mt-9 ml-40" />
      </header>
      <div className="h-full flex justify-between ">
        <div className="max-w-[40.125rem] w-full">
          <Image src={Ilustracao} alt="Ilustração" className="mt-[2.198rem] " />
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="max-w-[22.688rem] flex flex-col gap-10">
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-[1.75rem] leading-normal font-bold text-black">
                Entre como participante
              </h1>

              <div className="w-full flex flex-col gap-[1.125rem]">
                <input
                  type="text"
                  placeholder="Código da sala"
                  className="py-[0.813rem] pl-4 pr-3 rounded-lg border-[0.125rem] border-grey-blue focus:border-linear"
                />
                <button className="w-full flex justify-center items-center gap-[0.625rem] py-[0.813rem] bg-blue hover:bg-hover-blue rounded-lg font-medium text-white ">
                  <Image src={LogIn} alt="Icone de login" />
                  Entrar na sala
                </button>
              </div>
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
              <button className="w-full flex justify-center items-center gap-[0.625rem] py-[0.813rem] rounded-lg border-[0.125rem] border-blue font-medium text-blue">
                <Image src={Users} alt="Icone de usuarios" />
                Criar sala
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
