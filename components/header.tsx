import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Link,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Badge,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import DonateButton from './donateButton'
import DarkModeSwitch from './darkModeSwitch'
import Logo from './logo'
import { Link as NextLink } from './link'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href="/">
            <Logo
              color={useColorModeValue('gray.700', 'white')}
              height={'3rem'}
            />
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <DarkModeSwitch />
          <DonateButton />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={8} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.href}
                {...{
                  p: 2,
                  fontSize: 'md',
                  fontWeight: 500,
                  color: linkColor,
                  _hover: {
                    textDecoration: 'none',
                    color: linkHoverColor,
                  },
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel, wip }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
            {wip && (
              <Badge ml="1" colorScheme="green">
                Coming Soon
              </Badge>
            )}
          </Text>
          <Text fontSize={'sm'} color={'pink.900'}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack layerStyle="ns" onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: '0 !important' }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <NextLink
                href={child.href}
                key={child.label}
                py={2}
                isExternal={child.external}
              >
                {child.label}
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

type NavItem = {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
  external?: boolean
  wip?: boolean
}

const NAV_ITEMS: ReadonlyArray<NavItem> = [
  {
    label: 'Projects',
    children: [
      {
        label: 'Portfolio',
        subLabel: 'Current and completed projects',
        href: '/portfolio',
      },
      {
        label: 'How to get involved',
        subLabel: 'Learn about how we work and finding the right project.',
        href: '/how-to-get-involved',
      },
      {
        label: 'Project Handbook',
        subLabel: 'Our guide to collaborating on successful projects.',
        href: '#',
        wip: true,
      },
      {
        label: 'Submit a project idea',
        href: '/collaborate-with-us',
      },
    ],
  },
  {
    label: 'Join',
    children: [
      {
        label: 'Join Slack',
        href: 'https://slack.open-austin.org/',
        external: true,
      },
      {
        label: 'Onboarding',
        subLabel: 'Learn about how we work.',
        href: '#',
        wip: true,
      },
    ],
  },
  {
    label: 'About',
    children: [
      {
        label: 'Meet the Team',
        subLabel: 'Learn about our board of directors and community members.',
        href: '/meet-the-team',
      },
      {
        label: 'Mission Statement',
        href: '/mission-statement',
      },
      {
        label: 'Wins',
        href: '#',
        wip: true,
      },
      {
        label: 'Community Partners',
        href: '#',
        wip: true,
      },
      {
        label: 'Code of Conduct',
        href: '/code-of-conduct',
      },
    ],
  },
]
