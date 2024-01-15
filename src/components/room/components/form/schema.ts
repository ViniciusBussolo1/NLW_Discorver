import { z } from 'zod'

export const schemaFormQuestion = z.object({
  pergunta: z.string().nonempty('Informe uma pergunta para enviar'),
})
