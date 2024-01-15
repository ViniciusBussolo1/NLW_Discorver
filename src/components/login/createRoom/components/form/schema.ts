import { z } from 'zod'

export const schemaFormCreateRoom = z.object({
  senha: z.string().nonempty('Informe uma pergunta para enviar'),
})
