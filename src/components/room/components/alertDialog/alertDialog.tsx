import * as AlertDialog from '@radix-ui/react-alert-dialog'

export function AlertDialogComponent() {
  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="bg-overlay/80 data-[state=open]:animate-overlayShow fixed inset-0" />
      <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-w-[36.875rem] w-full translate-x-[-50%] translate-y-[-50%] rounded-[0.375rem] bg-white py-16 focus:outline-none flex flex-col justify-center items-center">
        <AlertDialog.Title className="text-black text-2xl leading-[2.125rem] font-bold">
          Excluir pergunta
        </AlertDialog.Title>
        <AlertDialog.Description className="text-base leading-[1.625rem] text-grey-grey mt-3">
          Tem certeza que você deseja excluir esta pergunta?
        </AlertDialog.Description>
        <form className="max-w-[18.875rem] w-full mt-6">
          <input
            type="password"
            placeholder="Informe a senha para excluir"
            className="w-full py-[0.813rem] px-4 rounded-lg border-[0.125rem] border-grey-blue placeholder:text-sm"
          />
        </form>

        <div className="max-w-[18.875rem] w-full flex items-center gap-2 mt-10">
          <AlertDialog.Cancel asChild>
            <button className="max-w-[8.688rem] w-full rounded-lg bg-grey-light py-[0.813rem] hover:bg-[#EAEFF5] text-base leading-normal font-medium text-grey-grey">
              Cancelar
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="max-w-[9.688rem] w-full py-[0.813rem] rounded-lg bg-red hover:bg-hover-red text-base leading-normal font-medium text-white">
              Sim, excluir
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  )
}
