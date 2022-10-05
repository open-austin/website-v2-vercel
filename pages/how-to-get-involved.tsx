import { Container, Heading, Link, Stack, Text } from '@chakra-ui/react'

const GetInvolved = () => {
  return (
    <Container maxW="80ch" minH={'calc(100vh - 335px)'}>
      <Stack>
        <Heading as="h1" variant="title">
          How We Work
        </Heading>
        <Text>
          We host{' '}
          <Link href="https://www.meetup.com/Open-Austin/" isExternal>
            Community Action Nights (CANs) on the second and fourth Wednesday of
            each month
          </Link>{' '}
          to work on technology and design projects that positively impact
          public policy and our communities. We amplify the initiatives of other
          Austin-based civic organizations, and we collaborate with other
          chapters of the{' '}
          <Link href="https://brigade.codeforamerica.org/" isExternal>
            Code for America Brigade Network
          </Link>{' '}
          and the broader civic tech community via our{' '}
          <Link href="https://github.com/open-austin" isExternal>
            GitHub organization
          </Link>
          .
        </Text>
      </Stack>
    </Container>
  )
}

export default GetInvolved
