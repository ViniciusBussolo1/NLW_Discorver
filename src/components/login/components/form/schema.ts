import { z } from 'zod'

export const schemaFormLogin = z.object({
  codigo: z.string().nonempty('Informe o código da sala'),
})
