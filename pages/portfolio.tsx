import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ProjectCards from '../components/ProjectCards'
import Search from '../components/Search'

import { default as projectData } from '../data/project_data'
import { Projects } from '../types/Projects'

const Portfolio = () => {
  const [projectList, setProjectList] = useState<Projects[]>([])

  return (
    <Flex flexDirection="column" alignItems="center" my="5%">
      <Search setProjectList={setProjectList} />
      <ProjectCards projectList={projectList} />
    </Flex>
  )
}

export default Portfolio
