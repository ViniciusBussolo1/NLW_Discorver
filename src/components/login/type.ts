import { z } from 'zod'
import { schemaFormEnterTheRoom } from './schema'

export type FormPropsEnterTheRoom = z.infer<typeof schemaFormEnterTheRoom>
