import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Button,
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react'

const Hero = () => (
  <Flex minH={'calc(100vh - 335px)'} pos="relative">
    <Image
      priority
      alt="Gathering of volunteers at an Open Austin event"
      src={'/assets/code-across-2015-pano.png'}
      layout="fill"
      objectFit="cover"
      quality={80}
    />
    <VStack
      w={'full'}
      zIndex={1}
      justify={'center'}
      bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
    >
      <Box
        boxShadow="2xl"
        maxW={useBreakpointValue({ base: 'full', md: 600 })}
        p={useBreakpointValue({ base: 4, md: 12 })}
        rounded="md"
        bgColor={'blackAlpha.300'}
      >
        <Heading
          as="h1"
          color={'orange.300'}
          textAlign="center"
          fontSize={useBreakpointValue({ base: '6xl', md: '7xl' })}
          fontWeight={900}
        >
          Open Austin
        </Heading>
        <Text
          color={'gray.200'}
          align="center"
          fontWeight={500}
          lineHeight={1.2}
          p={4}
          fontSize={useBreakpointValue({ base: 'xl', md: 'lg' })}
        >
          Open Austin addresses local social and civic challenges through
          creative uses of technology. We foster relationships between
          government, non- and for-profit organizations, and resident activists.
        </Text>

        <Heading
          as="h2"
          color={'gray.100'}
          textAlign="center"
          fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}
          fontWeight={700}
          pb={4}
        >
          All are welcome!
        </Heading>

        <Stack direction={'row'} align={'flex-end'} justifyContent="center">
          <Link href="about" passHref>
            <Button variant="primary" as="a">About</Button>
          </Link>
          <Link href="portfolio" passHref>
            <Button variant="primary" as="a">Projects</Button>
          </Link>
        </Stack>
      </Box>
    </VStack>
  </Flex>
)

export default Hero
