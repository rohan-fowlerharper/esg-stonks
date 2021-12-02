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
        <Image src={`https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png`}></Image>
      </Center>
    </Box>
  )
}

export default Company
