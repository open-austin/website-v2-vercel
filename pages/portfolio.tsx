import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ProjectCards from '../components/ProjectCards'
import Search from '../components/Search'

import { default as projectData } from '../data/project_data'
import { Projects } from '../types/Projects'

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState<Set<string>>(new Set())
  const [currentStatus, setCurrentStatus] = useState<Set<string>>(new Set())
  const [projectList, setProjectList] = useState<Projects[]>([])

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

  return (
    <Flex flexDirection="column" alignItems="center" my="5%">
      <Search
        setCurrentCategory={setCurrentCategory}
        setCurrentStatus={setCurrentStatus}
      />
      <ProjectCards projectList={projectList} />
    </Flex>
  )
}

export default Portfolio
