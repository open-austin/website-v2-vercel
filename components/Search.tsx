import { useEffect, useState } from 'react'
import { data as projectData } from '../data/project_data'
import { MultiValue } from 'chakra-react-select'
import SearchBar from './SearchBar'
import { Projects } from '../types/Projects'

type Label = { value: string; label: string }

export type Labels = Array<Label>

type Props = {
  setProjectList: (projectList: Projects[]) => void
}

// Unique array of statuses
const statusLabels = Array.from(new Set(projectData.map((p) => p.status)))
  // adding labels
  .map((label) => ({ value: label, label }))

// Unique array of categories
const categoryLabels = Array.from(
  new Set(projectData.flatMap((p) => p.categories))
)
  // adding labels
  .map((label) => ({ value: label, label }))

const Search = ({ setProjectList }: Props) => {
  const [currentCategory, setCurrentCategory] = useState<Array<string>>([])
  const [currentStatus, setCurrentStatus] = useState<Array<string>>([])

  useEffect(() => {
    // If no filters are selected, show all projects
    if (currentCategory.length === 0 && currentStatus.length === 0) {
      setProjectList(projectData)
    } else {
      const searchedProjects = projectData.filter((p) => {
        const statusMatch = currentStatus.includes(p.status)
        const categoryMatch = p.categories.some((a) =>
          currentCategory.includes(a)
        )

        // This is the trickest part.
        if (currentCategory.length === 0) {
          return statusMatch
        }
        if (currentStatus.length === 0) {
          return categoryMatch
        }
        return statusMatch && categoryMatch
      })
      setProjectList(searchedProjects)
    }
  }, [currentCategory, currentStatus, setProjectList])

  const selectionHandler = (selection: MultiValue<Label>, selector: string) => {
    const values = selection.map((a) => a.value)
    if (selector === 'category') {
      setCurrentCategory(values)
    } else {
      setCurrentStatus(values)
    }
  }

  return (
    <SearchBar
      selectionHandler={selectionHandler}
      statuses={statusLabels}
      categories={categoryLabels}
    />
  )
}

export default Search
