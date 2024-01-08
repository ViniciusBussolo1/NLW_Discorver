import { z } from 'zod'

export const schemaFormEnterTheRoom = z.object({
  codigo: z.string().nonempty('Informe o código da sala'),
})
