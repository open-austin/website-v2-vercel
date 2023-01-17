import { Button } from '@chakra-ui/react'

export default function DonateButton() {
  return (
    <a
      href="https://opencollective.com/open-austin"
      target="_blank"
      rel="noreferrer"
    >
      <Button variant="primary" display={{ base: 'none', md: 'inline-flex' }}>
        Donate
      </Button>
    </a>
  )
}
