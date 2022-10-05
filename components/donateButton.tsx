import { Link, Button } from '@chakra-ui/react'

export default function DonateButton() {
  return (
    <Link href="https://opencollective.com/open-austin" target={'_blank'}>
      <Button variant="primary" display={{ base: 'none', md: 'inline-flex' }}>
        Donate
      </Button>
    </Link>
  )
}
