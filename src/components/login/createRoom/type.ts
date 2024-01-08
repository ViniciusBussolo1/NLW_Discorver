import { z } from 'zod'
import { schemaFormCreateRoom } from './schema'

export type FormPropsCreateRoom = z.infer<typeof schemaFormCreateRoom>
