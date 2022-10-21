import { useEffect, useState, useRef } from 'react'
import { default as projectData } from '../data/project_data'
import { MultiValue } from 'chakra-react-select'
import SearchBar from './SearchBar'
import { Projects } from '../types/Projects'

const UNKNOWN_CATEGORY = 'unknown'

export type SelectedMulti = Array<{ value: string; label: string }>

type Props = {
  setProjectList: (projectList: Projects[]) => void
}

const useSearchBar = () => {
  const [categories, setCategories] = useState<SelectedMulti>([])
  const [statuses, setStatuses] = useState<SelectedMulti>([])
  const [categorySet, setCategorySet] = useState<string[]>([])
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted.current) {
      const cats = Array.from(new Set(projectData.flatMap((p) => p.categories)))
      let catSelectedMulti = cats.map((label) => ({ value: label, label }))
      setCategorySet(cats)
      setCategories(catSelectedMulti)

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
    categorySet,
  }
}

const Search = ({ setProjectList }: Props) => {
  const { categories, statuses, categorySet } = useSearchBar()
  const [currentCategory, setCurrentCategory] = useState<Set<string>>(new Set())
  const [currentStatus, setCurrentStatus] = useState<Set<string>>(new Set())

  function projectFilter() {
    // Handles clearing multiselectors
    if (currentCategory.size === 0 && currentStatus.size === 0) {
      setProjectList(projectData)
    }
    // Handles multiselectors
    else {
      /*       
        Creates a hash of projects for every category and status.
        Updates searchedProjects state by retrieving values for each entry of currentCategory or currentStatus or both.
      */
      let searchedProjects: Projects[] = []
      let selectorHash = new Map()

      categorySet.forEach((cat) => selectorHash.set(cat, []))
      for (let p of projectData) {
        const { categories, status } = p
        selectorHash.has(status)
          ? selectorHash.get(status).push(p)
          : selectorHash.set(status, [p])

        categories.forEach((cat) => selectorHash.get(cat).push(p))
      }

      if (currentStatus.size == 0 && currentCategory.size > 0) {
        currentCategory.forEach((cat) => {
          searchedProjects.push(selectorHash.get(cat))
        })
      } else if (currentStatus.size > 0 && currentCategory.size == 0) {
        currentStatus.forEach((stat) =>
          searchedProjects.push(selectorHash.get(stat))
        )
      } else {
        let categoryFilter: Projects[] = []
        currentCategory.forEach((cat) =>
          categoryFilter.push(selectorHash.get(cat))
        )
        searchedProjects = categoryFilter.filter((cat) =>
          currentStatus.has(cat.status)
        )
      }
      setProjectList(searchedProjects.flat())
    }
  }

  useEffect(() => {
    projectFilter()
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
