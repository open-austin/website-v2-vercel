import {
  Box,
  chakra,
  Heading,
  Stack,
  Text,
  UnorderedList,
  OrderedList,
  Container,
  Center,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from '../components/link'
import ListItem from '../components/listItem'

const Collaborate = () => {
  return (
    <Container maxW="container.md">
      <Stack>
        <Center>
          <Heading as="h1" variant="title">
            Collaborate With Us
          </Heading>
        </Center>
        <Box>
          <Stack>
            <Heading variant="section">
              Identified a problem in the Austin community?
            </Heading>
            <Text>
              {`We'd love to work with you and make Austin more liveable for
              everyone. You can submit a problem statement to our leadership
              team using the project form linked further on. Before you submit,
              please make sure your submission is aligned with our guidelines
              below.`}
            </Text>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Heading variant="section">
              What Constitutes an Open Austin Project?
            </Heading>
            <Text>A project must:</Text>
            <UnorderedList>
              <ListItem>
                <chakra.span fontWeight={'bold'}>
                  Solve a real civic need.
                </chakra.span>{' '}
                While there are plenty of good ideas out there, we limit
                ourselves to civic-tech-related, social impact work. We
                understand this can be a fuzzy distinction, which is why we
                always will have you discuss your problem statement/idea with
                Open Austin leadership before we commit to anything.
              </ListItem>
              <ListItem>
                <chakra.span fontWeight={'bold'}>
                  Be open-source for its entire lifetime.
                </chakra.span>{' '}
                If this is code, “open-source” means freely available on GitHub.
                If the project doesn’t consist of code, this means that the
                progress and deliverable are openly available in some other
                accessible way.
              </ListItem>
              <ListItem>
                <chakra.span fontWeight={'bold'}>Be non-partisan.</chakra.span>{' '}
                Because we are a 501(c)3 organization and we have a diverse
                group of members, we cannot take on partisan projects. Projects
                focused on topics like open data and transparency are fair game,
                but projects to support a partisan political effort are not (i.e
                transparency tool for campaign finance is good, a website
                promoting a candidate is a no-go).
              </ListItem>
            </UnorderedList>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Heading variant="section">
              How Open Austin Takes on New Projects
            </Heading>
            <OrderedList>
              <ListItem>
                Submit a project idea{' '}
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScvbAd9T3nrqmjQjkohaO8Hq9MCP7Z_L8oNnGT1_MpfTwbbvw/viewform"
                  isExternal
                >
                  with this project idea form.
                </Link>
              </ListItem>
              <ListItem>
                Conduct conversation(s) with the Open Austin leadership team.
              </ListItem>
              <ListItem>Craft a project pitch.</ListItem>
              <ListItem>
                Set the project up for success — we will work with you on this.
              </ListItem>
              <ListItem>
                Pitch and work on the project at Open Austin’s{' '}
                <Link href="https://www.meetup.com/Open-Austin/" isExternal>
                  Community Action Nights (CANs)
                </Link>
                .
              </ListItem>
            </OrderedList>
          </Stack>
        </Box>
        <iframe
          className="lazyloaded"
          loading="lazy"
          height={1100}
          data-src="https://docs.google.com/forms/d/e/1FAIpQLScvbAd9T3nrqmjQjkohaO8Hq9MCP7Z_L8oNnGT1_MpfTwbbvw/viewform?embedded=true&amp;usp=embed_facebook"
          src="https://docs.google.com/forms/d/e/1FAIpQLScvbAd9T3nrqmjQjkohaO8Hq9MCP7Z_L8oNnGT1_MpfTwbbvw/viewform?embedded=true&amp;usp=embed_facebook"
          name="fitvid0"
        >
          Loading…
        </iframe>
        <Box layerStyle={'credits-box'}>
          <Heading variant="credits">Credits</Heading>
          <Text>
            This information is based on&nbsp;
            <Link href="https://www.codeforboston.org/projects/" isExternal>
              {"Code for Boston's Project Page"}
            </Link>
            .
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}

export default Collaborate
