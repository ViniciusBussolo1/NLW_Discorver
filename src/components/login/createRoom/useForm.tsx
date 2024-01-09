'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormPropsCreateRoom } from './type'
import { schemaFormCreateRoom } from './schema'

import ShortUniqueId from 'short-unique-id'
import supabase from '@/services/supabase'

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

  const handleSubmitForm = async ({ senha }: FormPropsCreateRoom) => {
    const uid = new ShortUniqueId({ length: 6 })
    const code = uid.rnd()
    const codeMaiusculo = code.toUpperCase()

    const { error } = await supabase.from('Room').insert([
      {
        admin: true,
        codigo: codeMaiusculo,
        senha,
      },
    ])
  }

  return {
    register,
    errors,
    handleSubmitForm,
    handleSubmit,
  }
}
