export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          avatar_url: string | null
          avatar_base64: string | null
          bio: string | null
          interests: string[] | null
          preferred_themes: string | null
          accessibility_settings: {
            highContrast: boolean
            largeText: boolean
            reduceMotion: boolean
          } | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          username?: string | null
          avatar_url?: string | null
          avatar_base64?: string | null
          bio?: string | null
          interests?: string[] | null
          preferred_themes?: string | null
          accessibility_settings?: {
            highContrast: boolean
            largeText: boolean
            reduceMotion: boolean
          } | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          username?: string | null
          avatar_url?: string | null
          avatar_base64?: string | null
          bio?: string | null
          interests?: string[] | null
          preferred_themes?: string | null
          accessibility_settings?: {
            highContrast: boolean
            largeText: boolean
            reduceMotion: boolean
          } | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          resource_id: string
          resource_type: string
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          resource_id: string
          resource_type: string
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          resource_id?: string
          resource_type?: string
          created_at?: string | null
        }
      }
      comments: {
        Row: {
          id: string
          user_id: string
          resource_id: string
          resource_type: string
          content: string
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          resource_id: string
          resource_type: string
          content: string
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          resource_id?: string
          resource_type?: string
          content?: string
          created_at?: string | null
          updated_at?: string | null
        }
      }
      assessment_results: {
        Row: {
          id: string
          user_id: string
          assessment_type: string
          score: number | null
          level: string
          description: string | null
          color: string | null
          suggestions: string[] | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          assessment_type: string
          score?: number | null
          level: string
          description?: string | null
          color?: string | null
          suggestions?: string[] | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          assessment_type?: string
          score?: number | null
          level?: string
          description?: string | null
          color?: string | null
          suggestions?: string[] | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      user_notes: {
        Row: {
          id: string
          user_id: string
          title: string
          content: string | null
          tags: string[] | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          content?: string | null
          tags?: string[] | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          content?: string | null
          tags?: string[] | null
          created_at?: string | null
          updated_at?: string | null
        }
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
  }
}