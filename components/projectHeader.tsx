import { Button, Flex, Heading, Text } from '@chakra-ui/react'

import { Link } from './link'

const ProjectHeader = () => {
  return (
    <Flex
      flexDirection={{ base: 'column' }}
      alignItems={{ base: 'center' }}
      justifyContent={{ base: 'space-around' }}
      height={{ base: '10rem' }}
    >
      <Heading variant="title">Projects</Heading>
      <Text style={{ textAlign: 'center' }} fontSize="xl">
        Have an idea to improve our community?
      </Text>
      <Link href="/collaborate-with-us">
        <Button variant="primary">Submit Your Idea</Button>
      </Link>
    </Flex>
  )
}

export default ProjectHeader
