import {
  Box,
  Heading,
  Link,
  Stack,
  Text,
  Container,
  Center,
} from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Container maxW="container.lg" minH={'calc(100vh - 320px)'}>
      <Center>
        <Heading as="h1" size={'2xl'} mt={24} mb={12}>
          About Open Austin
        </Heading>
      </Center>
      <Box pb={8} mb={8}>
        <Stack>
          <Heading as="h2" size="lg">
            What is Civic Technology?
          </Heading>
          <Text fontSize={'xl'}>
            The definition of civic tech can be quite unclear sometimes.
            <br />
            Here is a great starting point:{' '}
            <Link
              href="https://medium.com/civic-makers/civictech-primer-what-is-civic-tech-7ea788e766d3#.lr9joeu39"
              isExternal
            >
              #CivicTech Primer: What is “civic tech”?
            </Link>
          </Text>
          <Text fontSize={'xl'}>
            <Text as="em">The gist: </Text>
            Civic tech is using technology in a creative way to help better the
            lives of individuals in our communities, whether through
            person-to-person or person-to-government interactions.
          </Text>
        </Stack>
      </Box>
    </Container>
  )
}

export default About
