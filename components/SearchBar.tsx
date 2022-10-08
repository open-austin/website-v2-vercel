import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react'
import { useEffect, useState, useRef } from 'react'
import { default as projectData } from '../data/project_data'
import { Select, MultiValue } from 'chakra-react-select'

const UNKNOWN_CATEGORY = 'unknown'

type SelectedMulti = Array<{ value: string; label: string }>

interface Props {
  setCurrentCategory: (currentCategory: Set<string>) => void
  setCurrentStatus: (currentStatus: Set<string>) => void
}

const useSearchBar = () => {
  const [categories, setCategories] = useState<SelectedMulti>([])
  const [statuses, setStatuses] = useState<SelectedMulti>([])
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted.current) {
      const cats = Array.from(
        new Set(projectData.flatMap((p) => p.categories))
      ).map((label) => ({ value: label, label }))

      setCategories(cats)

      const stats = Array.from(
        new Set(projectData.flatMap((p) => p.status || UNKNOWN_CATEGORY))
      ).map((label) => ({ value: label, label }))

      setStatuses(stats)
      isMounted.current = false
    }
  }, [])

  return {
    categories,
    statuses,
  }
}

const SearchBar = ({ setCurrentCategory, setCurrentStatus }: Props) => {
  const { categories, statuses } = useSearchBar()

  const selectionHandler = (
    selection: MultiValue<{
      value: string
      label: string
    }>,
    selector: string
  ) => {
    let set: Set<string> = new Set()
    for (let obj of selection) {
      set.add(obj.value)
    }
    selector === 'category' ? setCurrentCategory(set) : setCurrentStatus(set)
  }

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
