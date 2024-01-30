'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormPropsLogin } from './type'
import { schemaFormLogin } from './schema'

export const useFormLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormPropsLogin>({
    mode: 'onChange',
    resolver: zodResolver(schemaFormLogin),
    defaultValues: {
      codigo: '',
    },
  })

  const handleSubmitForm = ({ codigo }: FormPropsLogin) => {
    return codigo
  }

  return {
    register,
    errors,
    handleSubmitForm,
    handleSubmit,
  }
}
