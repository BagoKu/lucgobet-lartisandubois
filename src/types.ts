export interface ProjectImage {
  id: number
  project_id: number
  url: string
  display_order: number
}

export interface Project {
  id: number
  title: string
  description: string
  category: string
  cover_image_url: string
  display_order: number
  images?: ProjectImage[]
}

export type ContentMap = Record<string, string>
