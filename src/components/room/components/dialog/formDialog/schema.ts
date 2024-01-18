import { z } from 'zod'

export const schemaFormDialog = z.object({
  senha: z.string().nonempty('Informe sua senha para excluir'),
})
