import { Link } from '@chakra-ui/react'
import { Button } from './button'

export default function DonateButton() {
  return (
    <Link href="https://opencollective.com/open-austin" target={'_blank'}>
      <Button display={{ base: 'none', md: 'inline-flex' }}>Donate</Button>
    </Link>
  )
}
