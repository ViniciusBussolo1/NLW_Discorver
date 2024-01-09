'use client'

import { useForm } from 'react-hook-form'
import { FormPropsEnterTheRoom } from './type'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaFormEnterTheRoom } from './schema'

export const useFormEnterTheRoom = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormPropsEnterTheRoom>({
    mode: 'onChange',
    resolver: zodResolver(schemaFormEnterTheRoom),
    defaultValues: {
      codigo: '',
    },
  })

  const handleSubmitForm = ({ codigo }: FormPropsEnterTheRoom) => {
    return codigo
  }

  return {
    register,
    errors,
    handleSubmitForm,
    handleSubmit,
  }
}
