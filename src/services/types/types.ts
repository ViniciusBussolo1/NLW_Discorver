import { Database } from './db_types'

export type Room = Database['public']['Tables']['Room']['Row']
export type QuestionRoom = Database['public']['Tables']['QuestionsRoom']['Row']
