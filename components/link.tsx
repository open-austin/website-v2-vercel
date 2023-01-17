// Wrapping Chakra's <Link> with NextJS's <Link>

// See: https://chakra-ui.com/docs/components/link/usage#usage-with-nextjs

import NextLink from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

export type LinkProps = ChakraLinkProps

export const Link = ({ href = '/', children, ...rest }: LinkProps) => (
  <NextLink passHref href={href}>
    <ChakraLink {...rest}>{children}</ChakraLink>
  </NextLink>
)
