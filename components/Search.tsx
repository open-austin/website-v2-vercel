import { useEffect, useState, useRef } from 'react'
import { default as projectData } from '../data/project_data'
import { MultiValue } from 'chakra-react-select'
import SearchBar from './SearchBar'
import { useSearchBar } from './useSearchBar'
import { SearchProps } from '../types'

const Search = ({ setProjectList }: SearchProps) => {
  const [currentCategory, setCurrentCategory] = useState<Set<string>>(new Set())
  const [currentStatus, setCurrentStatus] = useState<Set<string>>(new Set())
  const { categories, statuses } = useSearchBar(projectData)

  useEffect(() => {
    // Handles clearing multiselectors
    if (currentCategory.size === 0 && currentStatus.size === 0) {
      setProjectList(projectData)
    }
    // Handles multiselectors
    else {
      const searchedProjects = projectData.filter((p) => {
        let categories = new Set([...p.categories])
        let superSet = new Set([...categories, ...currentCategory])
        // Handles category search without statuses
        if (
          currentStatus.size === 0 &&
          superSet.size < categories.size + currentCategory.size
        ) {
          return p
        }
        // Handles status search without categories
        else if (currentCategory.size === 0 && currentStatus.has(p?.status)) {
          return p
        }
        // Handles both status and category search
        else if (
          superSet.size < categories.size + currentCategory.size &&
          currentStatus.has(p?.status)
        ) {
          return p
        }
      })
      setProjectList(searchedProjects)
    }
  }, [currentCategory, currentStatus])

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
