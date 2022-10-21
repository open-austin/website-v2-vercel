import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import ProjectCards from '../components/ProjectCards'
import Search from '../components/Search'
import { Projects } from '../types'

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
