import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={toggleColorMode}
      bg="transparent"
      size="lg"
      color={colorMode === 'light' ? 'blue.700' : 'yellow.300'}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  )
}
