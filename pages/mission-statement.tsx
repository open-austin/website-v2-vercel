import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  Link,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

const MissionStatement = () => {
  return (
    <Container maxW="container.lg">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1}>
          <Heading lineHeight={1.1} fontWeight={600} variant="title">
            Mission Statement
          </Heading>
          <Text>
            Our mission is to end disparity in Austin WITH technology and IN technology.  We envision a city that respects and serves all people.
          </Text>
          <Text>
            We do this through facilitating issue-based conversations between government and residents, providing service to local nonprofits and community groups that leverage our expertise, and advocating for policy that utilizes technology to improve our community. 
          </Text>
          <Text>
           We are part of the Electronic Frontier Alliance, and support these principles.  We uphold these principles by fighting for transparency and freedom in culture, code, and law.
          </Text>
          <Text>
            (1.) Free Expression - People should be able to speak their minds to whoever will listen. 
            (2.) Security - Technology should be trustworthy and answer to its users. 
            (3.) Privacy - Technology should allow private and anonymous speech, and allow users to set their own parameters about what to share with whom. 
            (4.) Creativity - Technology should promote progress by allowing people to build on the ideas, creations, and inventions of others. 
            (5.) Access to Knowledge - Curiosity should be rewarded, not stifled.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default MissionStatement
