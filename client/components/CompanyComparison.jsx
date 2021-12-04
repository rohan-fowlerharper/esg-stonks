import React from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'
import CompanyInfoCard from './CompanyInfoCard'
import CompanyPie from './CompanyPie'
import CompanyGoals from './CompanyGoals'

const CompanyComparison = ({ stonk }) => {
  return (
    <Box>
      <Center>
        <Heading>{stonk.stockSymbol}</Heading>
      </Center>
      <CompanyInfoCard stonk={stonk} />

      <CompanyPie stonk={stonk} w='full' height='500px' />

      <CompanyGoals stockSymbol={stonk.stockSymbol} />
    </Box>
  )
}

export default CompanyComparison
