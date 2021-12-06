import React from 'react'
import { Box } from '@chakra-ui/react'
import CompanyInfoCard from './CompanyInfoCard'
import CompanyPie from './CompanyPie'
import CompanyGoals from './CompanyGoals'
import CompanyRadar from './CompanyRadar'

const CompanyComparison = ({ stonk }) => {
  return (
    <Box>
      <CompanyInfoCard stonk={stonk} />

      <CompanyPie stonk={stonk} w='full' height='500px' />

      <CompanyGoals stockSymbol={stonk.stockSymbol} />

      <CompanyRadar stonk={stonk} w='full' height='500px' />
    </Box>
  )
}

export default CompanyComparison
