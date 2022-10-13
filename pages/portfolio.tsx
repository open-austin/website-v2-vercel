import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Projects from '../components/projects'
import Search from '../components/search'

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState<Set<string>>(new Set())
  const [currentStatus, setCurrentStatus] = useState<Set<string>>(new Set())

  return (
    <Flex flexDirection="column" alignItems="center" my="5%">
      <Search
        setCurrentCategory={setCurrentCategory}
        setCurrentStatus={setCurrentStatus}
      />
      <Projects
        currentCategory={currentCategory}
        currentStatus={currentStatus}
      />
    </Flex>
  )
}

export default Portfolio
