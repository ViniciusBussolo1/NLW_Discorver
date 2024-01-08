'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormPropsCreateRoom } from './type'
import { schemaFormCreateRoom } from './schema'

export const useFormCreateRoom = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormPropsCreateRoom>({
    mode: 'onChange',
    resolver: zodResolver(schemaFormCreateRoom),
    defaultValues: {
      senha: '',
    },
  })

  const handleSubmitForm = ({ senha }: FormPropsCreateRoom) => {
    console.log(senha)
  }

  return {
    register,
    errors,
    handleSubmitForm,
    handleSubmit,
  }
}
