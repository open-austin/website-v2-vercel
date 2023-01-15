import Image from 'next/image'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link, LinkProps } from './link'

type SocialLink = LinkProps & {
  label: string
}

type FooterItems = SocialLink & {
  key: string
  icon?: ReactNode
}

const SocialLink = ({ children, label, href }: SocialLink) => {
  return (
    <Link href={href} variant="socialLink" fontSize={'1.5em'}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Link>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return <Heading as="h2">{children}</Heading>
}

const ListLink = ({ children, href }: LinkProps) => {
  return (
    <Link href={href}>
      <Text>{children}</Text>
    </Link>
  )
}

const FOOTER_ITEMS_COMPANY: ReadonlyArray<FooterItems> = [
  { href: 'about', label: 'About', key: 'About' },
  { href: 'portfolio', label: 'Portfolio', key: 'Portfolio' },
  {
    href: 'mailto:info@open-austin.org',
    label: 'Contact us',
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
    label: 'Twitter',
    href: 'https://twitter.com/openaustin',
    icon: <FaTwitter />,
    key: 'twitter',
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

export default function LargeWithNewsletter() {
  return (
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
            <ListHeader>More Info</ListHeader>
            {FOOTER_ITEMS_COMPANY.map((link) => (
              <ListLink href={link.href} key={link.key}>
                {link.label}
              </ListLink>
            ))}
          </Stack>
          <Stack order={useBreakpointValue({ base: 2, md: 3 })}>
            <ListHeader>Support</ListHeader>
            {FOOTER_ITEMS_SUPPORT.map((link) => (
              <ListLink href={link.href} key={link.key}>
                {link.label}
              </ListLink>
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
              © 2022 Open Austin. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6} justifyContent="center">
              {SOCIAL_ITEMS.map((link) => (
                <SocialLink label={link.label} href={link.href} key={link.key}>
                  {link.icon}
                </SocialLink>
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
