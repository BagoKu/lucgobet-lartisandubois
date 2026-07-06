import { useState, useEffect } from 'react'
import { api } from '../api'
import type { Project } from '../types'

export function useProject(id: number) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    api.projects.get(id)
      .then(setProject)
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [id])

  return { project, loading, notFound }
}
