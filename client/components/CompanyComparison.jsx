import React from 'react'
import { Box } from '@chakra-ui/react'
import CompanyInfoCard from './CompanyInfoCard'
import CompanyPie from './CompanyPie'
import CompanyGoals from './CompanyGoals'

const CompanyComparison = ({ stonk }) => {
  return (
    <Box>
      <CompanyInfoCard stonk={stonk} />

      <CompanyPie stonk={stonk} />

      <CompanyGoals stockSymbol={stonk.stockSymbol} />
    </Box>
  )
}

export default CompanyComparison
