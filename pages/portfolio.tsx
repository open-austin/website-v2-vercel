import { Container, Flex } from '@chakra-ui/react'
import ProjectList from '../components/ProjectList'
import ProjectHeader from '../components/projectHeader'

const Portfolio = () => {
  return (
    <Container maxW="container.lg" mb={{ base: '50%', md: '15%' }}>
      <Flex flexDirection="column" alignItems="center" my="5%">
        <ProjectHeader />
        <ProjectList />
      </Flex>
    </Container>
  )
}

export default Portfolio
