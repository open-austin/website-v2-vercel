import Image from 'next/image'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Link as ChakraLink,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'
import { Link, LinkProps } from './link'

export const Footer = () => (
  <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}
  >
    <Container
      as={Stack}
      maxW={'6xl'}
      py={useBreakpointValue({ base: 4, md: 10 })}
    >
      <SimpleGrid
        templateColumns={{ base: '1fr 1fr', md: '2fr 1fr 1fr' }}
        templateRows={{ base: '1fr 1fr', md: '1fr' }}
        spacing={8}
      >
        <Stack order={useBreakpointValue({ base: 1, md: 2 })}>
          <Heading as="h2">More Info</Heading>
          {FOOTER_ITEMS_MORE_INFO.map((link) => (
            <Link href={link.href} key={link.key}>
              <Text ml={2}>{link.label}</Text>
            </Link>
          ))}
        </Stack>
        <Stack order={useBreakpointValue({ base: 2, md: 3 })}>
          <Heading as="h2">Support</Heading>
          {FOOTER_ITEMS_SUPPORT.map((link) => (
            <ChakraLink
              href={link.href}
              key={link.key}
              target="_blank"
              rel="noreferrer"
            >
              <Text ml={2}>{link.label}</Text>
            </ChakraLink>
          ))}
        </Stack>
        <Stack
          spacing={6}
          gridColumn={{ base: '1 / -1', md: '1' }}
          order={useBreakpointValue({ base: 3, md: 1 })}
        >
          <Box alignSelf="center">
            <Image
              alt="Open Austin's logo; a five-pointed star in orange and black"
              priority
              src={'/assets/logo.svg'}
              width={60}
              height={60}
            />
          </Box>
          <Text fontSize={'sm'} alignSelf="center">
            © 2022 Open Austin. All rights reserved.
          </Text>
          <Stack direction={'row'} spacing={6} justifyContent="center">
            {SOCIAL_ITEMS.map((link) => (
              <ChakraLink
                href={link.href}
                key={link.key}
                target="_blank"
                rel="noreferrer"
                fontSize={30}
                aria-label={link.label}
              >
                {link.icon}
              </ChakraLink>
            ))}
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  </Box>
)

type FooterItems = LinkProps & {
  key: string
  label: string
  icon?: ReactNode
}

const FOOTER_ITEMS_MORE_INFO: ReadonlyArray<FooterItems> = [
  { href: 'about', label: 'About', key: 'About' },
  { href: 'portfolio', label: 'Portfolio', key: 'Portfolio' },
  {
    href: 'mailto:info@open-austin.org',
    label: 'Contact Us',
    key: 'Contact-Us',
  },
]

const FOOTER_ITEMS_SUPPORT: ReadonlyArray<FooterItems> = [
  {
    href: 'https://opencollective.com/open-austin',
    label: 'Open Collective',
    key: 'oc',
  },
  {
    href: 'https://github.com/sponsors/open-austin',
    label: 'GitHub Sponsor',
    key: 'github',
  },
]

const SOCIAL_ITEMS: ReadonlyArray<FooterItems> = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/open_austin',
    icon: <FaInstagram />,
    key: 'instagram',
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/UCSDcLeHsq8k-WLaJaRQHh4w',
    icon: <FaYoutube />,
    key: 'youtube',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/open-austin/about/',
    icon: <FaLinkedin />,
    key: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/open-austin',
    icon: <FaGithub />,
    key: 'github',
  },
]
