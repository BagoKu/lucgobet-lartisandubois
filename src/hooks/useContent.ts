import { useState, useEffect } from 'react'
import { api } from '../api'
import type { ContentMap } from '../types'

export function useContent() {
  const [content, setContent] = useState<ContentMap>({})

  useEffect(() => {
    api.content.list().then(setContent).catch(() => {})
  }, [])

  return content
}
