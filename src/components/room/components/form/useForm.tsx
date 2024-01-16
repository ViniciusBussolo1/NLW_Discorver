'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormPropsQuestion } from './type'
import { schemaFormQuestion } from './schema'

export const useFormQuestion = () => {
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm<FormPropsQuestion>({
    mode: 'onChange',
    resolver: zodResolver(schemaFormQuestion),
    defaultValues: {
      pergunta: '',
    },
  })

  return {
    register,
    errors,
    handleSubmit,
  }
}
