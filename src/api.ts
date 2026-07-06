import type { Project, ContentMap } from './types'

const BASE = import.meta.env.VITE_API_URL ?? ''

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`Erreur ${res.status}`)
  return res.json() as Promise<T>
}

export const api = {
  projects: {
    list: () => get<Project[]>('/api/projects'),
    get: (id: number) => get<Project>(`/api/projects/${id}`),
  },
  content: {
    list: () => get<ContentMap>('/api/content'),
  },
}
