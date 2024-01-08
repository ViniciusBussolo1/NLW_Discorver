import { z } from 'zod'

export const schemaFormCreateRoom = z.object({
  senha: z.string().nonempty('Informe a senha da sala'),
})
