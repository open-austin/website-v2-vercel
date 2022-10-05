import {
  Button as ChakraButton,
  ButtonProps,
  useColorModeValue,
} from '@chakra-ui/react'

// TODO: delete this? It just hardcodes the 'variant' property
export const Button = ({ children, ...rest }: ButtonProps) => (
  <ChakraButton variant="primary" {...rest}>
    {children}
  </ChakraButton>
)
