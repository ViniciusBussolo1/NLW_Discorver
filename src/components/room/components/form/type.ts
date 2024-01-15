import { z } from 'zod'
import { schemaFormQuestion } from './schema'

export type FormPropsQuestion = z.infer<typeof schemaFormQuestion>
