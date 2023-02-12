import Link from 'next/link'
import { Button, Flex, Heading, Text } from '@chakra-ui/react'

const ProjectHeader = () => {
  return (
    <Flex
      flexDirection={{ base: 'column' }}
      alignItems={{ base: 'center' }}
      justifyContent={{ base: 'space-around' }}
      gap={4}
    >
      <Heading variant="title">Projects</Heading>
      <Text style={{ textAlign: 'center' }} fontSize="xl">
        Have an idea to improve our community?
      </Text>
      <Link href="/collaborate-with-us" passHref>
        <Button variant="primary" as="a">Submit Your Idea</Button>
      </Link>
    </Flex>
  )
}

export default ProjectHeader
