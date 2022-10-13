import { useEffect, useState, useRef } from 'react'
import { default as projectData } from '../data/project_data'
import { MultiValue } from 'chakra-react-select'
import SearchBar from './searchBar'

const UNKNOWN_CATEGORY = 'unknown'

export type SelectedMulti = Array<{ value: string; label: string }>

interface Props {
  setCurrentCategory: (currentCategory: Set<string>) => void
  setCurrentStatus: (currentStatus: Set<string>) => void
}

const useSearchBar = () => {
  const [categories, setCategories] = useState<SelectedMulti>([])
  const [statuses, setStatuses] = useState<SelectedMulti>([])
  const isMounted = useRef(true)

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

const Search = ({ setCurrentCategory, setCurrentStatus }: Props) => {
  const { categories, statuses } = useSearchBar()

  const selectionHandler = (
    selection: MultiValue<{
      value: string
      label: string
    }>,
    selector: string
  ) => {
    let set: Set<string> = new Set()
    for (let obj of selection) {
      set.add(obj.value)
    }
    selector === 'category' ? setCurrentCategory(set) : setCurrentStatus(set)
  }

  return (
    <SearchBar
      selectionHandler={selectionHandler}
      statuses={statuses}
      categories={categories}
    />
  )
}

export default Search
