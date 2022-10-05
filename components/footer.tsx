import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { Link, LinkProps } from './link'
import Logo from './logo'

type SocialLink = LinkProps & {
  label: string
}

type FooterItems = SocialLink & {
  key: string
  icon?: ReactNode
}

const SocialLink = ({ children, label, href }: SocialLink) => {
  return (
    <Link href={href} variant="socialLink">
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Link>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return <Text variant="flh">{children}</Text>
}

const ListLink = ({ children, href }: LinkProps) => {
  return (
    <Link href={href}>
      <Text variant="fll">{children}</Text>
    </Link>
  )
}

const FOOTER_ITEMS_COMPANY: ReadonlyArray<FooterItems> = [
  { href: '#', label: 'About', key: 'About' },
  { href: '#', label: 'Blog', key: 'Blog' },
  { href: '#', label: 'Contact us', key: 'Contact-Us' },
  { href: '#', label: 'Testimonials', key: 'Testimonials' },
]

const FOOTER_ITEMS_SUPPORT: ReadonlyArray<FooterItems> = [
  {
    href: 'https://opencollective.com/open-austin',
    label: 'Donate',
    key: 'donate',
  },
  { href: '#', label: 'Help', key: 'Help' },
  { href: '#', label: 'Legal', key: 'Legal' },
  { href: '#', label: 'Privacy Policy', key: 'Privacy-Policy' },
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
    label: 'Instagram',
    href: '#',
    icon: <FaInstagram />,
    key: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/open-austin/about/',
    icon: <FaLinkedin />,
    key: 'linkedin',
  },
]

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ base: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          templateRows={{ base: '1fr 1fr 1fr', md: '1fr' }}
          spacing={8}
        >
          <Stack spacing={6} gridColumn={{ base: '1 / -1', md: '1' }}>
            <Box alignSelf="center">
              <Logo
                color={useColorModeValue('gray.700', 'white')}
                height={'5em'}
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
          <Stack>
            <ListHeader>Company</ListHeader>
            {FOOTER_ITEMS_COMPANY.map((link) => (
              <ListLink href={link.href} key={link.key}>
                {link.label}
              </ListLink>
            ))}
          </Stack>
          <Stack>
            <ListHeader>Support</ListHeader>
            {FOOTER_ITEMS_SUPPORT.map((link) => (
              <ListLink href={link.href} key={link.key}>
                {link.label}
              </ListLink>
            ))}
          </Stack>
          <Stack
            align={{ base: 'center', lg: 'flex-start' }}
            gridColumn={{ base: '1 / -1', md: '4 / -1' }}
          >
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('#EA6036', '#F2884B')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: useColorModeValue('#C83E2F', '#FFFFFF'),
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
