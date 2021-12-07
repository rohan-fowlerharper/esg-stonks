import React from 'react'
import { HStack, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function SearchBar ({ searchTerm, setSearchTerm, ...rest }) {
  return (
    <HStack {...rest}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color='gray.400'/>}
        />
        <Input placeholder='Symbol... (e.g. AAPL)' onChange={evt => setSearchTerm(evt.target.value)} value={searchTerm} />
      </InputGroup>
    </HStack>
  )
}

export default SearchBar
