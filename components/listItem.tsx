import { ListItem as ChakraListItem, Text } from '@chakra-ui/react'
import { ListProps } from '../types'

const ListItem = ({ children, ...rest }: ListProps) => (
  <ChakraListItem {...rest}>
    <Text>{children}</Text>
  </ChakraListItem>
)

export default ListItem
