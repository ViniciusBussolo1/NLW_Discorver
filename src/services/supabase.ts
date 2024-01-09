import { createClient } from '@supabase/supabase-js'

import type { Database } from './types/db_types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export default supabase
