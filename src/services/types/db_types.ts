export type Json = string | number | boolean | null

export interface Database {
  public: {
    Tables: {
      Room: {
        Row: {
          admin: boolean | null
          codigo: string | null
          created_at: string
          id: string
          senha: string | null
        }
        Insert: {
          admin?: boolean | null
          codigo?: string | null
          created_at?: string
          id?: string
          senha?: string | null
        }
        Update: {
          admin?: boolean | null
          codigo?: string | null
          created_at?: string
          id?: string
          senha?: string | null
        }
        Relationships: []
      }
      QuestionsRoom: {
        Row: {
          codigo: string | null
          created_at: string
          id: string
          question: string | null
        }
        Insert: {
          codigo?: string | null
          created_at?: string
          id?: string
          question?: string | null
        }
        Update: {
          codigo?: string | null
          created_at?: string
          id?: string
          question?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
