import { useState, useRef, useEffect } from 'react'
import { Projects, SelectedMulti } from '../types'

// Filters through project data for exisitng categories and statuses.
export const useSearchBar = (projectData: Projects[]) => {
  const [categories, setCategories] = useState<SelectedMulti>([])
  const [statuses, setStatuses] = useState<SelectedMulti>([])
  const isMounted = useRef(true)

  const UNKNOWN_CATEGORY = 'unknown'

  useEffect(() => {
    if (isMounted.current) {
      const cats = Array.from(
        new Set(projectData.flatMap((p) => p.categories))
      ).map((label) => ({ value: label, label }))

      setCategories(cats)

      const stats = Array.from(
        new Set(projectData.flatMap((p) => p.status || UNKNOWN_CATEGORY))
      ).map((label) => ({ value: label, label }))

      setStatuses(stats)
      isMounted.current = false
    }
  }, [])

  return {
    categories,
    statuses,
  }
}
