import { z } from 'zod'
import { schemaFormLogin } from './schema'

export type FormPropsLogin = z.infer<typeof schemaFormLogin>
