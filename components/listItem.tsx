import {
  ListItem as ChakraListItem,
  ListItemProps,
  Text,
} from '@chakra-ui/react'

export type Props = ListItemProps

const ListItem = ({ children, ...rest }: Props) => (
  <ChakraListItem {...rest}>
    <Text>{children}</Text>
  </ChakraListItem>
)

export default ListItem
