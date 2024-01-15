'use client'

import Image from 'next/image'
import Lock from '../../../../../public/Lock.svg'

import { FormPropsQuestion } from './type'
import { useFormQuestion } from './useForm'

type FormProps = {
  handleSubmitForm: (data: FormPropsQuestion) => void
}

export function FormQuestions({ handleSubmitForm }: FormProps) {
  const { errors, handleSubmit, register } = useFormQuestion()

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <textarea
        placeholder="O que você quer perguntar?"
        className="w-full outline-none resize-none"
        {...register('pergunta')}
      ></textarea>
      {errors.pergunta ? (
        <span className="text-sm leading-normal text-red">
          {errors.pergunta.message}{' '}
        </span>
      ) : null}
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
    </form>
  )
}
