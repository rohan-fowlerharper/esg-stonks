import React from 'react'
import { Center, Box, Text, Image } from '@chakra-ui/react'

function Company ({ stonk }) {
  return (
    <Box>
      <Center>
        <Text>{stonk.companyName}</Text>
        <Text>{stonk.environmentGrade}</Text>
        <Text>{stonk.socialGrade}</Text>
        <Text>{stonk.governanceGrade}</Text>
      </Center>
    </Box>
  )
}

export default Company
