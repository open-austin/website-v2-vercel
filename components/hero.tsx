import React from 'react'
import { Stack, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { Button } from './button'
import { Link } from './link'

const Hero = () => (
  <Flex
    w={'full'}
    h={'calc(100vh - 335px)'}
    backgroundImage={`url("assets/code-across-2015-pano.png")`}
    backgroundSize={'cover'}
    backgroundPosition={'center center'}
  >
    <VStack
      w={'full'}
      justify={'center'}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
    >
      <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
        <Text
          color={'white'}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '6xl', md: '7xl' })}
        >
          Open Austin
        </Text>
        <Text
          color={'white'}
          fontWeight={500}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
        >
          Open Austin addresses local social and civic challenges through
          creative uses of technology. We foster relationships between
          government, non- and for-profit organizations, and resident activists.
          All are welcome!
        </Text>
        <Stack direction={'row'} align={'flex-end'}>
          <Link href="about">
            <Button>About</Button>
          </Link>
          <Link href="portfolio">
            <Button>Projects</Button>
          </Link>
        </Stack>
      </Stack>
    </VStack>
  </Flex>
)

export default Hero
