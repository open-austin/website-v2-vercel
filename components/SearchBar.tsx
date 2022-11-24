import { Button, Flex, Text } from '@chakra-ui/react'

import { Link } from './link'

const SearchBar = () => {
  return (
    <Flex
      flexDirection={{ base: 'column' }}
      alignItems={{ base: 'center' }}
      justifyContent={{ base: 'space-around' }}
      height={{ base: '10rem' }}
    >
      <Text fontSize="3xl">Projects</Text>
      <Text fontSize="xl">Have an idea to improve our community?</Text>
      <Link href="/collaborate-with-us">
        <Button variant="primary">Submit Your Idea</Button>
      </Link>
    </Flex>
  )
}

export default SearchBar
