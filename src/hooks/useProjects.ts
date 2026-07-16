import { useState, useEffect } from 'react'
import { api } from '../api'
import type { Project } from '../types'

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    api.projects.list()
      .then(setProjects)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading, error }
}
