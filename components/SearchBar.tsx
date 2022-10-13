import { Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { MultiValue, Select } from 'chakra-react-select'
import { Link } from './link'
import { SelectedMulti } from './search'

interface Props {
  categories: SelectedMulti
  statuses: SelectedMulti
  selectionHandler: (
    selection: MultiValue<{
      value: string
      label: string
    }>,
    selector: string
  ) => void
}

const SearchBar = ({ selectionHandler, statuses, categories }: Props) => {
  return (
    <Grid
      w={{ base: '90%', md: '50%' }}
      m="auto"
      gap="2"
      templateColumns={{ md: '1fr 1fr 1fr' }}
      templateRows={{ base: '1fr 1fr 1fr 1fr' }}
    >
      <GridItem
        gridColumn={{ base: '1 / span -1', md: '1 / span 2' }}
        gridRow="1"
        m={{ base: 'auto' }}
      >
        <Text fontSize="3xl">Current Projects</Text>
      </GridItem>
      <GridItem
        gridColumn={{ base: '1 / span -1', md: '3 / span 2' }}
        gridRow={{ base: '2', md: '1' }}
        alignSelf="center"
      >
        <Flex alignItems="center" justifyContent="end">
          <Text fontSize="xl" mr="5%">
            Got an idea?
          </Text>
          <Link href="/collaborate-with-us">
            <Button variant="primary">Submit Your Pitch</Button>
          </Link>
        </Flex>
      </GridItem>
      <GridItem gridColumn="1 / span 2" gridRow={{ base: '3', md: '2' }}>
        <Select
          size="md"
          isMulti
          options={categories}
          placeholder="Choose categories..."
          closeMenuOnSelect={false}
          selectedOptionStyle="check"
          hideSelectedOptions={false}
          onChange={(selection) => {
            selectionHandler(selection, 'category')
          }}
        />
      </GridItem>
      <GridItem
        gridColumn={{ base: '1 / span -1', md: '3 / span 2' }}
        gridRow={{ base: '4', md: '2' }}
      >
        <Select
          size="md"
          isMulti
          options={statuses}
          placeholder="Choose status..."
          closeMenuOnSelect={false}
          selectedOptionStyle="check"
          hideSelectedOptions={false}
          onChange={(selection) => {
            selectionHandler(selection, 'status')
          }}
        />
      </GridItem>
    </Grid>
  )
}

export default SearchBar
