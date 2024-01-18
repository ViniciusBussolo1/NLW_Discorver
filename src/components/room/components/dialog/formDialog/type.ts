import { z } from 'zod'
import { schemaFormDialog } from './schema'

export type FormPropsDialog = z.infer<typeof schemaFormDialog>
