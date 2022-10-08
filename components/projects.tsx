import { default as projectData } from '../data/project_data'
import { useEffect, useState } from 'react'
import ProjectCards from './ProjectCards'

export type TProjects = {
  title: string
  description: string
  access_at?: string | null
  project_at?: string | undefined | null
  type: string
  status: string
  categories: Array<string>
  contact: string | Array<string>
  cfa_stage?: string
  date: string
  thumb?: string | null
  stack?: Array<string>
  published?: boolean
  screenshot?: string
  featured?: boolean
  archived?: boolean
  skipSize: number
}

interface Props {
  currentCategory: Set<string>
  currentStatus: Set<string>
}

const Projects = ({ currentCategory, currentStatus }: Props) => {
  const [projectList, setProjectList] = useState<TProjects[]>([])

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

  return <ProjectCards projectList={projectList} />
}

export default Projects
