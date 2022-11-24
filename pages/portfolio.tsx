import { Flex } from '@chakra-ui/react'
import ProjectList from '../components/ProjectList'
import Search from '../components/Search'

const Portfolio = () => {
  return (
    <Flex flexDirection="column" alignItems="center" my="5%">
      <Search />
      <ProjectList />
    </Flex>
  )
}

export default Portfolio
