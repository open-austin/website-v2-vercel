import { Container, Heading, Link, Stack, Text } from '@chakra-ui/react'

const GetInvolved = () => {
  return (
    <Container maxW="80ch" minH={'calc(100vh - 335px)'}>
      <Stack>
        <Heading as="h1" variant="title">
          Volunteer with us
        </Heading>
        <Text>
          We host{' '}
          <Link href="https://www.meetup.com/Open-Austin/" isExternal>
            Community Action Nights (CANs) every other week
          </Link>{' '}
          to work on technology and design projects that positively impact
          public policy and our communities. We amplify the initiatives of other
          Austin-based civic organizations, and we collaborate with the broader
          civic tech community via our{' '}
          <Link href="https://github.com/open-austin" isExternal>
            GitHub organization
          </Link>
          .
        </Text>
        <Text>
          We are part of the{' '}
          <Link href="http://www.civictechnologists.org/" isExternal>
            Alliance of Civic Technologists
          </Link>
          .
        </Text>
      </Stack>
    </Container>
  )
}

export default GetInvolved
