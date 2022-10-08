import { Button, Grid, GridItem, Text } from '@chakra-ui/react'
import { MultiValue, Select } from 'chakra-react-select'
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
    <Grid w="50%" m="auto" gap="2">
      <GridItem gridColumn="1 / span 2" gridRow="1">
        <Text fontSize="3xl">Current Projects</Text>
      </GridItem>
      <GridItem
        gridColumn="3 / span 1"
        gridRow="1"
        alignSelf="center"
        justifySelf="end"
      >
        <Text fontSize="sm">Got an idea?</Text>
      </GridItem>
      <GridItem
        gridColumn="4 / span 1"
        gridRow="1"
        alignSelf="center"
        justifySelf="end"
      >
        <Button>Submit Your Pitch</Button>
      </GridItem>
      <GridItem gridColumn="1 / span 2" gridRow="2">
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
      <GridItem gridColumn="3 / span 2" gridRow="2">
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
