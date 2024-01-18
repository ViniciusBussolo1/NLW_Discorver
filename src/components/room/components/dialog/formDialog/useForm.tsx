'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormPropsDialog } from './type'
import { schemaFormDialog } from './schema'

export const useFormDialog = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormPropsDialog>({
    mode: 'onChange',
    resolver: zodResolver(schemaFormDialog),
    defaultValues: {
      senha: '',
    },
  })

  return {
    register,
    errors,
    handleSubmit,
  }
}
