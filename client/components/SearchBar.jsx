import React, { useState } from 'react'
import { HStack, InputGroup, InputLeftElement, Input, Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function SearchBar ({ setSearchTerm, ...rest }) {
  const [value, setValue] = useState('')

  function handleSubmit (evt) {
    evt.preventDefault()
    if (value !== '') {
      setSearchTerm(value)
      setValue('')
    } else {
      console.log('empty')
    }
  }

  return (
    <HStack {...rest}>
      {/* // <Container> */}
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color='gray.400'/>}
        />
        <Input placeholder='Symbol... (e.g. AAPL)' onChange={evt => setValue(evt.target.value)} value={value} maxWidth='40%' />
      </InputGroup>
      <Button onClick={handleSubmit}>
            Go
      </Button>
      {/* </Container> */}
    </HStack>
  )
}

export default SearchBar
