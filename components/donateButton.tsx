import { Button } from '@chakra-ui/react'

export default function DonateButton() {
  const handleClick = () => {
    window.open('https://opencollective.com/open-austin', '_blank')
  }

  return (
    <Button
      variant="primary"
      display={{ base: 'none', md: 'inline-flex' }}
      onClick={handleClick}
    >
      Donate
    </Button>
  )
}
