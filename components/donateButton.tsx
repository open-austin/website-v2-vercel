import Link from 'next/link'
import { Button } from '@chakra-ui/react'

export default function DonateButton() {
  return (
    <Link
      href="https://opencollective.com/open-austin"
      target="_blank"
      rel="noreferrer"
      passHref
    >
      <Button variant="primary" display={{ base: 'none', md: 'inline-flex' }} as="a">
        Donate
      </Button>
    </Link>
  )
}
