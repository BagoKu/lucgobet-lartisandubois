export interface ProjectImage {
  id: number
  project_id: number
  url: string
  display_order: number
}

export interface Category {
  id: number
  name: string
  display_order: number
}

export interface Project {
  id: number
  title: string
  description: string
  category: string | null // nom de la catégorie liée (joint par l'API)
  category_id?: number | null
  cover_image_url: string
  display_order: number
  images?: ProjectImage[]
}

export type ContentMap = Record<string, string>
